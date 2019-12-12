

## What Are the Requirements?
When deciding how to backup a database, the two major factors that
are often used are RPO - [Recovery Point Object](https://en.wikipedia.org/wiki/Recovery_point_objective) - and RTO - [Recovery Time Object](https://en.wikipedia.org/wiki/Recovery_time_objective). That is, how much data can you afford to lose and how long can you afford to spend recovering when disaster strikes.

In the scope of a SQL Server Express installation, some different factors might apply.
Most databases on an Express instance probably fall under one of the following:

* Backups don't matter - the data isn't important
* Backups matter on a controlled server
* Backups matter on a customer's server

### Option 1: Don't Backup At All
If you're using SQL Server Express for educational purposes, local development,
unit testing, etc. then you're almost certainly in the first option. Don't sweat it. You can probably afford to keep your entire database in scripts to rebuild on the fly and don't need a formal backup. This makes the case for using a fully source controlled database an easy one as well. Life is good, isn't it?

### Option 2: Backup As Needed
If you're in the second camp and *do* actually care about backups, things can still be pretty easy - you just need to answer the
RPO and RTO questions and figure out what combination of [full](https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/full-file-backups-sql-server), [differential](https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/differential-backups-sql-server), and [transactional log](https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/transaction-log-backups-sql-server) backups best fit your needs and when to schedule them. A normal database (far larger than 10GB) might typically have the following backup schedule:

* Weekly full backups
* Daily differential backups
* 15 minute transactional backups

Since none of the databases under SQL Server Express can exceed 10GB and the backups can be compressed, however, it may be easier to make the full backups more frequent. If there is a high transactional volume on the database and recovering quickly is important, the below backup template is a good starting point:

* Daily full backups
* 12 hour differential backup
* 15 minute transactional backups

Remember, though that even a small database can still generate huge amounts of transactions that can quickly make a differential backup larger than a full backup. In this case, more frequent full backups might yield faster recovery times and less space overall.

Conversely, if the data isn't changing very often, an even simpler route is to take advantage of the simple recovery mode and only deal with full backups. The time to restore a backup less than 10GB will be negligible in most cases. The storage required is also not a general concern either, with the availability of storage being so cheap and easy to come by. The simplest backup schedule is:

* Daily full backup

### Option 3: Backup for Customers
This one is the trickiest. While customers will most likely have the ability to change the backup plans set in place by default for an application, many will never choose to change them due to support agreements or lack of domain knowledge. If an application crashes, even because of a database related issue, it will reflect poorly on the software product, not Microsoft. Having at least a light backup plan in place by default allows the customer to recover some of their lost data even if they didn't have the know-how to set it up for themselves.

Without tacking on additional dozens of GB of space requirements for a product, a once weekly
full backup should provide a sweet spot
between convenience and safety. Using the simple recovery mode will remove the necessity for managing and storing transaction log backups as well, decreasing the complexity and backup size of the backup plan.

## Backup Scripts for SQL Express
Whether an instance is Enterprise or Express, it needs a tried and true method of backing up. While it is easy enough to hand-craft backup commands for any given database, creating scripts to automate the more intricate parts of the commands and make them re-usable is a feat. The favorite of many DBAs and companies is [Ola Hallengren's backup scripts](https://ola.hallengren.com/sql-server-backup.html) which do an amazing job of making it easy to customize and maintain smart backup scripts.

Here are some examples that implement the above examples using Ola's scripts. Included are some best practices like compression, logging the backup to a log table,
and cleaning up old backup files to prevent disks from filling up.

::: tip
Each backup should customize options based on requirements. The below are meant as guides and should not be used on production environments without additional testing and customization.
:::

### SQL Server Express Standard Backup Schedule

```sql
/* Weekly Full Backup */
EXECUTE dbo.DatabaseBackup
@Databases = 'USER_DATABASES',
@Directory = 'C:\Backup',
@BackupType = 'FULL',
@Compess = 'Y',
@LogToTable = 'Y',
@CleanupTime = 336, --14 days
@CleanupMode = 'AFTER_BACKUP',
@Verify = 'Y'

/* Daily Differential Backup */
EXECUTE dbo.DatabaseBackup
@Databases = 'USER_DATABASES',
@Directory = 'C:\Backup',
@BackupType = 'DIFF',
@Compess = 'Y',
@LogToTable = 'Y',
@CleanupTime = 168, --7 days
@CleanupMode = 'AFTER_BACKUP',
@Verify = 'Y'

/* 15 Minute Tran Log Backup */
EXECUTE dbo.DatabaseBackup
@Databases = 'USER_DATABASES',
@Directory = 'C:\Backup',
@BackupType = 'LOG',
@Compess = 'Y',
@LogToTable = 'Y',
@CleanupTime = 168, --7 days
@CleanupMode = 'AFTER_BACKUP',
@Verify = 'Y'
```

### Highly Transactional / Low RTO SQL Server Express Backup Schedule

```sql
/* Daily Full Backup */
EXECUTE dbo.DatabaseBackup
@Databases = 'USER_DATABASES',
@Directory = 'C:\Backup',
@BackupType = 'FULL',
@Compess = 'Y',
@LogToTable = 'Y',
@CleanupTime = 48, --3 days
@CleanupMode = 'AFTER_BACKUP',
@Verify = 'Y'

/* 12 Hour Differential Backup */
EXECUTE dbo.DatabaseBackup
@Databases = 'USER_DATABASES',
@Directory = 'C:\Backup',
@BackupType = 'DIFF',
@Compess = 'Y',
@LogToTable = 'Y',
@CleanupTime = 24, --1 day
@CleanupMode = 'AFTER_BACKUP',
@Verify = 'Y'

/* 15 Minute Tran Log Backup */
EXECUTE dbo.DatabaseBackup
@Databases = 'USER_DATABASES',
@Directory = 'C:\Backup',
@BackupType = 'LOG',
@Compess = 'Y',
@LogToTable = 'Y',
@CleanupTime = 12, --12 hours
@CleanupMode = 'AFTER_BACKUP',
@Verify = 'Y'
```

### Simple SQL Server Express Backup Schedule

```sql
/* Daily Full Backup with Simple Recovery Mode*/
EXECUTE dbo.DatabaseBackup
@Databases = 'USER_DATABASES',
@Directory = 'C:\Backup',
@BackupType = 'FULL',
@Compess = 'Y',
@LogToTable = 'Y',
@CleanupTime = 72, --3 days
@CleanupMode = 'AFTER_BACKUP',
@Verify = 'Y
```

## Scheduling
Wondering how to automate these backups? Check out the [Replacing SQL Agent on SQL Server Express](/automation/sql-server-express-replace-sql-agent/) article for methods to schedule jobs without the SQL Agent.

<br/>
<br/>

<ClientOnly>
<disqus-component/>
</ClientOnly>
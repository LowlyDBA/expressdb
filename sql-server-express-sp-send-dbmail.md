
## Mail without SQL Agent?

While SQL Server Express is still 100% able to send mail using msdb's stored procedures,
most people rely on Management Studio's GUI and the Database Mail feature to do the initial setup of profiles and accounts
to make sending mail possible. Despite this limitation, the underlying stored procedures located within the msdb database are still fully able to replication the GUI driven setup that Database Mail aids in. This leaves T-SQL as the primary alternative for enabling and configuring SQL Server Express so that `sp_send_dbmail` can be used to send mail out. Adding this functionality with a [replacement for SQL Agent](http://expressdb.io/sql-server-express-replace-sql-agent/) can help mimic much of the functionality that Database Mail and SQL Agent provide on the full featured editions of SQL Server.

![SQL Server Mail in non-Express Editions](/database_mail.png)

*The Database Mail feature as seen in other SQL Server editions.*

While a CLR can also be used to send mail, that route is far more work and increases the complexity of
sending mail via SQL Server quite a bit. This requires enabling CLRs, which is disabled by default. Enabling CLRs opens the instance up to external code, which may be a security or audit concern and is often allowed in many corporate environments.

## Setting up Mail on SQL Server Express

The below code sample demonstrates the entire process of setting up mail on SQL Server Express,
including sending a test email at the end.

::: warning
Utilizing the database mail on SQL Server Express Edition may violate the license agreement. Check with Microsoft before implementing this in a production environment.
:::

The setup will:

1. Create a mail account
2. Create a mail profile
3. Add the account to the profile
4. Add permission to use the profile for a user or role
5. Enable database mail XPs
6. Send a test email

The stored procedures required are:

* [sysmail_add_account_sp](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sysmail-add-account-sp-transact-sql?view=sql-server-2017)
* [sysmail_add_profile_sp](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sysmail-add-profile-sp-transact-sql?view=sql-server-2017)
* [sysmail_add_profileaccount_sp](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sysmail-add-profileaccount-sp-transact-sql?view=sql-server-2017)
* [sysmail_add_principalprofile_sp](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sysmail-add-principalprofile-sp-transact-sql?view=sql-server-2017)
* [sp_configure](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-configure-transact-sql?view=sql-server-2017)
* [sp_send_dbmail](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-send-dbmail-transact-sql?view=sql-server-2017)

### The Code

```sql
/* Create a mail account */
EXECUTE msdb.dbo.sysmail_add_account_sp
@account_name = 'MyMailAccount',
@description = 'Used for sending email from SQL Express',
--Name of sending email address
@email_address = 'MyExpressDB@mycompany.com',
--Display name for the sending email address
@display_name = 'MyExpressDB',
--Username to login to the mail server
@username='MyMailUser@mycompany.com',
--Password to login to the mail server
@password='MyPassword',
--Name or IP of the mail server 
@mailserver_name = 'mail.queryingsql.com'
--Default is 25, or specify a custom one
@port = 25;
       
/* Create a profile */
EXECUTE msdb.dbo.sysmail_add_profile_sp
@profile_name = 'MyMailProfile',
@description = 'Main profile used to send email';

/* Add the account to the profile */
EXECUTE msdb.dbo.sysmail_add_profileaccount_sp
@profile_name = 'MyMailProfile',
@account_name = 'MyMailAccount',
/* The sequence number determines the order 
in which Database Mail uses accounts in the profile,
going from lowest to highest until one works. */
@sequence_number = 1;

/* Grant permission to public to use the profile
or choose a more restrictive group if desired */
EXECUTE msdb.dbo.sysmail_add_principalprofile_sp
@profile_name = 'MyMailProfile',
@principal_name = 'public',
@is_default = 1;

/* Enable Mail XPs */
EXECUTE sp_configure 'show advanced options', 1;
GO
RECONFIGURE;
GO
EXECUTE sp_configure 'Database Mail XPs', 1;
GO
RECONFIGURE;
GO

/* Send a test email */
EXECUTE msdb.dbo.sp_send_dbmail 
@profile_name = 'MyMailProfile', 
@recipients = 'MyTestAddress@mycompany.com', 
@subject = 'Test Mail from SQL Express', 
@body = 'Hello world!';
```

<br/>
<br/>

<ClientOnly>
<disqus-component/>
</ClientOnly>
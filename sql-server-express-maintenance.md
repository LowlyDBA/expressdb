## What goes into a Maintenance Plan?

Unlike many other kinds of technology which generally stay static unless a
change is intentionally applied, databases are always evolving and changing
like a living being. And like all things that are alive, they need care and
maintenance to stay productive and healthy.

Even for small databases, like those mandated by Express, database maintenance is a
key part of continuous performance and the proactive reduction of system errors. A standard
maintenance plan will address areas like:

* Index rebuilds / reorganizations
* Updating statistics
* Backing up the database
* Cleaning old backup files
* Purging unnecessary data
  * System Data
  * Application Data


## Best Maintenance Plan Practices for SQL Server Express

For the most part, maintenance on database of 10GB or less is straightforward. Most
systems are able to do index maintenance, update statistics, and purge old data extremely
quickly on a data set of this size. The size restriction removes many potentially complicated
scenarios where jobs must be run on individual partitions, by filegroups, or staggered across
different days of the week.

Since SQL Server Express doesn't have SQL Agent, and thus doesn't have the GUI-focused
maintenance plan feature at all, maintenance must be achieved using T-SQL. Luckily, most seasoned
DBAs agree that T-SQL based maintenance plans are better than their GUI counterparts,
so general SQL Server best practices are applicable to Express.

### Ola's Maintenance Scripts

Just as [Ola Hallengrens free scripts](https://ola.hallengren.com/sql-server-backup.html) are highly recommended for [SQL Express backups](/best-practices/sql-server-express-backups/), the same goes for his index and statistic scripts which help to make managing both areas extremely easy and customizable.

By default, Ola's scripts use the following settings:

```sql
@FragmentationMedium nvarchar(max) = 'INDEX_REORGANIZE,INDEX_REBUILD_ONLINE,INDEX_REBUILD_OFFLINE',
@FragmentationHigh nvarchar(max) = 'INDEX_REBUILD_ONLINE,INDEX_REBUILD_OFFLINE',
@FragmentationLevel1 int = 5,
@FragmentationLevel2 int = 30
```

These translate to nothing being done to an index that is less than 5% fragmented;
an attempt to reorganize, rebuild online, and rebuild offline (in that order) indexes fragmented more
than 5% but less than 30%; an attempt to rebuild online and rebuild offline (in that order)
if fragmentation is greater than 30%. Subsequent maintenance actions are only tried if the
one before is unavailable or not supported on an index. For SQL Server Express, online index rebuilds
are not available, so this option will always be skipped if not removed.

These numbers are based off of Microsoft's BOL article [Reorganize and Rebuild Indexes](https://docs.microsoft.com/en-us/sql/relational-databases/indexes/reorganize-and-rebuild-indexes). Though that article may *look* new and shiny, most of its contents are from a many years ago and most aspects (like fragmentation thresholds) have never been updated. With that in mind, some higher thresholds than the default are not only acceptable, but encouraged.

A more modern take is setting the first fragmentation level to 30% and the second level to 80%. Some even
prefer to go higher (see further reading at the bottom). Adjusting Ola's defaults, by taking into consideration the lack of an online rebuild option and taking advantage of a few extra settings results in the following recommended script:

```sql 
EXECUTE dbo.IndexOptimize
@Databases = 'USER_DATABASES',
@FragmentationLow = NULL,
@FragmentationMedium = 'INDEX_REORGANIZE,INDEX_REBUILD_OFFLINE',
@FragmentationHigh = 'INDEX_REBUILD_OFFLINE',
@FragmentationLevel1 = 30,
@FragmentationLevel2 = 80,
@SortInTempdb = 'Y',
@FillFactor = 100,
@UpdateStatistics = 'Y',
@OnlyModifiedStatistics = 'Y',
@Indexes = 'ALL_INDEXES',
@LogToTable = 'Y'
```

#### Fragmentation
Since taking an index offline for a rebuild isn't ideal, 80% makes sure that scenario isn't
occurring too often.

#### Fill Factor
While normally a fill factor might need to be tweaked, it is
probably safe to keep at 100% (no padding in the index) to make sure that the database
files aren't hitting the 10GB limit earlier than is absolutely necessary.

#### Update statistics
One of the great features of Ola's script is that it will update statistics after it
does the index rebuilds, since an index maintenance operation will automatically
update statistics in use by the index. This prevents duplication of work and
unnecessary transactions. Using the `@OnlyModifiedStatistics` flag further helps further by checking if a table's data has been altered since the last time
statistics were updated. If the table hasn't changed, then there is no reason to change
the statistics and it is skipped. This is especially helpful for archive tables or enum tables that
hardly or ever change, but may take up significant time to do statistics samplings on.

#### Logging
Logging to the built-in table is extremely useful when tracking down a failed index job or
to analyze a growing trend in job runtime. It doesn't cost much to log each action,
but is key when hunting down problems with maintenance jobs.

### Other Maintenance Tasks
Backup pruning is conveniently handled by settings within Ola's script, so that part of
maintenance can be bundled right into the backup commands themselves (see the [Express Backup](/best-practices/sql-server-express-backups/)) article for details.

Data pruning is highly specific to an individual database's needs, so usually needs to be
developer a la carte. If you need help figuring this out for your databases, feel free to
reach out via the [contact page](/author/contact/) to get more one-on-one help.

## Further Reading

* Brent Ozar's [Tweaking the Defaults for Ola Hallengren’s Maintenance Scripts](https://www.brentozar.com/archive/2014/12/tweaking-defaults-ola-hallengrens-maintenance-scripts/)
* RedGate's [Automate and Improve Your Database Maintennace Using Ola Hallengren's Free Script](https://www.red-gate.com/simple-talk/sql/database-administration/automate-and-improve-your-database-maintenance-using-ola-hallengrens-free-script/)

<br/>
<br/>

<ClientOnly>
<disqus-component/>
</ClientOnly>
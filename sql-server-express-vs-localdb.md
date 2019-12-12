

## What is LocalDB?

LocalDB is a developer oriented, on-demand managed instance of the SQL Server engine
that can be turned on automatically when needed and turned off when not in use. It requires
no configuration to run and allows for quick access to a database engine without
the overhead of managing and installing a full SQL Server instance. LocalDB utilizes the minimal amount
of files needed to achieve all of this. Having the database access stay local greatly reduces
the complexity for developing and testing applications with a SQL Server backend.

LocalDB is packaged with [Visual Studio][1] as well as [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-editions-express) (with Advanced Services for versions 2016 and earlier).

## SQL Server Express vs LocalDB

SQL Server Express and LocalDB have a lot in common:

 * Cost: free
 * Target Audiences: developers and students
 * API Compatibility with other versions of SQL Server
 * Both run with sqlservr.exe

However, LocalDB is intended for a different use case by addressing needs that are specific
to developers and less common for actual application use. As a result, it is only able to have one installation per version, runs in-process and not as a service,
doesn't stay running without active connections, requires a special connection string, and cannot be accessed remotely.
By providing the convenience of an embedded database with the compatibility of SQL Server, LocalDB
servers a very real need for developers to quickly and painlessly use a local database. And by starting
automatically when an application connects, it only consumes resources necessary to run
for the duration of the connection, shutting off when no longer needed.

SQL Server Express, on the other hand, can be used for local development but requires
far more installation and configuration time, stays on until it is manually turned off,
and can be installed many times on a single server or computer. While it can be used
for the same purpose as LocalDB, it will consume more hardware resources to do so and
strives to be more of an exact match to other SQL Server versions from installation down to
functionality, at the cost of being
harder to maintain.

Despite their differences, Microsoft still allows **both** to be used for production applications
at no cost. LocalDB can act as an embedded database for a small application and SQL Server Express
can act as a more robust, full-featured remote database engine for larger applications. There is no upgrade
path to other versions when using LocalDB, though, so choosing it as a backend should only be
done if the application's database needs will not grow over time.

## Further Reading

* Visual Studio Documentation's [Local Data Overview](https://msdn.microsoft.com/en-us/library/ms233817(v=vs.140).aspx)
* Microsoft's [LocalDB Product Announcement](https://blogs.msdn.microsoft.com/sqlexpress/2011/11/28/announcing-sql-server-2012-express-localdb-rc0/)
* Microsoft's [SQL Server 2016 Express LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-2016-express-localdb?view=sql-server-2017) Documentation

 [1]: https://www.visualstudio.com/downloads/

<br/>
<br/>

<ClientOnly>
<disqus-component/>
</ClientOnly>
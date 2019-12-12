

## What is SQL Server Express Edition?

According to [Microsoft](https://docs.microsoft.com/en-us/sql/sql-server/editions-and-components-of-sql-server-2017), SQL Server Express:
> ... is the entry-level, free database and is ideal for learning and building desktop and small
server data-driven applications. It is the best choice for independent software vendors, developers,
and hobbyists building client applications. If you need more advanced database features, SQL Server
Express can be seamlessly upgraded to other higher end versions of SQL Server.

## Why is SQL Server Express Free?

Well, Microsoft fails to mention with any detail, Express doesn't come with many bells and whistles
that the Standard or Enterprise Editions do, but it also has further restrictions imposed upon it,
such as:

* Maximum individual database size of 10GB
* No SQL Agent
* Limited RAM support (< 2GB on all versions)

Due to these limitations, they aren't giving away the farm by letting people play with the tool for free.
It also helps to encourage smaller businesses and students to use the Microsoft ecosystem and learn
how to use their tools with very low upfront costs involved.

That isn't to say that is isn't a useful free product, though. Many software vendors use it as
the database of choice when they need to bundle a database with their product but don't have a need
for large data sets. It is used in everything from ticketing software to civil engineering platforms
as the unspoken hero of providing amazing database technology without causing price tags to go through
the roof.

## What About Open Source Databases?

Yes, those *are* free as well. And some of them, like [PostgreSQL](https://www.postgresql.org/), are really great.

Here are a few reasons many choose Express over open source alternatives:

* When developing in a Microsoft ecosystem using  Express is a natural choice
* The features are unmatched and performance often still beats open source alternatives
* The SQL Server community is amazing and offers a wealth of free advice and tools:
  * [dba.stackexchange](http://www.dba.stackexchange.com)
  * [Brent Ozar](https://www.brentozar.com/blog/)
  * This site!
  * ...and so much more
* The option to easily upgrade to a more robust version is always available
* With every new version, Microsoft adds more features to SQL Express that were previously unavailable
* SQL Server Management Studio is a top of the line client and is also free

<br/>
<br/>

<ClientOnly>
<disqus-component/>
</ClientOnly>
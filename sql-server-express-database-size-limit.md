

## Size Limitations

One of the reasons Microsoft is able to give SQL Server Express away for free is
because of the limits imposed on certain facets of the server. One of the largest
limitations of SQL Server Express is the restriction on individual database sizes.
No single database can be over 10GB on modern versions. This restriction has been in place for over a decade
and has not increased over time, even as modern data storage has become extremely
cheap and plentiful.

Even if an application doesn't require storing 10GB of data immediately, over years
of use it is not uncommon for a database to hit the ceiling on its size. When SQL
Server Express is bundled with software, this can result in customer support calls and
performance degradation for end users.

![SQL Server Express](/sql-express.png)

## How to Work Around SQL Server Express's Data Limit

### Design Smart

Commonly, databases are created using generic data types that may provide flexibility, but
also come at the cost of an increased storage footprint. By assessing the below options,
a database can take up a fraction of its original size without sacrificing any actual data.

This advice is meant to be general and should always be assessed in the context of
the specific use case at hand.

#### Integers

[`INT`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql) is a common data type for IDs and whole-number numeric data. With a size of 4 bytes, it isn't very big but can support numbers up to 2,147,483,647. However if it is clear that the
value being captured is never going to hit anywhere near that limit, using a [`SMALLINT`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql) for values up to 32,767 (2 bytes) or [`TINYINT`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql) for values up to 255 (1 byte) can drastically reduce storage space. All of these types are available in SQL 2008+

For example, a table `[dbo].[state]` may provide a list of all 50 states in the US.
Commonly the ID for this table will be an `INT` data type, but since it is unlikely
there will be 200+ new states any time soon, it is safe to use a `TINYINT` instead and
reduce the ID column's footprint to 25% of its original value.

#### Date and Time

Similarly to integers, often times date and time datatypes are chosen that provide
far more detail than necessary. While some use cases necessitate the capturing of
milliseconds, many times precision more than a second is just excessive and provides
no benefit to an application, yet takes up more disk space. Be sure that each type is not defaulting to a higher precision than is needed, also.

There are many options for date, time, and datetime values, so assess what makes the most sense for each situation and use the smallest available:

| Data Type | Accuracy | Size | Compatibility | Example |
| --------- | -------- | ---- | ------------- | ------- |
| [`DATE`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/date-transact-sql) |  One day | 3 bytes | 2008+ | 2018-04-02
| [`DATETIME`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetime-transact-sql) | 	Rounded to increments of .000, .003, .007 sec | 8 bytes | 2008+ | 2018-04-02 12:35:29.123
| [`DATETIME2`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetime2-transact-sql) | 100 nanoseconds | 6 bytes for precisions < 3; 7 bytes for precisions 3 & 4; all others are 8 bytes | 2008+ | 2018-04-02 12:35:29.1234567
| [`DATETIMEOFFSET`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetimeoffset-transact-sql) | 100 nanoseconds | 8-10 bytes | 2008+ | 2018-04-02 12:35:29.1234567 +12:15
| [`SMALLDATETIME`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/smalldatetime-transact-sql) | One minute | 4 bytes | 2008+ |  2018-04-02 12:35:00
| [`TIME`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/time-transact-sql) | Varies | 3-5 bytes | 2008+ | 12:35:29.1234567

#### Decimals

Similar to dates and integers, making sure only the precision necessary is being stored
when dealing with [`DECIMAL` and `NUMERIC`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/decimal-and-numeric-transact-sql) (functionally equivalent data types) is very important.

For most cases, a precision of 9 or less will suffice, which means `DECIMAL` will only take up 5 bytes. However, if more is required, the following sizes will apply:

| Precision | Size |
| --------- | ---- |
| 1-9 | 5 bytes |
| 10-19 | 9 bytes |
| 20-28 | 13 bytes |
| 29-38 | 17 bytes |

It may be tempting to consider the [`FLOAT` or `REAL`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/float-and-real-transact-sql) types as well, since they can store a precision of 7 digits in 4 bytes and 15 digits in 8 bytes. However, it is integral to remember that these types are *floating point numerics* and thus contain approximate values. Unless floating point numbers are a specific requirement, using these types can lead to rounding issues and are certainly not worth the risk for space savings.


#### Strings and VARCHARs

Another easy way to slim down a database is choosing the right character data type format.
[`NVARCHAR`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql) and `NCHAR` store Unicode data, and are thus must-haves for storing any multilingual or localized data. Conversely, [`VARCHAR`](https://docs.microsoft.com/en-us/sql/t-sql/data-types/char-and-varchar-transact-sql) and `CHAR` store non-Unicode data and only take 1 byte for every 2 bytes that `NVARCHAR` takes up. This can effectively cut a table's size in half if it is comprised mostly of a large string column, like a comment or note field.

So, a simple "Hello" in `NVARCHAR` will be 10 bytes but only 5 in `VARCHAR`. The difference can be huge for not only performance, but also storage, when strings are properly typed.

### Use Multiple Databases

While each *individual* database has a size restriction, the number of databases
in an instance is not limited any more than other versions. This leaves room to
partition data horizontally or vertically into several databases.

#### Horizontal Partitioning

Horizontal partitioning refers to slicing data by putting rows into different tables (and databases, in this case). The tables in each database will be the same, but contain different
sets of data based on a logical grouping, like location.

If a database contains data for all customers across the United States, but the data exceeds
10GB, an option would be to create databases for regions, i.e. Northwest, Northeast, etc. and
split the data across them.

The downside to this approach is that there are now N number of identical databases to manage when it comes to upgrades, maintenance, and backups.

#### Vertical Partitioning

In this context, vertical partitioning can be used to describe storing different columns and tables in different databases, as opposed to storing rows in different databases. By utilizing cross-database queries, tables in different databases can be queried and manipulated in almost the exact same way as if they were in the same database.

If an application had a lot of static reference data, i.e. data points on every city and town in the US, those tables could be stored in another database to separate the storage costs
of that data from interfering with the actual customer data in the primary database.  

### Normalize, Normalize, Normalize

[Normalization](https://en.wikipedia.org/wiki/Database_normalization) is a huge topic, but it isn't often talked about today in terms of storage benefits, due to the low cost of disk space.

Proper normalization data can greatly reduce the redundancy of data. Often the most redundant data are of the string variety and thus can have a significant impact on the overall size of a database when not properly normalized. Aiming for the [third normal form](https://en.wikipedia.org/wiki/Third_normal_form) is a reasonable goal to achieve most of the size-related benefits that normal forms can offer.

Since there are always exceptions as to when normalized data or denormalized data is most beneficial, it will depend on the case at hand, but defaulting to normalizing data is generally a good strategy.

<br/>
<br/>

<ClientOnly>
<disqus-component/>
</ClientOnly>
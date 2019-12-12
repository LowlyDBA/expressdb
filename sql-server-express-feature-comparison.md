

## Introduction

The most well known differences between SQL Express and other editions are the
[caps on database size](http://expressdb.io/sql-server-express-database-size-limit/) (10GB) and [lack of a SQL Agent feature](http://expressdb.io/sql-server-express-replace-sql-agent/). There are many other
differences though, some of which can be extremely important for some application
and architecture requirements.

Due to the rarity of SQL Server Business Intelligence, SQL Server
Web Edition, SQL Server Datacenter, and other versions, they will not be included in the below comparisons.

The features included below are selected base on overall popularity and value,
and do not represent every feature of SQL Server nor all of the parity between editions.

## Versions

* [2008 R2](#sql-2008-r2)
* [2012](#sql-2012)
* [2014](#sql-2014)
* [2016](#sql-2016)
* [2017](#sql-2017)
* [2019](#sql-2019)


Also see the [Feature Comparison FAQ](#faq) for clarification on terminology.

### SQL 2008 R2

The complete listing for SQL Server 2008 R2 Express is available from on MSDN 's [Features Supported by the Editions of SQL Server 2008 R2](https://docs.microsoft.com/es-es/previous-versions/sql/sql-server-2008-r2/cc645993(v=sql.105)).

| Feature                                   | Enterprise | Standard                       | Express             | Express w/ Advanced Services |
| ----------------------------------------- |------------| -------------------------------| ------------------- | ---------------------------- |
| Max. Compute Capacity (per instance)      | 8    | 4 | 1  | 1 |
| Max. Memory (per instance)                | 2TB      | 64GB                          | 1GB  | 1GB |
| Max. database size                        | 524PB      | 524PB                          | 10GB | 10GB |
| Log Shipping | Yes |Yes | No | No |
| Mirroring | Yes | Yes | As Witness | As Witness |
| Backup Compression | Yes |Yes | No | No |
| Database Snapshots | Yes |No | No | No |
| AlwaysOn | No | No | No | No |
| Encrypted Backups | No | No | No | No |
| Table/index Partitioning | Yes | No | No | No |
| Compression | Yes |No | No | No |
| Resource Governor | Yes |No | No | No |
| In-Memory OLTP | No |No | No | No |
| Basic Auditing |  Yes | Yes   | Yes | Yes |
| Fine Grained Auditing | Yes | No | No | No |
| Contained Databases|  No | No   | No | No |
| Backup Encryption |  No |No | No | No |
| Change Tracking |  Yes | Yes   | Yes | Yes |
| Merge Replication | Yes | Yes   | As Subscriber | As Subscriber |
| Transactional Replication | Yes | Yes   | As Subscriber | As Subscriber |
| Snapshot Replication |  Yes | Yes   | As Subscriber | As Subscriber |
| P2P Transactional Replication |  Yes |No | No | No |
| SQL Server Agent |  Yes | Yes   | No | No |
| Dedicated Admin Connection |  Yes | Yes   | Yes | Yes |
| PowerShell SMO Support |  Yes | Yes   | Yes | Yes |
| CLR Integration |   Yes | Yes   | Yes | Yes |
| Import/Export Wizard |  No | No   | No | No |
| Database Mail | Yes | Yes | No | No |

### SQL 2012

The complete listing for SQL Server 2012 Express is available from on MSDN 's [Features Supported by the Editions of SQL Server 2012](https://msdn.microsoft.com/en-us/library/cc645993%28v=sql.110%29.aspx?f=255&MSPPError=-2147217396).

| Feature                                   | Enterprise | Standard                       | Express             | Express w/ Advanced Services |
| ----------------------------------------- |------------| -------------------------------| ------------------- | ----------------------------- |
| Max. Compute Capacity (per instance)      | OS Max.    | Lesser of 4 sockets / 16 cores | Lesser of 1 socket / 4 cores  | Lesser of 1 socket / 4 cores
| Max. Memory (per instance)                | OS Max.      | 64GB                          | 1GB  | 1GB
| Max. database size                        | 524PB      | 524PB                          | 10GB | 10GB
| Log Shipping | Yes |Yes | No | No
| Mirroring | Yes | Yes | As Witness | As Witness
| Backup Compression | Yes |Yes | No | No
| Database Snapshots | Yes |No | No | No
| AlwaysOn | Yes | No | No | No
| Encrypted Backups | No | No | No | No
| No. of Instances per Server | 50 | 50 | 50 | 50
| Table/index Partitioning | Yes | No | No | No
| Compression | Yes |No | No | No
| Resource Governor | Yes |No | No | No
| In-Memory OLTP | No |No | No | No
| Basic Auditing |  Yes | Yes   | Yes | Yes
| Fine Grained Auditing | Yes | No | No | No
| Contained Databases|  Yes | Yes   | Yes | Yes
| Backup Encryption |  No |No | No | No
| Change Tracking |  Yes | Yes   | Yes | Yes
| Merge Replication | Yes | Yes   | As Subscriber | As Subscriber
| Transactional Replication | Yes | Yes   | As Subscriber | As Subscriber
| Snapshot Replication |  Yes | Yes   | As Subscriber | As Subscriber
| P2P Transactional Replication |  Yes |No | No | No
| SQL Server Agent |  Yes | Yes   | No | No
| Dedicated Admin Connection |  Yes | Yes   | Yes | Yes
| PowerShell SMO Support |  Yes | Yes   | Yes | Yes
| CLR Integration |   Yes | Yes   | Yes | Yes
| Import/Export Wizard |  Yes | Yes   | Yes | Yes
| Database Mail | Yes | Yes | No | No

### SQL 2014

The complete listing for SQL Server 2014 Express is available from on MSDN 's [Features Supported by the Editions of SQL Server 2014](https://msdn.microsoft.com/library/cc645993%28v=sql.120%29.aspx?f=255&MSPPError=-2147217396).

| Feature                                   | Enterprise | Standard                       | Express             | Express w/ Advanced Services |
| ----------------------------------------- |------------| -------------------------------| ------------------- | ---------------------------- |
| Max. Compute Capacity (per instance)      | OS Max.    | Lesser of 4 sockets / 16 cores | Lesser of 1 socket / 4 cores  | Lesser of 1 socket / 4 cores
| Max. Memory (per instance)                | OS Max.      | 128GB                          | 1GB  | 1GB
| Max. database size                        | 524PB      | 524PB                          | 10GB | 10GB
| Log Shipping | Yes |Yes | No | No
| Mirroring | Yes | Yes | As Witness | As Witness
| Backup Compression | Yes |Yes | No | No
| Database Snapshots | Yes |No | No | No
| Basic AlwaysOn | Yes | Yes | No | No
| Encrypted Backups | Yes | Yes | No | No
| No. of Instances per Server | 50 | 50 | 50 | 50
| Table/index Partitioning | Yes | No | No | No
| Compression | Yes |No | No | No
| Resource Governor | Yes |No | No | No
| In-Memory OLTP | Yes |No | No | No
| Auditing |  Yes | Yes   | Yes | Yes
| Contained Databases|  Yes | Yes   | Yes | Yes
| Change Tracking |  Yes | Yes   | Yes | Yes
| Merge Replication | Yes | Yes   | As Subscriber | As Subscriber
| Transactional Replication | Yes | Yes   | As Subscriber | As Subscriber
| Snapshot Replication |  Yes | Yes   | As Subscriber | As Subscriber
| P2P Transactional Replication |  Yes |No | No | No
| SQL Server Agent |  Yes | Yes   | No | No
| Dedicated Admin Connection |  Yes | Yes   | Yes | Yes
| PowerShell SMO Support |  Yes | Yes   | Yes | Yes
| Full Text Search | Yes | Yes   | No | Yes
| CLR Integration |   Yes | Yes   | Yes | Yes
| Import/Export Wizard |  Yes | Yes   | Yes | Yes
| Database Mail | Yes | Yes | No | No

### SQL 2016

The complete listing for SQL Server 2016 Express features is available from on Microsoft Docs' [Editions and supported features of SQL Server 2016](https://docs.microsoft.com/en-us/sql/sql-server/editions-and-components-of-sql-server-2016).

| Feature                             | Enterprise | Standard               | Express             | Express w/ Advanced Services |
| ------------------------------------|------------| -----------------------| ------------------- | ---------------------------- |
| Max. Compute Capacity (per instance) | OS Max. | Lesser of 4 sockets / 24 cores | Lesser of 1 socket / 4 cores  | Lesser of 1 socket / 4 cores
| Max. Buffer Pool Memory (per instance) | OS Max.      | 128GB                          | 1410MB  | 1410MB
| Max. Columnstore Cache Memory (per instance) | Unlimited | 32GB | 352MB | 352MB
| Max. Memory-Optimized Data Size (per instance) | Unlimited | 32GB | 352MB | 352MB
| Max. database size                        | 524PB      | 524PB                          | 10GB | 10GB
| Log Shipping | Yes |Yes | No | No
| Mirroring | Yes | Yes | As Witness | As Witness
| Backup Compression | Yes |Yes | No | No
| Database Snapshots | Yes |No | No | No
| AlwaysOn AG | Yes | No | No | No
| [Basic Availability Groups](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/basic-availability-groups-always-on-availability-groups) | Yes | Yes (2 nodes) | No | No
| Encrypted Backups | Yes | Yes | No | No
| Table/index Partitioning | Yes | Yes (SP1+) | Yes (SP1+) | Yes (SP1+)
| Compression | Yes |Yes (SP1+) | Yes (SP1+) | Yes (SP1+)
| Resource Governor | Yes |No | No | No
| In-Memory OLTP | Yes |Yes (SP1+) | Yes (SP1+) | Yes (SP1+)
| Auditing |  Yes | Yes   | Yes | Yes
| Fine Grained Auditing | Yes | Yes (SP1+) | Yes (SP1+) | Yes (SP1+)
| Contained Databases|  Yes | Yes   | Yes | Yes
| Change Tracking |  Yes | Yes   | Yes | Yes
| Merge Replication | Yes | Yes   | As Subscriber | As Subscriber
| Transactional Replication | Yes | Yes   | As Subscriber | As Subscriber
| Snapshot Replication |  Yes | Yes   | As Subscriber | As Subscriber
| P2P Transactional Replication |  Yes |No | No | No
| SQL Server Agent |  Yes | Yes   | No | No
| Dedicated Admin Connection |  Yes | Yes   | Yes | Yes
| PowerShell SMO Support |  Yes | Yes   | Yes | Yes
| Full Text Search | Yes | Yes   | No | Yes
| CLR Integration |   Yes | Yes   | Yes | Yes
| Import/Export Wizard |  Yes | Yes   | Yes | Yes
| Database Mail | Yes | Yes | No | No

### SQL 2017

The complete listing for SQL Server 2017 Express features is available from on Microsoft Docs' [Editions and supported features of SQL Server 2017](https://docs.microsoft.com/en-us/sql/sql-server/editions-and-components-of-sql-server-2017).

| Feature                             | Enterprise | Standard               | Express             | Express w/ Advanced Services |
| ------------------------------------|------------| -----------------------| ------------------- | ---------------------------- |
| Max. Compute Capacity (per instance) | OS Max. | Lesser of 4 sockets / 24 cores | Lesser of 1 socket / 4 cores  | Lesser of 1 socket / 4 cores
| Max. Buffer Pool Memory (per instance) | OS Max.      | 128GB                          | 1410MB  | 1410MB
| Max. Columnstore Cache Memory (per instance) | Unlimited | 32GB | 352MB | 352MB
| Max. Memory-Optimized Data Size (per instance) | Unlimited | 32GB | 352MB | 352MB
| Max. database size                        | 524PB      | 524PB                          | 10GB | 10GB
| Log Shipping | Yes |Yes | No | No
| Mirroring | Yes | Yes | As Witness | As Witness
| Backup Compression | Yes |Yes | No | No
| Database Snapshots | Yes |Yes | Yes | Yes
| AlwaysOn AG | Yes | No | No | No
| [Basic Availability Groups](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/basic-availability-groups-always-on-availability-groups) | Yes | Yes (2 nodes) | No | No
| Encrypted Backups | Yes | Yes | No | No
| Table/index Partitioning | Yes | Yes | Yes | Yes
| Buffer Pool Extension | Yes | Yes | No | No
| Compression | Yes |Yes | Yes | Yes
| Resource Governor | Yes |No | No | No
| In-Memory OLTP | Yes |Yes | Yes | Yes
| Auditing |  Yes | Yes   | Yes | Yes
| Fine Grained Auditing | Yes | Yes  | Yes | Yes
| Dynamic Data Masking | Yes | Yes  | Yes | Yes
| Always Encrypted | Yes | Yes  | Yes | Yes
| Contained Databases|  Yes | Yes   | Yes | Yes
| Change Tracking |  Yes | Yes   | Yes | Yes
| Merge Replication | Yes | Yes   | As Subscriber | As Subscriber
| Transactional Replication | Yes | Yes   | As Subscriber | As Subscriber
| Transactional Replication to Azure | Yes | Yes | No | No
| Snapshot Replication |  Yes | Yes   | As Subscriber | As Subscriber
| P2P Transactional Replication |  Yes |No | No | No
| SQL Server Agent |  Yes | Yes   | No | No
| Dedicated Admin Connection |  Yes | Yes   | Yes | Yes
| PowerShell SMO Support |  Yes | Yes   | Yes | Yes
| Full Text Search | Yes | Yes   | No | Yes
| CLR Integration |   Yes | Yes   | Yes | Yes
| Import/Export Wizard |  Yes | Yes   | Yes | Yes
| Database Mail | Yes | Yes | No | No

### SQL 2019

The complete listing for SQL Server 2019 Express features is available from on Microsoft Docs' [Editions and supported features of SQL Server 2019](https://docs.microsoft.com/en-us/sql/sql-server/editions-and-components-of-sql-server-version-15?view=sql-server-ver15).

| Feature                             | Enterprise | Standard               | Express             | Express w/ Advanced Services |
| ------------------------------------|------------| -----------------------| ------------------- | ---------------------------- |
| Max. Compute Capacity (per instance) | OS Max. | Lesser of 4 sockets / 24 cores | Lesser of 1 socket / 4 cores  | Lesser of 1 socket / 4 cores
| Max. Buffer Pool Memory (per instance) | OS Max.      | 128GB                          | 1410MB  | 1410MB
| Max. Columnstore Cache Memory (per instance) | Unlimited | 32GB | 352MB | 352MB
| Max. Memory-Optimized Data Size (per instance) | Unlimited | 32GB | 352MB | 352MB
| Max. database size                        | 524PB      | 524PB                          | 10GB | 10GB
| Log Shipping | Yes |Yes | No | No
| Mirroring | Yes | Yes | As Witness | As Witness
| Backup Compression | Yes |Yes | No | No
| Database Snapshots | Yes |Yes | Yes | Yes
| AlwaysOn AG | Yes | No | No | No
| [Basic Availability Groups](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/basic-availability-groups-always-on-availability-groups) | Yes | Yes (2 nodes) | No | No
| Encrypted Backups | Yes | Yes | No | No
| Stretch Database | Yes | Yes | Yes | Yes
| Table/index Partitioning | Yes | Yes | Yes | Yes
| Buffer Pool Extension | Yes | Yes | No | No
| Compression | Yes |Yes | Yes | Yes
| Resource Governor | Yes | No | No | No
| In-Memory OLTP | Yes |Yes | Yes | Yes
| Auditing |  Yes | Yes | Yes | Yes
| Fine Grained Auditing | Yes | Yes  | Yes | Yes
| Dynamic Data Masking | Yes | Yes  | Yes | Yes
| Always Encrypted w/ Secure Enclaves | Yes | Yes  | Yes | Yes
| Transparent Data Encryption |  Yes | Yes   | Yes | Yes
| Contained Databases|  Yes | Yes | Yes | Yes
| Change Tracking |  Yes | Yes | Yes | Yes
| Merge Replication | Yes | Yes | As Subscriber | As Subscriber
| Transactional Replication | Yes | Yes   | As Subscriber | As Subscriber
| Transactional Replication to Azure | Yes | Yes | No | No
| Snapshot Replication |  Yes | Yes   | As Subscriber | As Subscriber
| P2P Transactional Replication |  Yes |No | No | No
| SQL Server Agent |  Yes | Yes   | No | No
| Dedicated Admin Connection |  Yes | Yes   | Yes | Yes
| PowerShell SMO Support |  Yes | Yes   | Yes | Yes
| Full Text Search | Yes | Yes   | No | Yes
| CLR Integration |   Yes | Yes   | Yes | Yes
| Import/Export Wizard |  Yes | Yes  | Yes | Yes
| Database Mail | Yes | Yes | No | No
| UTF-8 |  Yes | Yes   | Yes | Yes
| Java Runtime Integration |  Yes | Yes   | Yes | Yes
| Polybase Compute Node |  Yes | Yes   | Yes | Yes
| Master Instance for Big Data Cluster |  Yes | Yes   | Yes | Yes |


## FAQ

**What is the difference between Basic Auditing and Fine Grained Auditing?**

These terms are only used in Microsoft feature comparison documents, but not SQL Server documentation, so their use is often unclear to many. Basic auditing refers to [server level audits](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-server-audit-transact-sql?view=sql-server-2017) while fine grained auditing refers to [audits at the database level](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-database-audit-specification-transact-sql?view=sql-server-2017).

<br/>
<br/>

<ClientOnly>
<disqus-component/>
</ClientOnly>

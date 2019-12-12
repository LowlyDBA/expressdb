

## How Does Unattended Install Work?
Automating the installation of SQL Server Express, also known as an
unattended install, is done by launching the setup process via the command
line and passing pre-determined parameters so that no human interaction
is needed to complete the setup. This is ideal for any situation where
many servers must be provisioned and a requirement when bundling
SQL Server Express with other software using it as a database.

The configuration for the install can be input directly as parameter to
the setup file:

```batch
Setup.exe /ACTION="Install"
```

or passed in via a configuration file:

```batch
Setup.exe /ConfigurationFile=MyConfigurationFile.INI  
```

Using a configuration file makes it easy to store, maintain, and customize the various parameters that may change based on SQL Server version, install type, and target server. For this reason, the below configurations will be provided as template files that can be tailored to any additional needs.

## Unattended Installs for SQL Server Express
Installing SQL Server Express from a configuration file has a few differences when
compared to other versions like Standard and Enterprise. Some of the parameters
behave slightly differently, do not apply, and come with different default values.
These examples take those factors into account by having all mandatory fields
present and optional settings commented out to provide a generic template that can
be customized as needed.

* [SQL Server Express 2008, 2012, 2014 Unattended Install](#_2008-2012-2014-unattended-install) (Windows)
* [SQL Server Express 2016, 2017, 2019 Unattended Install](#_2016-2017-2019-unattended-install) (Windows)
* [SQL Server Express 2017, 2019 Unattended Install](#_2017-2019-unattended-install-linux) (Linux) 

## 2008, 2012, 2014 Unattended Install
The configuration parameters change very little over the years, mostly with
new options being added and very few being modified or removed. Luckily, this
means that the same configuration file can often be used for multiple version
installs, as long as the general requirements of each install remain the same.

The below sample configuration file focuses solely on the database engine installation
and does not include other features to keep the configuration as generic as possible.

```batch
; Microsoft SQL Server Express 2008, 2012, 2014 Configuration Template
; Provided by Express Databases, LLC
; http://expressdb.io   
[OPTIONS]  
; Specifies a Setup work flow, like INSTALL, UNINSTALL, or UPGRADE.  
; This is a required parameter.  
ACTION="Install"  

; Specifies features to install, uninstall, or upgrade.  
; The list of top-level features include SQL, AS, RS, IS, and Tools.  
; The SQL feature will install the database engine, replication, and full-text.  
; The Tools feature will install Management Tools, Books online,   
; SQL Server Data Tools, and other shared components.  
FEATURES=SQL,Tools  

; Accept license terms
IACCEPTSQLSERVERLICENSETERMS="True"

; Install English version if other langauge packs are available
ENU="True"

; Don't display any install UI
QUIET="True"

; Show progress in command line
INDICATEPROGRESS="True"

; Define an Instance name
INSTANCENAME="SQLEXPRESS"

; Specify SQL Service account
SQLSVCACCOUNT="SQLServiceAccount"

; Specify SQL Service Account pwd
SQLSVCPASSWORD="ChangeMe123"

; Enable instant file initialization for the service account  
; Enabling this is a best practice 
SQLSVCINSTANTFILEINIT="True"

; OPTIONAL SETTINGS

; Specify non-default data file directory 
; INSTALLSQLDATADIR=""

; Specify non-default user database data file directory 
; SQLUSERDBDIR=""

; Specify non-default user database log file directory 
; SQLUSERDBLOGDIR=""

; Specify non-default directory for tempdb files 
; SQLTEMPDBDIR=""

; Specify non-default directory for tempdb log files 
; SQLTEMPDBLOGDIR=""

; Specify non-default installation directory 
; INSTALLSHAREDDIR=""

; Specify non-default backup directory 
; SQLBACKUPDIR=""

; Specify non-default installation directory for 32-bit components  
; INSTALLSHAREDWOWDIR=""

; Specify non-default installation directory for instance components 
; INSTANCEDIR=""

; Enable run-as credentials for SQL Server Express 
; ENABLERANU="True"

; Set non-default, Windows Authentication security mode 
; SECURITYMODE="SQL"

; Set the default SA Password, required for SECURITYMODE=SQL
; SAPWD = "MyStrongSAPwd"

; Specify non-default collation 
; SQLCOLLATION=""

; Specify startup mode for SQL Server: Automatic, Disabled, Manual
; SQLSVCSTARTUPTYPE="Automatic"

; Specify additional SA users - current user is SA by default 
; SQLSYSADMINACCOUNTS=""
```

## 2016, 2017, 2019 Unattended Install
The newest versions of SQL Server Express have a configuration file that is
very similar to prior versions, with the addition of two new optional parameters:

#### SQLTEMPDBFILESIZE
This parameter allows the default size of all new tempdb data files to be specified
at the time of installation. While the default for SQL Server Express is a paltry 4MB and
all other versions are set to 8MB, customizing this value reduces the number of
post-install steps required since most servers will require more than a few MB of
space for the tempdb.

#### SQLTEMPDBLOGFILESIZE
Similar to the above, the size of the tempdb log can also now be specified during
the installation process. The defaults of 4MB and 8MB are the same, so most people
will want to specify a larger value.

The below sample configuration file focuses solely on the database engine installation
and does not include other features to keep the configuration as generic as possible.

```batch
; Microsoft SQL Server Express 2016/2017 Configuration Template
; Provided by Express Databases, LLC
; http://expressdb.io   
[OPTIONS]  
; Specifies a Setup work flow, like INSTALL, UNINSTALL, or UPGRADE.  
; This is a required parameter.  
ACTION="Install"  

; Specifies features to install, uninstall, or upgrade.  
; The list of top-level features include SQL, AS, RS, IS, and Tools.  
; The SQL feature will install the database engine, replication, and full-text.  
; The Tools feature will install Management Tools, Books online,   
; SQL Server Data Tools, and other shared components.  
FEATURES=SQL,Tools  

; Accept license terms
IACCEPTSQLSERVERLICENSETERMS="True"

; Install English version if other langauge packs are available
ENU="True"

; Don't display any install UI
QUIET="True"

; Show progress in command line
INDICATEPROGRESS="True"

; Define an Instance name
INSTANCENAME="SQLEXPRESS"

; Specify SQL Service account
SQLSVCACCOUNT="SQLServiceAccount"

; Specify SQL Service Account pwd
SQLSVCPASSWORD="ChangeMe123"

; Enable instant file initialization for the service account - optional 
; Enabling this is a best practice 
SQLSVCINSTANTFILEINIT="True"

; OPTIONAL SETTINGS

; Specify non-default data file directory 
; INSTALLSQLDATADIR=""

; Specify non-default user database data file directory 
; SQLUSERDBDIR=""

; Specify non-default user database log file directory 
; SQLUSERDBLOGDIR=""

; Specify non-default directory for tempdb files 
; SQLTEMPDBDIR=""

; Specify non-default directory for tempdb log files 
; SQLTEMPDBLOGDIR=""

; Specifies initial file size of each tempdb data file. Default for SQL Server Express is 4MB, others are 8MB
; SQLTEMPDBFILESIZE=4

; Specifies initial file size the tempdb log file. Default for SQL Server Express is 4MB, others are 8MB
; SQLTEMPDBLOGFILESIZE=4

; Specify non-default installation directory 
; INSTALLSHAREDDIR=""

; Specify non-default backup directory 
; SQLBACKUPDIR=""

; Specify non-default installation directory for 32-bit components  
; INSTALLSHAREDWOWDIR=""

; Specify non-default installation directory for instance components 
; INSTANCEDIR=""

; Enable run-as credentials for SQL Server Express 
; ENABLERANU="True"

; Set non-default, Win Authentication security mode 
; SECURITYMODE="SQL"

; Set the default SA Password - required for SECURITYMODE=SQL
; SAPWD = "MyStrongSAPwd"

; Specify non-default collation 
; SQLCOLLATION=""

; Specify startup mode for SQL Server: Automatic, Disabled, Manual
; SQLSVCSTARTUPTYPE="Automatic"

; Specify additional SA users - current user is SA by default 
; SQLSYSADMINACCOUNTS=""
```

## 2017, 2019 Unattended Install Linux

Coming soon! See SQL CAT Team's [Unattended install and configuration for SQL Server 2017 on Linux](https://blogs.msdn.microsoft.com/sqlcat/2017/10/03/unattended-install-and-configuration-for-sql-server-2017-on-linux/) in the mean time.

## Further Reading
* Microsoft's documentation [Install SQL Server from the Command Line](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server-from-the-command-prompt?view=sql-server-2017)
* Microsoft's [Install SQL Server 2014 using a Configuration File](https://msdn.microsoft.com/library/dd239405(v=sql.120).aspx)
* SQL CAT Team's [Unattended install and configuration for SQL Server 2017 on Linux](https://blogs.msdn.microsoft.com/sqlcat/2017/10/03/unattended-install-and-configuration-for-sql-server-2017-on-linux/)

<br/>
<br/>

<ClientOnly>
<disqus-component/>
</ClientOnly>
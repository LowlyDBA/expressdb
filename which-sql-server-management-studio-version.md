

## Which Management Studio Version to Use

Until recently, which version of Management studio you used would
most likely depend on which version of SQL Server you were using. The tool
came packaged with each new release of SQL Server and was only updated
when a new SQL Server version was released. So if you were using SQL Server 2014,
it came with SQL Server Management Studio 2014 and that was most likely all you'd ever use.

However, with the release of SQL Server 2016, SSMS was available separately
and began receiving updates outside of major SQL Server releases. Management Studio
now has its own versioning that is independent of the newest SQL Server release. This has
allowed for more rapid development and increased the ease of using the best SSMS version,
even when working with older servers.

## The Latest and Greatest

As of November 5, 2019, the latest official version of SQL Server Management Studio is 18.4. 

::: tip
The latest version of Management Studio will always be available at the [Download SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms) page.
::: 

Starting with version 17, SSMS releases are the first SSMS products to be based off of Visual Studio 2015+,
which bring a modernized user interface and icon set, much more stability, and faster
startup times. Version 18 iterates off of this and is based on the Visual Studio 2017 shell. 

![New vs Old SQL Server Management Studio](/new_vs_old_ssms.png)
*Left: Management Studio 17, Right: Management Studio 16*


Regardless of the edition being used, SQL Server Management Studio only comes in one flavor
and boasts backwards compatibility with almost all features from versions 2008 to 2019, including SQL Azure support. For this reason, it is highly recommended to use the newest version possible to take advantage of new features and more stability through code fixes that are being continually released.

So even when working with older SQL Server versions, upgrading SQL Server Management Studio
to the a 18.x version is both supported and recommended.

<br/>
<br/>

<ClientOnly>
<disqus-component/>
</ClientOnly>
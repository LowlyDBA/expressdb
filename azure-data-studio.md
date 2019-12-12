

# Azure Data Studio

Announced during Microsoft's 2018 Ignite event, [Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download?view=sql-server-2017) (formerly SQL Operations Studio)
was released under General Availability.

This open source tool from Microsoft works on Linux, Mac, and Windows and builds off a very familiar foundation for anyone accustomed to using [Visual Studio Code](https://code.visualstudio.com/).

While its previous form had some rough edges, the 1.0 release of Azure Data Studio and later iterations are much more polished and deliver  amazing functionality and performance when compared to SQL Server Management Studio.

![Azure Data Studio](/azure-data-studio.png)
*Azure Data Studio 1.0*

Right after connecting to a SQL instance a dashboard provides instance information, action buttons, a list of searchable databases, backup statuses, and database sizes in chart form. These are just a few default examples of what incredibly useful and powerful data can be shown *as soon as you connect to a server*.

Azure Data Studio is definitely targeted towards data-minded individuals. With integrated source control support, a host of free extensions, a file explorer, support for [Notebooks](https://notebooks.azure.com/), query results to graph capabilities it offers an ease of working with SQL and data that other database platforms have not come close to providing. And for anyone accustomed to using SQL Server Management Studio, the inclusion of both a fully supported dark theme and a blazing fast, reliable Intellisense are things that only dreams were made of until now.

![Proof Intellisense isn't broken by design](/azure-data-studio-dark-theme.PNG)
*Proof Intellisense isn't broken by design*

## When To Use It

If you're a developer, data scientist, or pretty much anyone except for a DBA, then this is probably a tool that will fit your needs much better than SQL Management Studio ever will - end of story.

If you are a DBA and you find yourself needing to work with SQL Agent, in depth-configurations, and wizards on a frequent basis, then (for now) Azure Data Studio probably won't fulfill your day to day needs. It does have increasing support for these areas, like the SQL Agent extension, which can show a novel view of current and previous job statistics:

![SQL Agent Extension for Azure Data Studio](/azure-data-studio-sql-agent.PNG)
*The SQL Agent extension*

Microsoft does provide [this chart](https://cloudblogs.microsoft.com/sqlserver/2018/09/25/azure-data-studio-for-sql-server/#featurecomparison) as a helpful comparison of features between Azure Data Studio and SQL Server Management Studio.

## Extensions

Extensions in Azure Data Studio are free, much easier to work with, and can be directly installed from within the application itself when compared to Management Studio. Microsoft has continued to come out with a great catalog of tools and gotten some great third party tooling support as well. A [full list of Azure Data Studio Extensions](https://github.com/Microsoft/azuredatastudio/wiki/List-of-Extensions) is on Github. Some of the most useful tools include:

* [Poor SQL Formatter](https://github.com/wsr-publishing/azure-poor-formatter)
* [Idera SQL DM Performance Insights](https://www.idera.com/productssolutions/freetools/sqldmperformanceinsights)
* [First Responder Kit](https://github.com/dzsquared/sqlops-firstresponderkit)
* [SentryOne Plan Explorer](https://www.sentryone.com/products/sentryone-plan-explorer-extension-azure-data-studio)
* [whoisactive](https://github.com/Microsoft/azuredatastudio)
* [PostgreSQL Support](https://github.com/Microsoft/azuredatastudio-postgresql/) (Microsoft)
* [Admin Pack for SQL Server](https://github.com/Microsoft/azuredatastudio) (Microsoft)

## What's Next

Azure Data Studio will no doubt be getting a lot of love from Microsoft and the open source community over the next few years and now supports a ton of [new SQL 2019 features](https://cloudblogs.microsoft.com/sqlserver/2019/11/05/the-november-2019-release-of-azure-data-studio-is-now-available/). Its features will probably also include things that Management Studio does not, and I expect it to take on many areas that it currently lacks in comparison to SSMS. There will be fewer and fewer reasons to open SSMS over time and if you're a wizard at PowerShell already, this might already be the final nail in Management Studio's coffin for you.

<br/>
<br/>

<ClientOnly>
<disqus-component/>
</ClientOnly>
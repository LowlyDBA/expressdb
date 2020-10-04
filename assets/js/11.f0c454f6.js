(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{360:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"what-are-the-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-requirements"}},[a._v("#")]),a._v(" What Are the Requirements")]),a._v(" "),t("p",[a._v("When deciding how to backup a database, the two major factors that\nare often used are RPO - "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Recovery_point_objective",target:"_blank",rel:"noopener noreferrer"}},[a._v("Recovery Point Object"),t("OutboundLink")],1),a._v(" - and RTO - "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Recovery_time_objective",target:"_blank",rel:"noopener noreferrer"}},[a._v("Recovery Time Object"),t("OutboundLink")],1),a._v(". That is, how much data can you afford to lose and how long can you afford to spend recovering when disaster strikes.")]),a._v(" "),t("p",[a._v("In the scope of a SQL Server Express installation, some different factors might apply.\nMost databases on an Express instance probably fall under one of the following:")]),a._v(" "),t("ul",[t("li",[a._v("Backups don't matter - the data isn't important")]),a._v(" "),t("li",[a._v("Backups matter on a controlled server")]),a._v(" "),t("li",[a._v("Backups matter on a customer's server")])]),a._v(" "),t("h3",{attrs:{id:"option-1-don-t-backup-at-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-1-don-t-backup-at-all"}},[a._v("#")]),a._v(" Option 1: Don't Backup At All")]),a._v(" "),t("p",[a._v("If you're using SQL Server Express for educational purposes, local development,\nunit testing, etc. then you're almost certainly in the first option. Don't sweat it. You can probably afford to keep your entire database in scripts to rebuild on the fly and don't need a formal backup. This makes the case for using a fully source controlled database an easy one as well. Life is good, isn't it?")]),a._v(" "),t("h3",{attrs:{id:"option-2-backup-as-needed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-2-backup-as-needed"}},[a._v("#")]),a._v(" Option 2: Backup As Needed")]),a._v(" "),t("p",[a._v("If you're in the second camp and "),t("em",[a._v("do")]),a._v(" actually care about backups, things can still be pretty easy - you just need to answer the\nRPO and RTO questions and figure out what combination of "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/full-file-backups-sql-server",target:"_blank",rel:"noopener noreferrer"}},[a._v("full"),t("OutboundLink")],1),a._v(", "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/differential-backups-sql-server",target:"_blank",rel:"noopener noreferrer"}},[a._v("differential"),t("OutboundLink")],1),a._v(", and "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/transaction-log-backups-sql-server",target:"_blank",rel:"noopener noreferrer"}},[a._v("transactional log"),t("OutboundLink")],1),a._v(" backups best fit your needs and when to schedule them. A normal database (far larger than 10GB) might typically have the following backup schedule:")]),a._v(" "),t("ul",[t("li",[a._v("Weekly full backups")]),a._v(" "),t("li",[a._v("Daily differential backups")]),a._v(" "),t("li",[a._v("15 minute transactional backups")])]),a._v(" "),t("p",[a._v("Since none of the databases under SQL Server Express can exceed 10GB and the backups can be compressed, however, it may be easier to make the full backups more frequent. If there is a high transactional volume on the database and recovering quickly is important, the below backup template is a good starting point:")]),a._v(" "),t("ul",[t("li",[a._v("Daily full backups")]),a._v(" "),t("li",[a._v("12 hour differential backup")]),a._v(" "),t("li",[a._v("15 minute transactional backups")])]),a._v(" "),t("p",[a._v("Remember, though that even a small database can still generate huge amounts of transactions that can quickly make a differential backup larger than a full backup. In this case, more frequent full backups might yield faster recovery times and less space overall.")]),a._v(" "),t("p",[a._v("Conversely, if the data isn't changing very often, an even simpler route is to take advantage of the simple recovery mode and only deal with full backups. The time to restore a backup less than 10GB will be negligible in most cases. The storage required is also not a general concern either, with the availability of storage being so cheap and easy to come by. The simplest backup schedule is:")]),a._v(" "),t("ul",[t("li",[a._v("Daily full backup")])]),a._v(" "),t("h3",{attrs:{id:"option-3-backup-for-customers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-3-backup-for-customers"}},[a._v("#")]),a._v(" Option 3: Backup for Customers")]),a._v(" "),t("p",[a._v("This one is the trickiest. While customers will most likely have the ability to change the backup plans set in place by default for an application, many will never choose to change them due to support agreements or lack of domain knowledge. If an application crashes, even because of a database related issue, it will reflect poorly on the software product, not Microsoft. Having at least a light backup plan in place by default allows the customer to recover some of their lost data even if they didn't have the know-how to set it up for themselves.")]),a._v(" "),t("p",[a._v("Without tacking on additional dozens of GB of space requirements for a product, a once weekly\nfull backup should provide a sweet spot\nbetween convenience and safety. Using the simple recovery mode will remove the necessity for managing and storing transaction log backups as well, decreasing the complexity and backup size of the backup plan.")]),a._v(" "),t("h2",{attrs:{id:"backup-scripts-for-sql-express"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup-scripts-for-sql-express"}},[a._v("#")]),a._v(" Backup Scripts for SQL Express")]),a._v(" "),t("p",[a._v("Whether an instance is Enterprise or Express, it needs a tried and true method of backing up. While it is easy enough to hand-craft backup commands for any given database, creating scripts to automate the more intricate parts of the commands and make them re-usable is a feat. The favorite of many DBAs and companies is "),t("a",{attrs:{href:"https://ola.hallengren.com/sql-server-backup.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Ola Hallengren's backup scripts"),t("OutboundLink")],1),a._v(" which do an amazing job of making it easy to customize and maintain smart backup scripts.")]),a._v(" "),t("p",[a._v("Here are some examples that implement the above examples using Ola's scripts. Included are some best practices like compression, logging the backup to a log table,\nand cleaning up old backup files to prevent disks from filling up.")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("Each backup should customize options based on requirements. The below are meant as guides and should not be used on production environments without additional testing and customization.")])]),a._v(" "),t("h3",{attrs:{id:"sql-server-express-standard-backup-schedule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-server-express-standard-backup-schedule"}},[a._v("#")]),a._v(" SQL Server Express Standard Backup Schedule")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* Weekly Full Backup */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXECUTE")]),a._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DatabaseBackup\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Databases")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'USER_DATABASES'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Directory")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'C:\\Backup'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@BackupType")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'FULL'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Compess")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@LogToTable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupTime")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("336")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--14 days")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupMode")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'AFTER_BACKUP'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Verify")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* Daily Differential Backup */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXECUTE")]),a._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DatabaseBackup\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Databases")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'USER_DATABASES'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Directory")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'C:\\Backup'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@BackupType")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'DIFF'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Compess")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@LogToTable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupTime")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("168")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--7 days")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupMode")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'AFTER_BACKUP'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Verify")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 15 Minute Tran Log Backup */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXECUTE")]),a._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DatabaseBackup\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Databases")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'USER_DATABASES'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Directory")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'C:\\Backup'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@BackupType")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'LOG'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Compess")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@LogToTable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupTime")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("168")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--7 days")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupMode")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'AFTER_BACKUP'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Verify")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),a._v("\n")])])]),t("h3",{attrs:{id:"highly-transactional-low-rto-sql-server-express-backup-schedule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#highly-transactional-low-rto-sql-server-express-backup-schedule"}},[a._v("#")]),a._v(" Highly Transactional / Low RTO SQL Server Express Backup Schedule")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* Daily Full Backup */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXECUTE")]),a._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DatabaseBackup\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Databases")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'USER_DATABASES'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Directory")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'C:\\Backup'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@BackupType")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'FULL'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Compess")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@LogToTable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupTime")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("48")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--3 days")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupMode")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'AFTER_BACKUP'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Verify")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 12 Hour Differential Backup */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXECUTE")]),a._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DatabaseBackup\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Databases")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'USER_DATABASES'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Directory")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'C:\\Backup'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@BackupType")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'DIFF'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Compess")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@LogToTable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupTime")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--1 day")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupMode")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'AFTER_BACKUP'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Verify")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 15 Minute Tran Log Backup */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXECUTE")]),a._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DatabaseBackup\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Databases")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'USER_DATABASES'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Directory")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'C:\\Backup'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@BackupType")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'LOG'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Compess")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@LogToTable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupTime")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--12 hours")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupMode")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'AFTER_BACKUP'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Verify")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),a._v("\n")])])]),t("h3",{attrs:{id:"simple-sql-server-express-backup-schedule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-sql-server-express-backup-schedule"}},[a._v("#")]),a._v(" Simple SQL Server Express Backup Schedule")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* Daily Full Backup with Simple Recovery Mode*/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXECUTE")]),a._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DatabaseBackup\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Databases")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'USER_DATABASES'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Directory")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'C:\\Backup'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@BackupType")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'FULL'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Compess")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@LogToTable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Y'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupTime")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("72")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--3 days")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@CleanupMode")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'AFTER_BACKUP'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@Verify")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 'Y\n")])])]),t("h2",{attrs:{id:"scheduling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scheduling"}},[a._v("#")]),a._v(" Scheduling")]),a._v(" "),t("p",[a._v("Wondering how to automate these backups? Check out the "),t("RouterLink",{attrs:{to:"/sql-server-express-replace-sql-agent.html"}},[a._v("Replacing SQL Agent on SQL Server Express")]),a._v(" article for methods to schedule jobs without the SQL Agent.")],1),a._v(" "),t("br"),a._v(" "),t("br")])}),[],!1,null,null,null);s.default=r.exports}}]);
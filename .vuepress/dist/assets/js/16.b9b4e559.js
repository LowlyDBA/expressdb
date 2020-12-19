(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{374:function(e,t,s){"use strict";s.r(t);var a=s(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"hardware-limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hardware-limitations"}},[e._v("#")]),e._v(" Hardware Limitations")]),e._v(" "),s("p",[e._v("Some of the major restrictions for SQL Server Express are the caps\non processors and RAM that can be used by an instance. While most people\nfocus on the storage limitation, these two can also be quite problematic.\nIf only a few 10GB databases exist on an Express instance, the\npain of having less RAM/CPU available may not be noticeable. But, for those\ntrying to utilize many databases on a single instance, it might become\nobvious that more resources are needed.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("SQL Server Express can utilize "),s("em",[e._v("at most")]),e._v(" 1410MB\nof RAM and either 1 socket or 4 cores - whichever is less "),s("a",{attrs:{href:"/which-sql-server-express-version-to-use"}},[e._v("depending on\nthe version")]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"multiple-instances-on-one-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-instances-on-one-machine"}},[e._v("#")]),e._v(" Multiple Instances on One Machine")]),e._v(" "),s("h3",{attrs:{id:"making-the-most-of-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#making-the-most-of-resources"}},[e._v("#")]),e._v(" Making the Most of Resources")]),e._v(" "),s("p",[e._v("While the allowed maximum RAM and CPU numbers might\nseem paltry compared to even a mid-tier laptop these days, the good news is that this\nonly applies at the "),s("em",[e._v("instance")]),e._v(" level, so using multiple instances is a fair strategy.")]),e._v(" "),s("p",[e._v("In fact, Microsoft even advertises the fact that all versions, from Enterprise to\nExpress, can handle 50 instances sitting side-by-side on a server. That doesn't mean 50\nis an ideal number, but it should prove that there is the capability for as many as are necessary. While each instance does require a base amount of CPU and RAM usage to run, distributing\nacross multiple is potentially worthwhile for a large enough workload or one that can separate\nits data cross-instance.")]),e._v(" "),s("p",[e._v("For example, a laptop with 8GB of RAM and a quad-core processor\ncould host four SQL Server Express instances easily:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th"),e._v(" "),s("th",[e._v("RAM")]),e._v(" "),s("th",[e._v("CPU")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Instance 1")]),e._v(" "),s("td",[e._v("1410MB")]),e._v(" "),s("td",[e._v("4 cores")])]),e._v(" "),s("tr",[s("td",[e._v("Instance 2")]),e._v(" "),s("td",[e._v("1410MB")]),e._v(" "),s("td",[e._v("4 cores")])]),e._v(" "),s("tr",[s("td",[e._v("Instance 3")]),e._v(" "),s("td",[e._v("1410MB")]),e._v(" "),s("td",[e._v("4 cores")])]),e._v(" "),s("tr",[s("td",[e._v("Instance 4")]),e._v(" "),s("td",[e._v("1410MB")]),e._v(" "),s("td",[e._v("4 cores")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("Total")])]),e._v(" "),s("td",[s("strong",[e._v("5640MB")])]),e._v(" "),s("td",[s("strong",[e._v("4 cores")])])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("This example is for demonstration purposes. Hardware configurations should be\nhighly tailored based on required performance and available hardware.")])]),e._v(" "),s("h3",{attrs:{id:"the-downsides-of-side-loading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-downsides-of-side-loading"}},[e._v("#")]),e._v(" The Downsides of Side-Loading")]),e._v(" "),s("p",[e._v("However, for everything gained by side-loading SQL Server instances, there are downsides as well.\nRebooting the server means rebooting "),s("em",[e._v("all")]),e._v(" the instances, that means patching and OS updates can become very painful.")]),e._v(" "),s("p",[e._v("As noted in the chart above, it probably isn't feasible to dedicate cores per instance, so another risk\nis that the instances are still sharing resources (and not just cores). A noisy neighbor could adversely\nimpact all the other instances and tracking down the root of that problem is far from easy.")]),e._v(" "),s("h2",{attrs:{id:"virtualization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtualization"}},[e._v("#")]),e._v(" Virtualization")]),e._v(" "),s("h3",{attrs:{id:"virtually-the-best-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtually-the-best-option"}},[e._v("#")]),e._v(" Virtually the Best Option")]),e._v(" "),s("p",[e._v("Similar so side-loading several instances, with a powerful enough server a great option is to run\ndifferent SQL Server Express instances inside of Virtual Machines. This approach removes most of the\ndownsides from side-loading, as each VM has more or less contained resources and can be rebooted indepdently\nof its siblings.")]),e._v(" "),s("h3",{attrs:{id:"the-downsides-of-virtualization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-downsides-of-virtualization"}},[e._v("#")]),e._v(" The Downsides of Virtualization")]),e._v(" "),s("p",[e._v("The biggest problem with using a slew of VMs is that each one is an independent OS, not just an instance,\nso the bare metal machine's resources will be stretched even thinner by having to run all of the underlying\nprocesses necessary to keep both the OS and a SQL instance running smoothly. Depending on the hardware available,\nhowever, this might be a non-issue, as enough storage, RAM, and processors can fix most problems for a reasonable\nprice these days.")]),e._v(" "),s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),s("ul",[s("li",[e._v("Microsoft's "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/sql-server/install/work-with-multiple-versions-and-instances-of-sql-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Work with Multiple Versions and Instances of SQL Server"),s("OutboundLink")],1)])]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("ClientOnly",[s("disqus-component"),e._v(" "),s("userway-component")],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);
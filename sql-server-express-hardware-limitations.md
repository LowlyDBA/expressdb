

## Hardware Limitations

Some of the major restrictions for SQL Server Express are the caps
on processors and RAM that can be used by an instance. While most people
focus on the storage limitation, these two can also be quite problematic.
If only a few 10GB databases exist on an Express instance, the
pain of having less RAM/CPU available may not be noticeable. But, for those
trying to utilize many databases on a single instance, it might become
obvious that more resources are needed.

SQL Server Express can utilize *at most* 1410MB
of RAM and either 1 socket or 4 cores - whichever is less ([depending on
the version](http://expressdb.io/sql-server-express-feature-comparison/)).

## Multiple Instances on One Machine

### Making the Most of Resources
While the allowed maximum RAM and CPU numbers might
seem paltry compared to even a mid-tier laptop these days, the good news is that this
only applies at the *instance* level, so using multiple instances is a fair strategy.

In fact, Microsoft even advertises the fact that all versions, from Enterprise to
Express, can handle 50 instances sitting side-by-side on a server. That doesn't mean 50
is an ideal number, but it should prove that there is the capability for as many as are necessary. While each instance does require a base amount of CPU and RAM usage to run, distributing
across multiple is potentially worthwhile for a large enough workload or one that can separate
its data cross-instance.

For example, a laptop with 8GB of RAM and a quad-core processor
 could host four SQL Server Express instances easily:

| | RAM | CPU |
| - | - | - |
|Instance 1 | 1410MB | 4 cores
| Instance 2 | 1410MB | 4 cores
| Instance 3 | 1410MB | 4 cores
| Instance 4 | 1410MB | 4 cores
| **Total** | **5640MB** | **4 cores** |

*Note: This example is for demonstration purposes. Hardware configurations should be
highly tailored based on required performance and available hardware.*

### The Downsides of Side-Loading

However, for everything gained by side-loading SQL Server instances, there are downsides as well.
Rebooting the server means rebooting *all* the instances, that means patching and OS updates can become very painful.

As noted in the chart above, it probably isn't feasible to dedicate cores per instance, so another risk
is that the instances are still sharing resources (and not just cores). A noisy neighbor could adversely
impact all the other instances and tracking down the root of that problem is far from easy.

## Virtualization
### Virtually the Best Option
Similar so side-loading several instances, with a powerful enough server a great option is to run
different SQL Server Express instances inside of Virtual Machines. This approach removes most of the
downsides from side-loading, as each VM has more or less contained resources and can be rebooted indepdently
of its siblings.

### The Downsides of Virtualization

The biggest problem with using a slew of VMs is that each one is an independent OS, not just an instance,
so the bare metal machine's resources will be stretched even thinner by having to run all of the underlying
processes necessary to keep both the OS and a SQL instance running smoothly. Depending on the hardware available,
however, this might be a non-issue, as enough storage, RAM, and processors can fix most problems for a reasonable
price these days.

## Further Reading

* Microsoft's [Work with Multiple Versions and Instances of SQL Server](https://docs.microsoft.com/en-us/sql/sql-server/install/work-with-multiple-versions-and-instances-of-sql-server)

<br/>
<br/>

<ClientOnly>
<disqus-component/>
</ClientOnly>
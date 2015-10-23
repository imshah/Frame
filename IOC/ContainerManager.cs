using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Castle.Windsor;
using Castle.MicroKernel.Registration;

namespace Frame.IOC
{
    public class ContainerManager
    {
        public static IWindsorContainer Container { get; private set; }

        public static void BootstrapContainer()
        {
            var installers = new IWindsorInstaller[] {                
                new DALInstaller(),
                new ServiceInstaller(),
                new ControllerInstaller()
            };

            Container = new WindsorContainer().Install(installers);
        }
    }
}
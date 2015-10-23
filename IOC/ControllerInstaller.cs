using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Controllers;
using Castle.Windsor;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;

namespace Frame.IOC
{
    public class ControllerInstaller : IWindsorInstaller
    {
        //public void Install(IWindsorContainer container, IConfigurationStore store)
        //{
        //    container.Register(AllTypes.FromThisAssembly()
        //        .Pick().If(t => t.Name.EndsWith("Controller"))
        //        .Configure(configurer => configurer.Named(configurer.Implementation.Name))
        //        .LifestylePerWebRequest());
        //}

        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Classes.FromThisAssembly()
                              .BasedOn<IHttpController>()
                              .LifestyleTransient());
        }
    }
}
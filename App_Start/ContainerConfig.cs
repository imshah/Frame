using System.Web.Http;
using System.Web.Http.Dispatcher;
using Frame.IOC;

namespace Frame
{
    public class ContainerConfig
    {
        public static void Register()
        {            
            ContainerManager.BootstrapContainer();

            GlobalConfiguration.Configuration.Services.Replace(
                typeof(IHttpControllerActivator),
                new WindsorCompositionRoot(ContainerManager.Container));
        }

    }
}
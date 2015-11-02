using Castle.Windsor;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;

namespace Frame.IOC
{
    public class DALInstaller: IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Classes.FromThisAssembly()
                            .InNamespace("Frame.DAL.Concrete.mongodb", true)
                            .WithService.DefaultInterfaces()
                            .LifestyleSingleton());
        }
    }
}
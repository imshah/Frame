using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Net.Http.Headers;
using System.Configuration;
using System.Web.Http.Cors;

namespace Frame
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //handle CORS
            var origins = ConfigurationManager.AppSettings["cors:origins"].ToString();
            config.EnableCors(new EnableCorsAttribute(origins, "*", "*"));

            //IOC 
            ContainerConfig.Register();

            //Web API routes
			config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "FrameApi",
                routeTemplate: "{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            /*If you do this in the WebApiConfig you will get JSON by default, 
             * but it will still allow you to return XML if you pass text/xml as the request Accept header
             */
            var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
            config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);

            //return data in camel case
            var jsonFormatter = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            jsonFormatter.SerializerSettings.Formatting = Formatting.Indented;
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            jsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
        }
    }
}

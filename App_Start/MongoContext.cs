using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;

namespace Frame.App_Start
{
    public class MongoContext
    {
        public IMongoDatabase database { get; private set; }

        public MongoContext()
        {
            var credentials = MongoCredential.CreateMongoCRCredential("TestDB", "admin", "123456");
            var settings = new MongoClientSettings 
            { 
                Credentials = new [] {credentials}
            };
            var client = new MongoClient(settings);
            database = client.GetDatabase("TestDB");
            //database = server.GetDatabase("TestDB");
        }
    }
}
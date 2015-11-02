using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Frame.DAL.Abstract;
using Frame.Models;
using Frame.App_Start;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using System.Threading.Tasks;

namespace Frame.DAL.Concrete.mongodb
{
    public class UserDataRepository: IUserDataRepository
    {
        IMongoDatabase db;

        public UserDataRepository()
        {
            var context = new MongoContext();
            db = context.database;
        }

        public User GetUserById(string id)
        { 
           return null;
        }


        public IList<User> GetAllUser()
        {
            var newUser = new User
            {
                id = "001",
                userName = "spiderman",
                address = "NY"

            };

            var list = new List<User>();
            list.Add(newUser);
            return list;
        }

        public async Task<String> GetAllUser(int? id)
        {
            var x = await GetTypesAsyc();
            return x;
        }

        private async Task<string> GetTypesAsyc()
        {
            var collection = db.GetCollection<BsonDocument>("types");
            var filter = Builders<BsonDocument>.Filter.Eq("name", "Sports");
            var result = await collection.Find(filter).ToListAsync();

            return result.ToJson();
        }
    }
}
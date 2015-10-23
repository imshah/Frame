using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Frame.Models;
using Frame.DAL.Abstract;

namespace Frame.DAL.Concrete
{
    public class UserDataRepository: IUserDataRepository
    {
        private List<User> users;

        public User GetUserById(string id)
        {
            var user = users.Where(u => u.id == id).FirstOrDefault();
            return user;
        }

        public IList<User> GetAllUser()
        {
            users = new List<User>();

            //equivalent to DB reading
            users.Add(new User
            {
                id = "user1",
                userName = "joker",
                address = "Bleaker Street"
            });

            users.Add(new User
            {
                id = "user2",
                userName = "batman",
                address = "Gotham City"
            });

            users.Add(new User
            {
                id = "user3",
                userName = "spiderman",
                address = "New York City"
            });

            users.Add(new User
            {
                id = "user4",
                userName = "superman",
                address = "Krypton"
            });

            return users;
        }
    }
}
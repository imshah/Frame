using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Frame.Models;
using Frame.DAL.Abstract;
using Frame.Service.Abstract;

namespace Frame.Service.Concrete
{
    public class UserDataService: IUserDataService
    {
        private readonly IUserDataRepository userRepo;

        public UserDataService(IUserDataRepository repo)
        {
            userRepo = repo;           
        }

        public User GetUserById(string id)
        {
            return userRepo.GetUserById(id);
        }

        public IList<User> GetAllUser()
        {
            return userRepo.GetAllUser();
        }
    }
}
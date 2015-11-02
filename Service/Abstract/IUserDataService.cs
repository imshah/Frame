using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Frame.Service.Abstract
{
    public interface IUserDataService
    {
        IList<Frame.Models.User> GetAllUser();
        Task<String> GetAllUser(int? id);
        Frame.Models.User GetUserById(string id);
    }
}

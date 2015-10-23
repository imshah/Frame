using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Frame.DAL.Abstract
{
    public interface IUserDataRepository
    {
        IList<Frame.Models.User> GetAllUser();
        Frame.Models.User GetUserById(string id);
    }
}

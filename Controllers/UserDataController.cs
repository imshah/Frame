using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Frame.Service.Abstract;
using Frame.DAL.Abstract;
using Frame.Models;

namespace Frame.Controllers
{
    [RoutePrefix("userdata")]
    public class UserDataController : ApiController
    {
        public readonly IUserDataService userService;
        public readonly IUserDataRepository userRepo;

        public UserDataController(IUserDataService service, IUserDataRepository repo)
        {
            userService = service;
            userRepo = repo;
        }

        // GET userdata  
        [Route("getall")]
        public IHttpActionResult GetAll()
        {
            var users = userService.GetAllUser();
            return Ok(users);
        }

        // GET userdata/5  
        [Route("getall/{id}")]
        public IHttpActionResult GetAll(int? id)
        {
            var users = userService.GetAllUser(id);
            return Ok(users);
        }

        // GET userdata/5
        [Route("{id}")]        
        public IHttpActionResult Get(string id)
        {
            var user = userService.GetUserById(id);
            return Ok(user);
        }

    }
}

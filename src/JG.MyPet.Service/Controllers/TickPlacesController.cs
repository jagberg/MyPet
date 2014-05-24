using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using JG.MyPet.Models;
using JG.MyPet.BusinessService;

namespace JG.MyPet.Service
{
    public class TickPlacesController : ApiController
    {

        // GET api/<controller>
        public IEnumerable<TickPlace> Get()
        {
            var tickArea = new TickArea(new DataService.TickArea());

            return tickArea.GetTickPlaces();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
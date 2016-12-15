using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Umbraco.Web.WebApi;
using McCode.Web.Models;
using System.Web.Script.Serialization;

namespace McCode.Web.Controllers
{
    public class InfiniteListController : UmbracoApiController
    {
        [HttpGet]
        public HttpResponseMessage GetInfiniteList(int sectionCount, string list)
        {
            var json = new JavaScriptSerializer().Serialize(list);
            //var model = JsonConvert.DeserializeObject<List<InfiniteListItemModel>>(list);

            return Request.CreateResponse(HttpStatusCode.Accepted, json);
        }
    }
}

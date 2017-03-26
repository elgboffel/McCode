using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Umbraco.Web.WebApi;
using McCode.Web.Models;
using Umbraco.Web;
using Newtonsoft.Json.Linq;
using System.Linq;

namespace McCode.Web.Controllers
{

    public class InfiniteListController : UmbracoApiController
    {
        private UmbracoHelper _helper;

        private InfiniteListController()
        {
            _helper = new UmbracoHelper(UmbracoContext.Current);
        }

        [HttpGet]
        public HttpResponseMessage GetList(string data, int page, int pageSize = 2)
        {
            var dataArray = data.Split(',');
            var list = ContentListById(dataArray)
                .Skip(page*pageSize)
                .Take(pageSize)
                .ToList();


            var jObject = JArray.FromObject(
                list,
                new JsonSerializer { NullValueHandling = NullValueHandling.Ignore }
                );

            return Request.CreateResponse(HttpStatusCode.Accepted, jObject);
        }

        private List<InfiniteListModel> ContentListById(string[] array)
        {
            var list = new List<InfiniteListModel>();

            foreach(var item in array)
            {
                var typedContent = _helper.TypedContent(item);
                var content = new InfiniteListModel
                {
                    Name = typedContent.Name,
                    Lead = typedContent.GetPropertyValue<string>("lead", ""),
                    Url = typedContent.Url
                };

                list.Add(content);
            }
            return list;
        }
    }
}

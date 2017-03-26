using Newtonsoft.Json;
using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.Models
{
    public class InfiniteListModel
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("lead")]
        public string Lead { get; set; }

        [JsonProperty("url")]
        public string Url { get; set; }

        [JsonProperty("tags")]
        public string[] Tags { get; set; }
    }
}

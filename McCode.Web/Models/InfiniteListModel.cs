using Newtonsoft.Json;

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
    }
}

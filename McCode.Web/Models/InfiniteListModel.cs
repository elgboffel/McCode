using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace McCode.Web.Models
{
    public class InfiniteListModel
    {

        public List<InfiniteListItemModel> list { get; set; }
    }

    public class InfiniteListItemModel
    {
        public string Name { get; set; }

        public string Lead { get; set; }

        public string Url { get; set; }
    }
}

using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.Models.PartialViewModels
{
    public class ListViewModel
    {
        public string Headline { get; set; }

        public IEnumerable<IPublishedContent> List { get; set; }
    }

    public interface NodeListViewModel
    {
        string Headline { get; set; }

        string Lead { get; set; }

        string Url { get; set; }
    }
}

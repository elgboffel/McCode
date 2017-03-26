using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.Models.PartialViewModels
{
    public class ListViewModel
    {
        public string Headline { get; set; }

        public IEnumerable<IPublishedContent> List { get; set; }

        public IEnumerable<IPublishedContent> Tags { get; set; }
    }
}

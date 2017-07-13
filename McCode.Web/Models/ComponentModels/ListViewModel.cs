using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.Models.ComponentModels
{
    public class ListViewModel
    {
        public IPublishedContent CurrentPage { get; set; }

        public string Headline { get; set; }

        public string Lead { get; set; }

        public bool  ShowLead { get; set; }

        public IEnumerable<IPublishedContent> List { get; set; }

        public bool ShowBreadcrumb { get; set; }

        public ListViewModel()
        {
            this.ShowBreadcrumb = false;
            this.ShowLead = false;
        }

    }
}

using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.Models.PartialModels
{
    public class SidebarViewModel
    {
        public string Headline { get; set; }

        public IEnumerable<IPublishedContent> Layout { get; set; }
    }
}

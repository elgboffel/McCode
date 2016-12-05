using System;
using Umbraco.Core.Models;

namespace McCode.Web.Models.PartialViewModels
{
    public class PageHeadViewModel
    {
        public IPublishedContent Image { get; set; }

        public int Height { get; set; }

        public int GridSize { get; set; }
    }
}

﻿using System.Collections.Generic;
using Umbraco.Core.Models;

namespace Datagraf.Web.Models.PartialModels
{
    public class SidebarViewModel
    {
        public IPublishedContent CurrentPage { get; set; }

        public string Headline { get; set; }

        public IEnumerable<IPublishedContent> Layout { get; set; }
    }
}

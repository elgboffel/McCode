﻿using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.ViewModels.Components
{
    public class ListGroupedByDateViewModel
    {
        public string Headline { get; set; }

        public string Lead { get; set; }

        public bool  ShowLead { get; set; }

        public IEnumerable<IPublishedContent> List { get; set; }

        public bool ShowBreadcrumb { get; set; }

        public ListGroupedByDateViewModel()
        {
            this.ShowBreadcrumb = false;
            this.ShowLead = false;
        }

    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace McCode.Web.ViewModels.Components
{
    public class CollapseMenuViewModel
    {
        public IPublishedContent StartNode { get; set; }

        public int StartNodeLevel { get; set; }

        public int MaxLevelsRendered { get; set; }

        public CollapseMenuViewModel()
        {
            StartNodeLevel = 1;
            MaxLevelsRendered = 99;
        }
    }

    public class CollapseMenuSection
    {
        public CollapseMenuPage ParentPage { get; set; }
        public IEnumerable<CollapseMenuPage> ChildrenOfCurrentPage { get; set; }

    }

    public class CollapseMenuPage
    {
        public int Id { get; set; }

        public string UrlName { get; set; }

        public string Url { get; set; }

        public int Level { get; set; }

        public virtual IEnumerable<CollapseMenuPage> Children { get; set; }

        public virtual bool HasChildren { get; set; }

        public CollapseMenuPage(IPublishedContent context)
        {
            Id = context.Id;
            UrlName = context.Name;
            Url = context.Url;
            Level = context.Level;
            Children = context.Children()
                .Where(x => x.IsVisible())
                .Select(x => new CollapseMenuPage(x));
            HasChildren = Children.Any();
        }
    }
}

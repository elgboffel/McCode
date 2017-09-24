using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Models;

namespace McCode.Web.ViewModels.Components
{
    public class MediaListViewModel : MediaViewModel
    {

        public IEnumerable<IPublishedContent> MediaList { get; set; }

        public int ItemsPerPage { get; set; }

        public int Page { get; set; }

        public decimal TotalPages { get; set; }

        public int Skips {
            get
            {
                return (Page - 1) * ItemsPerPage;
            }
        }

        /// <summary>
        /// Used for async media list. Create a custom search. Remember to add search method to controller
        /// </summary>
        public SearchType SearchType { get; set; }

        public bool ShowImage { get; set; }

        public bool  ShowLead { get; set; }

        public bool ShowTitle { get; set; }

        public bool ShowBreadcrumb { get; set; }

        public ViewRenderMode ViewRenderMode { get; set; }

        /// <summary>
        /// E.g media-list--green
        /// </summary>
        public string MedialistClassModifier { get; set; }

        /// <summary>
        /// E.g card--green
        /// </summary>
        public string CardClassModifier { get; set; }


        public MediaListViewModel()
        {
            ViewRenderMode = ViewRenderMode.Default;
            ItemsPerPage = 5;
            ShowLead = true;
            ShowImage = true;
        }
    }

    public enum ViewRenderMode
    {
        Default,
        EnableBootstrap
    }

    public enum SearchType
    {
        Default,
        RelatedPagesByTags,
        CustomSearch
    }
}

using System;
using System.Collections.Generic;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace McCode.Web.ViewModels.Components
{
    public class CardViewModel : MediaViewModel
    {

        public string Title { get; set; }

        public string Heading { get; set; }

        public string Lead { get; set; }

        public string Url { get; set; }

        public string Date { get; set; }

        public IEnumerable<IPublishedContent> Tags { get; set; }

        public int Truncate { get; set; }

        public HtmlString RTE { get; set; }

        public bool ShowBreadcrumb { get; set; }

        /// <summary>
        /// E.g card--green
        /// </summary>
        public string ClassModifier { get; set; }

        public CardViewModel() { }

        public CardViewModel(
            IPublishedContent x,
            bool showLead = true,
            bool showTitle = false,
            bool showImage = true,
            bool showInfo = false)
        {
            Heading = x.GetPropertyValue<string>("teaserHeading",
                x.GetPropertyValue<string>("heading",
                x.Name));

            if (showImage)
            {
                Image = x.GetPropertyValue("teaserImage",
                    x.GetPropertyValue<IPublishedContent>("heroImage", null));
            }

            Url = x.Url;

            if (showTitle)
            {
                Title = x.Parent.Name;
            }

            if (showLead)
            {
                Lead = x.GetPropertyValue<string>("teaserLead",
                    x.GetPropertyValue<string>("lead", string.Empty));
            }

            if (showInfo)
            {
                Date = x.GetPropertyValue<DateTime>("date").ToString("d. MMMM yyyy");
            }
        }
    }
}

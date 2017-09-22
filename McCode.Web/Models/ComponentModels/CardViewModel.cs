using System;
using System.Collections.Generic;
using System.Web;
using Umbraco.Core.Models;

namespace McCode.Web.Models.ComponentModels
{
    public class CardViewModel : MediaViewModel
    {

        public string Svg { get; set; }

        public int MobileImageHeight { get; set; }

        public string Headline { get; set; }

        public string Lead { get; set; }

        public string Url { get; set; }

        public string Date { get; set; }

        public IPublishedContent Tag { get; set; }

        public int Truncate { get; set; }

        public IHtmlString RTE { get; set; }

        public CardViewModel()
        {
            this.Truncate = 200;
        }
    }
}

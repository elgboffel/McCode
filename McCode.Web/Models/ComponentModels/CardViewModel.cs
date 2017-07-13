using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Models;

namespace McCode.Web.Models.ComponentModels
{
    public class CardViewModel
    {
        public IEnumerable<IPublishedContent> Children { get; set; }

        public IPublishedContent Image { get; set; }

        public int Id { get; set; }

        public int TypedWidth { get; set; }

        /// <summary>
        /// Typed Width for Medium Desktop
        /// </summary>
        public int TypedWidthMD { get; set; }

        /// <summary>
        /// Typed Width for Small Desktop
        /// </summary>
        public int TypedWidthSM { get; set; }
        /// <summary>
        /// Typed Width tablet
        /// </summary>
        public int TypedWidthXS { get; set; }
        /// <summary>
        /// Typed Width for Mobile
        /// </summary>
        public int TypedWidthXXS { get; set; }

        public int GridSize { get; set; }

        /// <summary>
        /// Grid size for Medium Desktop
        /// </summary>
        public int GridSizeMD { get; set; }

        /// <summary>
        /// Grid size for Small Desktop
        /// </summary>
        public int GridSizeSM { get; set; }
        /// <summary>
        /// For Tablet
        /// </summary>
        public int GridSizeXS { get; set; }
        /// <summary>
        /// Grid size for Mobile
        /// </summary>
        public int GridSizeXXS { get; set; }

        public int ImageHeight { get; set; }

        /// <summary>
        /// Image height for Medium Desktop
        /// </summary>
        public int ImageHeightMD { get; set; }

        /// <summary>
        /// Image height for Small Desktop
        /// </summary>
        public int ImageHeightSM { get; set; }

        /// <summary>
        /// Image height for Tablet
        /// </summary>
        public int ImageHeightXS { get; set; }

        /// <summary>
        /// Image height for Mobile
        /// </summary>
        public int ImageHeightXXS { get; set; }

        public int MobileImageHeight { get; set; }

        public string Headline { get; set; }

        public string Lead { get; set; }

        public IEnumerable<IPublishedContent> ArticleType { get; set; }

        public string Trumpet { get; set; }

        public string Url { get; set; }

        public string Date { get; set; }

        public bool AltDatePosition { get; set; }

        public string Category { get; set; }

        public IPublishedContent PrimaryTag { get; set; }

        public bool ShowLargePrimaryTag { get; set; }

        public int Truncate { get; set; }

        public IHtmlString RTE { get; set; }

        public string EventPlace { get; set; }

        public CardViewModel()
        {
            this.ShowLargePrimaryTag = false;
            this.AltDatePosition = false;
            this.Truncate = 200;
            this.Children = Enumerable.Empty<IPublishedContent>();
        }
    }
}

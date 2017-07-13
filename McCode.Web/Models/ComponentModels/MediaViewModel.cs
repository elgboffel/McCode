using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.Models.ComponentModels
{
    public class MediaViewModel
    {
        public IPublishedContent Image { get; set; }

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

        public int ImageHeightMobile { get; set; }

        public int GridTotalPadding { get; set; }

        public MediaViewModel()
        {
            this.TypedWidth = 0;
            this.GridSize = 12;
            this.GridTotalPadding = 30;
        }
    }
}

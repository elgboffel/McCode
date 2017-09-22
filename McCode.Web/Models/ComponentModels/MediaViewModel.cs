using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.Models.ComponentModels
{
    public class MediaViewModel
    {
        public IPublishedContent Image { get; set; }
        /// <summary>
        /// Non dynamic width, overwrites grid sizes
        /// </summary>
        public int TypedWidth { get; set; }

        public int GridSize { get; set; }

        /// <summary>
        /// For Small Desktop
        /// </summary>
        public int GridSizeSM { get; set; }
        /// <summary>
        /// For Tablet
        /// </summary>
        public int GridSizeXS { get; set; }
        /// <summary>
        /// For Mobile
        /// </summary>
        public int GridSizeXXS { get; set; }

        public int ImageHeight { get; set; }

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

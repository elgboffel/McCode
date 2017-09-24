using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.ViewModels.Components
{
    public class MediaViewModel
    {
        public IPublishedContent Image { get; set; }

        public bool EnableImageFallback { get; set; }

        public GridSettings GridSettings { get; set; }

        public MediaHeights MediaHeights { get; set; }

        /// <summary>
        /// None responsive width, overwrites grid sizes
        /// </summary>
        public int TypedWidth { get; set; }

        public MediaViewModel()
        {
            TypedWidth = 0;
        }
    }

    public class GridSettings
    {
        public int GridXxl { get; set; }

        public int GridXl { get; set; }

        public int GridLg { get; set; }

        public int GridMd { get; set; }

        public int GridSm { get; set; }

        public int GridMs { get; set; }

        public int GridXs { get; set; }

        public int GridTotalPadding { get; set; }

        public GridSettings()
        {
            GridTotalPadding = 30;
            GridXs = 12;
        }
    }

    public class MediaHeights
    {
        public int? HeightXxl { get; set; }

        public int? HeightXl { get; set; }

        public int? HeightLg { get; set; }

        public int? HeightMd { get; set; }

        public int? HeightSm { get; set; }

        public int? HeightMs { get; set; }

        public int? HeightXs { get; set; }

        public MediaHeights()
        {
            HeightXs = null;
        }
    }
}

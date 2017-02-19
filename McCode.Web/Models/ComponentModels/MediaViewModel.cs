﻿using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.Models.ComponentModels
{
    public class MediaViewModel
    {
        public IPublishedContent Image { get; set; }

        public int GridSize { get; set; }

        public int ImageHeight { get; set; }

        public int ImageHeightMobile { get; set; }

        public int GridTotalPadding { get; set; }

        public MediaViewModel()
        {
            this.GridSize = 12;
            this.GridTotalPadding = 30;
        }
    }
}

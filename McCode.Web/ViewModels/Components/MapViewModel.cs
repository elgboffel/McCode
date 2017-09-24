using Umbraco.Web.PropertyValueConverters.Leaflet;
using System.Collections.Generic;
using Umbraco.Core.Models;
using Newtonsoft.Json;
using Umbraco.Web.PublishedContentModels;

namespace McCode.Web.ViewModels.Components
{
    public class MapViewModel
    {
        public string Heading { get; set; }

        public IEnumerable<IPublishedContent> MapList { get; set; }

        public LeafletMapModel Map { get; set; }

        public int Zoom { get; set; }

        public int CanvasHeight { get; set; }

        public MapViewModel()
        {
            CanvasHeight = 350;
        }
    }
}

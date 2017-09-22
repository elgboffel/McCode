using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace McCode.Web.Models.ComponentModels
{
    public class CarouselViewModel : MediaViewModel
    {
        public IEnumerable<IPublishedContent> Carousel { get; set; }

    }
}

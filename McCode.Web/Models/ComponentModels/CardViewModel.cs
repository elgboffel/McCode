using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.Models.ComponentModels
{
    public class CardViewModel
    {
        public IPublishedContent Image { get; set; }

        public int GridSize { get; set; }

        public int ImageHeight { get; set; }

        public string Headline { get; set; }

        public string Lead { get; set; }

        public IEnumerable<IPublishedContent> ArticleType { get; set; }

        public string Trumpet { get; set; }

        public string Url { get; set; }

        public string CardType { get; set; }

    }
}

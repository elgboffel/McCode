using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.Models.ComponentModels
{
    public class ContactCardViewModel
    {
        public IEnumerable<IPublishedContent> Image { get; set; }

        public int GridSize { get; set; }

        public int ImageHeight { get; set; }

        public string Name { get; set; }

        public string Title { get; set; }

        public string Department { get; set; }

        public string Phone { get; set; }

        public string Mobile { get; set; }

        public string Mail { get; set; }

    }
}


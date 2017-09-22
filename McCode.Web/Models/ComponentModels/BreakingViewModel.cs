using Our.Umbraco.LinksPicker.Models;
using System;
using System.Web;

namespace AnneVibekeRejser.Web.Models.ComponentModels
{
    public class BreakingViewModel
    {
        public IHtmlString Content { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public LinksPickerModel Link { get; set; }

        public string CookieValue { get; set; }

        public int ExpireDate { get; set; }
    }
}

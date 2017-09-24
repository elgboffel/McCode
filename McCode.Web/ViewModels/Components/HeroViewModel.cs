using Our.Umbraco.LinksPicker.Models;

namespace McCode.Web.ViewModels.Components
{
    public class HeroViewModel : MediaViewModel
    {
        public string Heading { get; set; }

        public string Trumpet { get; set; }

        public string Lead { get; set; }

        public LinksPickerItem Link { get; set; }

        public bool FluidHero { get; set; }

        public string ModifierClass { get; set; }

        public HeroViewModel()
        {
            FluidHero = false;
        }

    }
}

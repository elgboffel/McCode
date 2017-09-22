using Our.Umbraco.LinksPicker.Models;
using System;
using System.Collections.Generic;
using Umbraco.Core.Models;

namespace McCode.Web.Models.ComponentModels
{
    public class HeroViewModel : MediaViewModel
    {
        #region constructors
        public HeroViewModel(HeroViewModel content)
        {
            FluidHero = false;
            Heading = content.Heading;
            Trompet = content.Trompet;
        }

        public HeroViewModel()
        {
            FluidHero = false;
        }
        #endregion

        #region properties
        public bool FluidHero { get; set; }

        public string Heading { get; set; }

        public string Trompet { get; set; }
        #endregion

    }
}

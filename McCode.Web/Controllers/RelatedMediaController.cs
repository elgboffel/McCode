using System;
using System.Collections.Generic;
using System.Linq;
using Niras.Web.Models.PartialModels;
using Umbraco.Web;
using Umbraco.Core.Models;
using Umbraco.Web.Mvc;
using System.Web.Mvc;
using Umbraco.Core.Logging;
using System.Text;
using Examine;

namespace Niras.Web.Controllers
{
	public class RelatedMediaController : SurfaceController
	{
		[OutputCache(Duration = 1)]
		public ActionResult GetPaged(RelatedMedia model)
		{
			// Don't inherits RelatedMedia from first post
			ModelState.Clear();

			var viewModel = new RelatedMedia()
			{
				Id = model.Id,
				ItemsPerPage = model.ItemsPerPage <= 0 ? 5 : model.ItemsPerPage,
				Page = model.Page <= 0 ? 1 : model.Page,
				Properties = model.Properties,
				Tags = model.Tags,
				Exclude = model.Exclude
			};
            //var excludes = new List<string>();
            var excludes = viewModel.Exclude.Select(x => x.ToString()).ToList();
			excludes.Add(CurrentPage.Id.ToString());

			var searcher = ExamineManager.Instance.SearchProviderCollection["ExternalSearcher"];
			var creteria = searcher.CreateSearchCriteria();
            var query = creteria.GroupedOr(viewModel.Properties, viewModel.Tags.Select(x => x.Id.ToString()).ToArray())
                .Not()
                .GroupedOr(new string[] { "id" }, excludes.ToArray());

            var searchResult = Umbraco.TypedSearch(query.Compile(), searcher);
			LogHelper.Debug<RelatedMediaController>("Searched with: {0}\nGot content: {1}",
				() => query.ToString(),
				() => string.Join(",", searchResult.Select(x => x.Id).ToArray())
			);

			var result = searchResult.Skip(viewModel.Skips)
				.Take(viewModel.ItemsPerPage)
				.Select(x => new MediaListItem(x));

			viewModel.Result = result.ToList();
			viewModel.Page = viewModel.Page + 1;
			viewModel.TotalPages = Math.Ceiling((decimal)searchResult.Count() / viewModel.ItemsPerPage);

			return PartialView("~/Views/Partials/Shared/_RelatedMedia.cshtml", viewModel);
		}
	}
}

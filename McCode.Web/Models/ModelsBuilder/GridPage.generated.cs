//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.5.96
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace McCode.Web.Models.ModelsBuilder
{
	/// <summary>Grid Side</summary>
	[PublishedContentModel("gridPage")]
	public partial class GridPage : PublishedContentModel, ICompositionOpenGraph, ICompositionPageHeader, ICompositionSeoChecker, ICompositionUmbracoProperties, ISidebar
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "gridPage";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public GridPage(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<GridPage, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Layout
		///</summary>
		[ImplementPropertyType("layout")]
		public Newtonsoft.Json.Linq.JToken Layout
		{
			get { return this.GetPropertyValue<Newtonsoft.Json.Linq.JToken>("layout"); }
		}

		///<summary>
		/// #Description: A one to two sentence description of your object.
		///</summary>
		[ImplementPropertyType("ogDescription")]
		public string OgDescription
		{
			get { return CompositionOpenGraph.GetOgDescription(this); }
		}

		///<summary>
		/// #Images: An image/images which should represent your object within the graph.
		///</summary>
		[ImplementPropertyType("ogImages")]
		public IEnumerable<IPublishedContent> OgImages
		{
			get { return CompositionOpenGraph.GetOgImages(this); }
		}

		///<summary>
		/// #Title: The title of your object as it should appear within the graph, e.g., "The Rock". See http://ogp.me/
		///</summary>
		[ImplementPropertyType("ogTitle")]
		public string OgTitle
		{
			get { return CompositionOpenGraph.GetOgTitle(this); }
		}

		///<summary>
		/// #Type: See http://ogp.me/#types for exsamples
		///</summary>
		[ImplementPropertyType("ogType")]
		public string OgType
		{
			get { return CompositionOpenGraph.GetOgType(this); }
		}

		///<summary>
		/// #Article Type
		///</summary>
		[ImplementPropertyType("articleType")]
		public string ArticleType
		{
			get { return CompositionPageHeader.GetArticleType(this); }
		}

		///<summary>
		/// #Witten By
		///</summary>
		[ImplementPropertyType("author")]
		public string Author
		{
			get { return CompositionPageHeader.GetAuthor(this); }
		}

		///<summary>
		/// #Date
		///</summary>
		[ImplementPropertyType("date")]
		public DateTime Date
		{
			get { return CompositionPageHeader.GetDate(this); }
		}

		///<summary>
		/// #Headline
		///</summary>
		[ImplementPropertyType("headline")]
		public string Headline
		{
			get { return CompositionPageHeader.GetHeadline(this); }
		}

		///<summary>
		/// #Image
		///</summary>
		[ImplementPropertyType("heroImage")]
		public IEnumerable<IPublishedContent> HeroImage
		{
			get { return CompositionPageHeader.GetHeroImage(this); }
		}

		///<summary>
		/// #Image Text
		///</summary>
		[ImplementPropertyType("imageText")]
		public string ImageText
		{
			get { return CompositionPageHeader.GetImageText(this); }
		}

		///<summary>
		/// #Lead
		///</summary>
		[ImplementPropertyType("lead")]
		public string Lead
		{
			get { return CompositionPageHeader.GetLead(this); }
		}

		///<summary>
		/// #Trompet
		///</summary>
		[ImplementPropertyType("trompet")]
		public string Trompet
		{
			get { return CompositionPageHeader.GetTrompet(this); }
		}

		///<summary>
		/// #Meta-description: Meta description tags, while not important to search engine rankings, are extremely important in gaining user click-through from SERPs. These short paragraphs are a webmaster’s opportunity to advertise content to searchers and to let them know exactly whether the given page contains the information they're looking for.
		///</summary>
		[ImplementPropertyType("metaDescription")]
		public string MetaDescription
		{
			get { return CompositionSeoChecker.GetMetaDescription(this); }
		}

		///<summary>
		/// #Page Title: Title tags—technically called title elements—define the title of a document. Title tags are often used on search engine results pages (SERPs) to display preview snippets for a given page, and are important both for SEO and social sharing.
		///</summary>
		[ImplementPropertyType("pageTitle")]
		public string PageTitle
		{
			get { return CompositionSeoChecker.GetPageTitle(this); }
		}

		///<summary>
		/// #Checker
		///</summary>
		[ImplementPropertyType("seoChecker")]
		public string SeoChecker
		{
			get { return CompositionSeoChecker.GetSeoChecker(this); }
		}

		///<summary>
		/// #umbracoInternalRedirectId: #umbracoInternalRedirectId_desc
		///</summary>
		[ImplementPropertyType("umbracoInternalRedirectId")]
		public IPublishedContent UmbracoInternalRedirectId
		{
			get { return CompositionUmbracoProperties.GetUmbracoInternalRedirectId(this); }
		}

		///<summary>
		/// #umbracoNaviHide: #umbracoNaviHide_desc
		///</summary>
		[ImplementPropertyType("umbracoNaviHide")]
		public bool UmbracoNaviHide
		{
			get { return CompositionUmbracoProperties.GetUmbracoNaviHide(this); }
		}

		///<summary>
		/// #umbracoRedirect: #umbracoRedirect_desc
		///</summary>
		[ImplementPropertyType("umbracoRedirect")]
		public IPublishedContent UmbracoRedirect
		{
			get { return CompositionUmbracoProperties.GetUmbracoRedirect(this); }
		}

		///<summary>
		/// #umbracoUrlAlias: #umbracoUrlAlias_desc
		///</summary>
		[ImplementPropertyType("umbracoUrlAlias")]
		public string UmbracoUrlAlias
		{
			get { return CompositionUmbracoProperties.GetUmbracoUrlAlias(this); }
		}

		///<summary>
		/// #umbracoUrlName: #umbracoUrlName_desc
		///</summary>
		[ImplementPropertyType("umbracoUrlName")]
		public string UmbracoUrlName
		{
			get { return CompositionUmbracoProperties.GetUmbracoUrlName(this); }
		}

		///<summary>
		/// #Headline
		///</summary>
		[ImplementPropertyType("sidebarHeadline")]
		public string SidebarHeadline
		{
			get { return Sidebar.GetSidebarHeadline(this); }
		}

		///<summary>
		/// Layout
		///</summary>
		[ImplementPropertyType("sidebarLayout")]
		public IEnumerable<IPublishedContent> SidebarLayout
		{
			get { return Sidebar.GetSidebarLayout(this); }
		}
	}
}

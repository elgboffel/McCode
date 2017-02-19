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
	/// <summary>Oversigtsside</summary>
	[PublishedContentModel("landingpage")]
	public partial class Landingpage : PublishedContentModel, ICompositionOpenGraph, ICompositionSeoChecker, ICompositionSimplePageHeader, ICompositionUmbracoProperties
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "landingpage";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public Landingpage(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Landingpage, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
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
		/// #Headline
		///</summary>
		[ImplementPropertyType("headline")]
		public string Headline
		{
			get { return CompositionSimplePageHeader.GetHeadline(this); }
		}

		///<summary>
		/// #Lead
		///</summary>
		[ImplementPropertyType("lead")]
		public string Lead
		{
			get { return CompositionSimplePageHeader.GetLead(this); }
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
	}
}

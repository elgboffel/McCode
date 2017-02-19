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
	// Mixin content Type 1133 with alias "compositionPageHeader"
	/// <summary>Page Header</summary>
	public partial interface ICompositionPageHeader : IPublishedContent
	{
		/// <summary>#Article Type</summary>
		string ArticleType { get; }

		/// <summary>#Witten By</summary>
		string Author { get; }

		/// <summary>#Date</summary>
		DateTime Date { get; }

		/// <summary>#Headline</summary>
		string Headline { get; }

		/// <summary>#Image</summary>
		IEnumerable<IPublishedContent> HeroImage { get; }

		/// <summary>#Image Text</summary>
		string ImageText { get; }

		/// <summary>#Lead</summary>
		string Lead { get; }

		/// <summary>#Trompet</summary>
		string Trompet { get; }
	}

	/// <summary>Page Header</summary>
	[PublishedContentModel("compositionPageHeader")]
	public partial class CompositionPageHeader : PublishedContentModel, ICompositionPageHeader
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "compositionPageHeader";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public CompositionPageHeader(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<CompositionPageHeader, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// #Article Type
		///</summary>
		[ImplementPropertyType("articleType")]
		public string ArticleType
		{
			get { return GetArticleType(this); }
		}

		/// <summary>Static getter for #Article Type</summary>
		public static string GetArticleType(ICompositionPageHeader that) { return that.GetPropertyValue<string>("articleType"); }

		///<summary>
		/// #Witten By
		///</summary>
		[ImplementPropertyType("author")]
		public string Author
		{
			get { return GetAuthor(this); }
		}

		/// <summary>Static getter for #Witten By</summary>
		public static string GetAuthor(ICompositionPageHeader that) { return that.GetPropertyValue<string>("author"); }

		///<summary>
		/// #Date
		///</summary>
		[ImplementPropertyType("date")]
		public DateTime Date
		{
			get { return GetDate(this); }
		}

		/// <summary>Static getter for #Date</summary>
		public static DateTime GetDate(ICompositionPageHeader that) { return that.GetPropertyValue<DateTime>("date"); }

		///<summary>
		/// #Headline
		///</summary>
		[ImplementPropertyType("headline")]
		public string Headline
		{
			get { return GetHeadline(this); }
		}

		/// <summary>Static getter for #Headline</summary>
		public static string GetHeadline(ICompositionPageHeader that) { return that.GetPropertyValue<string>("headline"); }

		///<summary>
		/// #Image
		///</summary>
		[ImplementPropertyType("heroImage")]
		public IEnumerable<IPublishedContent> HeroImage
		{
			get { return GetHeroImage(this); }
		}

		/// <summary>Static getter for #Image</summary>
		public static IEnumerable<IPublishedContent> GetHeroImage(ICompositionPageHeader that) { return that.GetPropertyValue<IEnumerable<IPublishedContent>>("heroImage"); }

		///<summary>
		/// #Image Text
		///</summary>
		[ImplementPropertyType("imageText")]
		public string ImageText
		{
			get { return GetImageText(this); }
		}

		/// <summary>Static getter for #Image Text</summary>
		public static string GetImageText(ICompositionPageHeader that) { return that.GetPropertyValue<string>("imageText"); }

		///<summary>
		/// #Lead
		///</summary>
		[ImplementPropertyType("lead")]
		public string Lead
		{
			get { return GetLead(this); }
		}

		/// <summary>Static getter for #Lead</summary>
		public static string GetLead(ICompositionPageHeader that) { return that.GetPropertyValue<string>("lead"); }

		///<summary>
		/// #Trompet
		///</summary>
		[ImplementPropertyType("trompet")]
		public string Trompet
		{
			get { return GetTrompet(this); }
		}

		/// <summary>Static getter for #Trompet</summary>
		public static string GetTrompet(ICompositionPageHeader that) { return that.GetPropertyValue<string>("trompet"); }
	}
}

/**
 * Created by PY028031 on 11/10/2016.
 */
import itemData from "../data/item-data";
import i18n from "../i18n/en-us";
import moment from "moment";

const MODULE_SERVICES = "app.services";

class dataService {
    constructor(AppConstants) {
        "ngInject";
        this._AppConstants = AppConstants;
        this.itemCatalogEntryData = itemData.CatalogEntryView[0]; //Will be calling http service or in real world to fetch this data.
    }
    /**
     * Retrieves the product title to be shown in the front end.
     * @returns {String} String containing the product title information.
     */
    getTitle() {
        return this.itemCatalogEntryData.title;
    };
    /**
     * Retrieves the product title to be shown in the front end.
     * @returns {Object} The object containing the data to show product carousel.
     */
    getProductCarouselData() {
        let productImages = this.itemCatalogEntryData.Images[0].AlternateImages;
        productImages.forEach(function(oInvtImg, iIndx) { //Some of the teams I worked with prefer hungarian style of variable declaring.
            oInvtImg.id = iIndx;
        });

        return {
            myInterval: this._AppConstants.carouselInterval,
            noWrapSlides: this._AppConstants.wrapSlides,
            active: this._AppConstants.activeCarouselIndex,
            productImages: productImages
        };
    };
    /**
     * Retrieves the product title to be shown in the front end.
     * @returns {Object} The object containing the data to show product overall review information.
     */
    getOverallReviewData() {
        let totalReviews = this.itemCatalogEntryData.CustomerReview[0].totalReviews;
        return {
            productReviewOverall: i18n.overAllText,
            productMaxRating: this._AppConstants.productMaxRating,
            productConsolidatedOverallRating: this.itemCatalogEntryData.CustomerReview[0].consolidatedOverallRating,
            productViewAllRatingsText: eval("`"+ i18n.viewAllRatingsText +"`")
        };
    };
    /**
     * Retrieves the product customer review data.
     * @returns {Object} The object containing the data to show product pro/con review data.
     */
    getProductReviewData() {
        let customerReview = this.itemCatalogEntryData.CustomerReview[0];
        return {
            productMaxRating: this._AppConstants.productMaxRating,
            proHeading: i18n.proHeading,
            conHeading: i18n.conHeading,
            proText: i18n.proText,
            conText: i18n.conText,
            productProRating: customerReview.Pro[0].overallRating,
            productProTitle: customerReview.Pro[0].title,
            productProText: customerReview.Pro[0].review,
            productProDate: moment(customerReview.Pro[0].datePosted).format(i18n.shortDateFormat),
            productProPostedBy: customerReview.Pro[0].screenName,
            productConRating: customerReview.Con[0].overallRating,
            productConTitle: customerReview.Con[0].title,
            productConText: customerReview.Con[0].review,
            productConDate: moment(customerReview.Con[0].datePosted).format(i18n.shortDateFormat),
            productConPostedBy: customerReview.Con[0].screenName
        };
    };
    /**
     * Retrieves the product details data.
     * @returns {Object} The object containing the data to show product details.
     */
    getProductDetailsData() {
        let productPromotionsList = [];
        let purchasingChannelCode = Number.parseInt(this.itemCatalogEntryData.purchasingChannelCode);

        this.itemCatalogEntryData.Promotions.forEach(function(promotion) {
            productPromotionsList.push({shortDescription: promotion.Description[0].shortDescription});
        });

        return {
            offerPrice: this.itemCatalogEntryData.Offers[0].OfferPrice[0],
            productPromotions: productPromotionsList,
            quantity: i18n.quantityText,
            productQuanties: [...Array(100).keys()].map(index => ++index),
            quantitySelected: this._AppConstants.initialQuantitySelected,
            pickUpInStore: i18n.pickUpText,
            addToCart: i18n.addToCartText,
            showPickUpInStore: (purchasingChannelCode === 0 || purchasingChannelCode === 2),
            showAddToCart: (purchasingChannelCode === 0 || purchasingChannelCode === 1),
            returns: i18n.returnsText,
            returnsDescription: i18n.returnsDescription,
            addToRegistry: i18n.addToRegistry,
            addToList: i18n.addToList,
            share: i18n.share,
            productHighlighs: i18n.productHighlightsText,
            productDescriptions: this.itemCatalogEntryData.ItemDescription[0].features
        };
    };
};

angular.module(MODULE_SERVICES, [])
    .service("dataService", dataService);

export default MODULE_SERVICES;
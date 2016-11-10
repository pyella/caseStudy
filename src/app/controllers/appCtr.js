/**
 * Created by PY028031 on 11/5/2016.
 */

import itemData from "../data/item-data";
import i18n from "../i18n/en-us";
import moment from "moment";

const MODULE_CONTROLLERS = "app.controllers";
class AppCtrl {
    constructor($scope) {
        'ngInject';
        this.title = itemData.CatalogEntryView[0].title;

        let productImages = itemData.CatalogEntryView[0].Images[0].AlternateImages;
        productImages.forEach(function(oInvtImg, iIndx) {
            oInvtImg.id = iIndx;
        });

        this.productCarouselData = {
            myInterval: 5000,
            noWrapSlides: false,
            active: 0,
            productImages: productImages
        };

        let totalReviews = itemData.CatalogEntryView[0].CustomerReview[0].totalReviews;
        this.productReviewOverallData = {
            productReviewOverall: i18n.overAllText,
            productMaxRating: 5,
            productConsolidatedOverallRating: itemData.CatalogEntryView[0].CustomerReview[0].consolidatedOverallRating,
            productViewAllRatingsText: eval("`"+ i18n.viewAllRatingsText +"`")
        };

        this.productReviewData = {
            productMaxRating: 5,
            proHeading: i18n.proHeading,
            conHeading: i18n.conHeading,
            proText: i18n.proText,
            conText: i18n.conText,
            productProRating: itemData.CatalogEntryView[0].CustomerReview[0].Pro[0].overallRating,
            productProTitle: itemData.CatalogEntryView[0].CustomerReview[0].Pro[0].title,
            productProText: itemData.CatalogEntryView[0].CustomerReview[0].Pro[0].review,
            productProDate: moment(itemData.CatalogEntryView[0].CustomerReview[0].Pro[0].datePosted).format(i18n.shortDateFormat),
            productProPostedBy: itemData.CatalogEntryView[0].CustomerReview[0].Pro[0].screenName,
            productConRating: itemData.CatalogEntryView[0].CustomerReview[0].Con[0].overallRating,
            productConTitle: itemData.CatalogEntryView[0].CustomerReview[0].Con[0].title,
            productConText: itemData.CatalogEntryView[0].CustomerReview[0].Con[0].review,
            productConDate: moment(itemData.CatalogEntryView[0].CustomerReview[0].Con[0].datePosted).format(i18n.shortDateFormat),
            productConPostedBy: itemData.CatalogEntryView[0].CustomerReview[0].Con[0].screenName
        };

        let data = [];
        let purchasingChannelCode = Number.parseInt(itemData.CatalogEntryView[0].purchasingChannelCode);

        itemData.CatalogEntryView[0].Promotions.forEach(function(promotion) {
            data.push({shortDescription: promotion.Description[0].shortDescription});
        });

        this.productDetailsData = {
            offerPrice: itemData.CatalogEntryView[0].Offers[0].OfferPrice[0],
            productPromotions: data,
            quantity: i18n.quantityText,
            productQuanties: [...Array(100).keys()].map(index => ++index),
            quantitySelected: 0,
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
            productDescriptions: itemData.CatalogEntryView[0].ItemDescription[0].features
        }
    }
};

angular.module(MODULE_CONTROLLERS, [])
    .controller('AppCtrl', AppCtrl);

export default MODULE_CONTROLLERS;

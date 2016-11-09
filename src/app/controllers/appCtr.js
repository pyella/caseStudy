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
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.active = 0;
        this.title = itemData.CatalogEntryView[0].title;

        this.productStatus = itemData.CatalogEntryView[0].productStatus;
        this.productImages = itemData.CatalogEntryView[0].Images[0].AlternateImages;

        this.productImages.forEach(function(oInvtImg, iIndx) {
            oInvtImg.id = iIndx;
        });
        this.offerPrice = itemData.CatalogEntryView[0].Offers[0].OfferPrice[0];


        var data = [];

        itemData.CatalogEntryView[0].Promotions.forEach(function(promotion) {
            data.push({shortDescription: promotion.Description[0].shortDescription});
        });

        this.productPromotions = data;

        this.quantity = i18n.quantityText;
        this.productQuanties = [...Array(100).keys()].map(index => ++index);
        this.quantitySelected = 0;

        this.pickUpInStore = i18n.pickUpText;
        this.addToCart = i18n.addToCartText;
        let purchasingChannelCode = Number.parseInt(itemData.CatalogEntryView[0].purchasingChannelCode);
        this.showPickUpInStore = (purchasingChannelCode === 0 || purchasingChannelCode === 2);
        this.showAddToCart = (purchasingChannelCode === 0 || purchasingChannelCode === 1);

        this.returns = i18n.returnsText;
        this.returnsDescription = i18n.returnsDescription;

        this.addToRegistry = i18n.addToRegistry;
        this.addToList = i18n.addToList;
        this.share = i18n.share;

        this.productHighlighs = i18n.productHighlightsText;
        this.productDescriptions = itemData.CatalogEntryView[0].ItemDescription[0].features;

        this.productReviewOverall = i18n.overAllText;
        this.productMaxRating = 5;
        this.productConsolidatedOverallRating = itemData.CatalogEntryView[0].CustomerReview[0].consolidatedOverallRating;

        let totalReviews = itemData.CatalogEntryView[0].CustomerReview[0].totalReviews;

        this.productViewAllRatingsText = eval("`"+ i18n.viewAllRatingsText +"`");

        this.proHeading = i18n.proHeading;
        this.conHeading = i18n.conHeading;
        this.proText = i18n.proText;
        this.conText = i18n.conText;

        this.productProRating = itemData.CatalogEntryView[0].CustomerReview[0].Pro[0].overallRating;
        this.productProTitle = itemData.CatalogEntryView[0].CustomerReview[0].Pro[0].title;
        this.productProText = itemData.CatalogEntryView[0].CustomerReview[0].Pro[0].review;
        this.productProDate = moment(itemData.CatalogEntryView[0].CustomerReview[0].Pro[0].datePosted).format(i18n.shortDateFormat);
        this.productProPostedBy = itemData.CatalogEntryView[0].CustomerReview[0].Pro[0].screenName;
        this.productConRating = itemData.CatalogEntryView[0].CustomerReview[0].Con[0].overallRating;
        this.productConTitle = itemData.CatalogEntryView[0].CustomerReview[0].Con[0].title;
        this.productConText = itemData.CatalogEntryView[0].CustomerReview[0].Con[0].review;

        this.productConDate = moment(itemData.CatalogEntryView[0].CustomerReview[0].Con[0].datePosted).format(i18n.shortDateFormat);
        this.productConPostedBy = itemData.CatalogEntryView[0].CustomerReview[0].Con[0].screenName;
    }

    setQuantity(data) {
        this.quantitySelected = data;
    }
}

angular.module(MODULE_CONTROLLERS, [])
    .controller('AppCtrl', AppCtrl);

export default MODULE_CONTROLLERS;

/**
 * Created by PY028031 on 11/5/2016.
 */
const MODULE_CONTROLLERS = "app.controllers";

class AppCtrl {
    constructor(dataService) {
        'ngInject';
        this.title = dataService.getTitle();
        this.productCarouselData = dataService.getProductCarouselData();
        this.productReviewOverallData = dataService.getOverallReviewData();
        this.productReviewData = dataService.getProductReviewData();
        this.productDetailsData = dataService.getProductDetailsData();
    };
};

angular.module(MODULE_CONTROLLERS, [])
    .controller('AppCtrl', AppCtrl);

export default MODULE_CONTROLLERS;

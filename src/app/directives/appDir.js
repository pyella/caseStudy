/**
 * Created by PY028031 on 11/5/2016.
 */
const MODULE_DIRECTIVES = "app.directives";

import productReview from "./productReview";
import productOverAllReview from "./productReviewOverall";
import productCarousel from "./productCarousel";
import productDetail from "./productDetail";

let app = () => {
    return {
        template: require('../app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

angular.module(MODULE_DIRECTIVES, [])
    .directive("app", app)
    .directive("productReview", productReview)
    .directive("productOverallReview", productOverAllReview)
    .directive("productCarousel", productCarousel)
    .directive("productDetail", productDetail);

export default MODULE_DIRECTIVES;
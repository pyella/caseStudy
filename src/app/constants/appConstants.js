/**
 * Created by PY028031 on 11/10/2016.
 */

const MODULE_CONSTANTS = "app.constants";
const AppConstants = {
    carouselInterval: 5000,
    wrapSlides: false,
    activeCarouselIndex: 0,
    productMaxRating: 5,
    initialQuantitySelected: 0
};

angular.module(MODULE_CONSTANTS, [])
.constant("AppConstants", AppConstants);

export default MODULE_CONSTANTS;
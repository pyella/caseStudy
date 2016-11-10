/**
 * Created by PY028031 on 11/10/2016.
 */


let productCarousel = () => {
    return {
        restrict: "E",
        template: require('../html/productCarouselTemplate.html'),
        scope: {
            productCarouselData: "="
        }
    }
};

export default  productCarousel;
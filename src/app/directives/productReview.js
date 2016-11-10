/**
 * Created by PY028031 on 11/10/2016.
 */


let productReview = () => {
    return {
        restrict: "E",
        template: require('../html/productReviewTemplate.html'),
        scope: {
            productReviewData: "="
        }
    }
};

export default productReview;
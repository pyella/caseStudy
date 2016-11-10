/**
 * Created by PY028031 on 11/10/2016.
 */

let productReviewOverAll = () => {
    return {
        restrict: "E",
        template: require('../html/productReviewOverallTemplate.html'),
        scope: {
            productOverallReviewData: "="
        }
    }
};

export default productReviewOverAll;

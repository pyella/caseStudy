/**
 * Created by PY028031 on 11/10/2016.
 */

let productDetail = () => {
    return {
        restrict: "E",
        template: require("../html/productDetailTemplate.html"),
        scope: {
            productDetailData: "=",
            onSelect: "&"
        },
        link: (scope) => {
            scope.setQuantity = (event, newQuantity) => {
                event.preventDefault();
                scope.productDetailData.quantitySelected = newQuantity;
            }
        }
    }
};

export default  productDetail;
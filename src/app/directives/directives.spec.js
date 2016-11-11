/**
 * Created by PY028031 on 11/11/2016.
 */
import app from '../app';
import appCtrl from "../controllers/appCtr";
import appDir from "./appDir";
import productCarousel from "./productCarousel";

describe("directives", () => {
    let dataService;
    let element;
    let $compile;
    let $scope;

    beforeEach(() => {
        angular.mock.module(app);
        angular.mock.module(appCtrl);
        angular.mock.module(appDir);

        angular.mock.inject(($injector, _$compile_, _$rootScope_) => {
            dataService  = $injector.get("dataService");
            $compile = _$compile_;
            $scope = _$rootScope_.$new();
        });
    });

    describe("app dir", () => {
        it("should be associated with AppCtrl", () => {
            spyOn(dataService, "getTitle");
            spyOn(dataService, "getProductCarouselData");
            spyOn(dataService, "getOverallReviewData");
            spyOn(dataService, "getProductReviewData");
            spyOn(dataService, "getProductDetailsData");
            element = angular.element('<app></app>');
            element = $compile(element)($scope);
            $scope.$digest();
            expect(element.scope().app).toBeDefined();//controller alias name is app.
        });
    });

    describe("productCarousel dir", () => {
        it("should be able to display images", () => {
            element = angular.element('<product-carousel product-carousel-data="productCarouselData"></product-carousel>');
            $scope.productCarouselData = dataService.getProductCarouselData();
            element = $compile(element)($scope);
            $scope.$digest();
            expect(element).toBeDefined();
            expect(element.find("img")).toEqual(jasmine.any(Object));
        });
    });

    describe("productReviewOverall dir", () => {
        it("should be able to display data for all ratings", () => {
            element = angular.element('<product-overall-review product-overall-review-data="productReviewOverallData"></product-overall-review>');
            $scope.productReviewOverallData = {productConsolidatedOverallRating: 4, productMaxRating: 5, productReviewOverall: "overall", productViewAllRatingsText: "view all 14 ratings" };
            element = $compile(element)($scope);
            $scope.$digest();
            expect(element).toBeDefined();
            expect(angular.element(element.find("strong")[0].innerHTML)[0].innerHTML).toBe($scope.productReviewOverallData.productReviewOverall);
            expect(angular.element(element.find("strong")[1].innerHTML)[0].innerHTML).toBe($scope.productReviewOverallData.productViewAllRatingsText);
        });
    });

    describe("productReview dir", () => {
        it("should be able to display data for pro and con ratings", () => {
            element = angular.element('<product-review product-review-data = "productReviewData"></product-review>');
            $scope.productReviewData = {productMaxRating:"test",proHeading:"test",conHeading:"test",proText: "test",conText:"test",productProRating: "test",productProTitle:"test",productProText: "test",productProDate:"test",productProPostedBy:"test",productConRating:"test",productConTitle:"test",productConText:"test",productConDate:"test",productConPostedBy:"test"};
            element = $compile(element)($scope);
            $scope.$digest();
            expect(element.find("h3")[0].innerHTML).toBe($scope.productReviewData.proHeading);
            expect(element.find("h3")[1].innerHTML).toBe($scope.productReviewData.conHeading);
        });
    });

    describe("productDetail dir", () => {
        it("should be able to display data to show product details and has ability to change quantity", () => {
            element = angular.element('<product-detail product-detail-data="productDetailsData"></product-detail>');
            $scope.productDetailsData = {offerPrice:"test",productPromotions:"test",quantity:"test",productQuanties:[0,1,2],quantitySelected: 0,pickUpInStore:"test",addToCart: "Add to cart",showPickUpInStore:true,showAddToCart:true,returns:"test",returnsDescription:"test",addToRegistry:"test",addToList:"test",share:"test",productHighlighs:"test",productDescriptions:"test"};
            element = $compile(element)($scope);
            $scope.$digest();

            let dirScopeObj = element.scope().$$childTail;
            expect(element).toBeDefined();
            dirScopeObj.setQuantity(document.createEvent("MouseEvent"), 10);
            expect($scope.productDetailsData.quantitySelected).toBe(10);
            expect(element[0].innerHTML).toContain($scope.productDetailsData.addToCart);
        });
    });
});

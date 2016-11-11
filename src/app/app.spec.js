import app from './app';
import appCtrl from "./controllers/appCtr";
import i18n from "./i18n/en-us";

describe('app', () => {
  describe('AppCtrl', () => {
    let apptCtrl;
    let dataService;

    let productTitle = "Product Title";
    let productCarouselData = {
      myInterval: 500,
      noWrapSlides: false,
      active: true,
      productImages: []
    };
    let productOverAllReviewData = {
      productReviewOverall: i18n.overAllText,
      productMaxRating: 5,
      productConsolidatedOverallRating: 4,
      productViewAllRatingsText: "Overall 14 reviews"
    };
    let productReviewData = {
      productMaxRating: 5,
      proHeading: i18n.proHeading,
      conHeading: i18n.conHeading,
      proText: i18n.proText,
      conText: i18n.conText,
      productProRating: 4,
      productProTitle: "PRO",
      productProText: "Very good",
      productProDate: "",
      productProPostedBy: "Tester",
      productConRating: 3,
      productConTitle: "CON",
      productConText: "Not good",
      productConDate: "",
      productConPostedBy: "Con Tester"
    };
    let productDetailsData = {
      price: "139$"
    };

    beforeEach(() => {
      angular.mock.module(app);
      angular.mock.module(appCtrl);

      angular.mock.inject(($injector, $controller) => {
        dataService = $injector.get("dataService");
        spyOn(dataService, "getTitle").and.returnValue(productTitle);
        spyOn(dataService, "getProductCarouselData").and.returnValue(productCarouselData);
        spyOn(dataService, "getOverallReviewData").and.returnValue(productOverAllReviewData);
        spyOn(dataService, "getProductReviewData").and.returnValue(productReviewData);
        spyOn(dataService, "getProductDetailsData").and.returnValue(productDetailsData);
        apptCtrl = $controller('AppCtrl', {"dataService": dataService});
      });
    });

    it("Should set controller properties based on service returned data", () => {
      expect(apptCtrl.title).toBe(productTitle);
      expect(apptCtrl.productCarouselData).toBe(productCarouselData);
      expect(apptCtrl.productReviewOverallData).toBe(productOverAllReviewData);
      expect(apptCtrl.productReviewData).toBe(productReviewData);
      expect(apptCtrl.productDetailsData).toBe(productDetailsData);
    });
  });
});
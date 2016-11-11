/**
 * Created by PY028031 on 11/11/2016.
 */

import app from '../app';
import i18n from "../i18n/en-us";
import itemData from "../data/item-data";


describe("appService", () => {
    let dataService;
    beforeEach(() => {
        angular.mock.module(app);

        angular.mock.inject(($injector) => {
            dataService = $injector.get("dataService");
        });
    });

    describe("getTitle method", () => {
        it("should be defined", () => {
            expect(dataService.getTitle).toBeDefined();
        });
        it("should return the title", () => {
            expect(dataService.getTitle()).toBe(itemData.CatalogEntryView[0].title);
        });
    });

    describe("getProductCarouselData method", () => {
        it("should be defined", () => {
            expect(dataService.getProductCarouselData).toBeDefined();
        });
        it("should return the product carousel data", () => {
            expect(dataService.getProductCarouselData()).toEqual(jasmine.any(Object));
        });
    });

    describe("getProductReviewData method", () => {
        it("should be defined", () => {
            expect(dataService.getProductReviewData).toBeDefined();
        });
        xit("should return the product review data", () => {
            expect(dataService.getProductReviewData()).toEqual(jasmine.any(Object));
        });
    });

    describe("getOverallReviewData method", () => {
        it("should be defined", () => {
            expect(dataService.getOverallReviewData).toBeDefined();
        });
        xit("should return the overall revie details", () => {
            expect(dataService.getOverallReviewData()).toEqual(jasmine.any(Object));
        });
    });

    describe("getProductDetailsData method", () => {
        it("should be defined", () => {
            expect(dataService.getProductDetailsData).toBeDefined();
        });
        xit("should return the product details data", () => {
            expect(dataService.getProductDetailsData()).toEqual(jasmine.any(Object));
        });
    });
});

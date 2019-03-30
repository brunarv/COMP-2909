import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('myapp App', function() {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('Testing one element by tag name.', () => {
        page.navigateTo();
        let headerElement = element(by.tagName("h1"));
        expect(headerElement.getText()).toEqual("Morning Show");
    });

    it('Testing a list of items.', () => {
        // Get list of elements.
        let elements = element.all(by.tagName("li"));
        expect(elements.count()).toEqual(3);

        // Check text of first element.
        expect(elements.get(0).getText()).toEqual("Johnny");
    })

    // Do more testing once the count has been determined.
    function ProcessPromiseResults(elements, originalCount) {
        expect(elements.count()).toEqual(originalCount);
        console.log("The count is: " + originalCount);
        expect(elements.get(0).getText()).toEqual("Johnny");
        expect(elements.get(originalCount - 1).getText()).toEqual("Nira")
    }

    it('Dynamically count items.', function () {
        let elements = element.all(by.tagName("li"));

        // Set up a promise to retrieve the actual count value.
        // Wait for the result and then process it.
        elements.count().then(function (originalCount) {
            ProcessPromiseResults(elements, originalCount)
        });
    });

});

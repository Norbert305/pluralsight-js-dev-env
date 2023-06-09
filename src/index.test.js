import { expect } from "chai";

describe('Our first test', () => {
    it("Should pass", () => {
        expect(true).to.equal(true);
    })
});


describe("index.html", () => {
    it('should have h1 that says Users', (done) => {
        const index = fs.readFileSync("./src/index.html", "utf-8")
        const {JSDOM} = jsdom;
        const dom = new JSDOM(index, {})
        const h1 = dom.window.document.getElementsByTagName("h1")[0];
        expect(h1.textContent).to.equal("Users");
        dom.window.close();
    })
});
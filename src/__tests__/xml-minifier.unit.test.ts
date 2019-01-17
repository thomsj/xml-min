import { XmlMinifier } from "../xml-minifier";

describe("XmlMinifier", () => {
  describe("#minify()", () => {
    test("returns input, unmodified", () => {
      const input = `<foo>bar</foo>`;
      const actual = new XmlMinifier(input).minify();
      expect(actual).toBe(input);
    });

    test("removes comments", () => {
      const xml = "<!--comment-->";
      const actual = new XmlMinifier(xml).minify();
      expect(actual).toBe("");
    });
  });
});

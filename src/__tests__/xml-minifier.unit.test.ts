import { XmlMinifier } from "../xml-minifier";

describe("XmlMinifier", () => {
  describe("#minify()", () => {
    test("returns input, unmodified", () => {
      const input = `<foo>bar</foo>`;
      const actual = new XmlMinifier(input).minify();
      expect(actual).toBe(input);
    });
  });
});

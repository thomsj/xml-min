import { Options } from "../options";
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

    test("removes whitespace", () => {
      const xml = `
<foo  baz  =  "a"  >
  <bar  baz   =   "   b   "   />
</foo   >`;

      const expected = `<foo baz="a"><bar baz="   b   "/></foo>`;
      const actual = new XmlMinifier(xml).minify();
      expect(actual).toBe(expected);
    });

    test("indents resultant XML when desired", () => {
      const xml = "<foo><bar/></foo>";
      const options: Options = { spaces: 2 };

      // prettier-ignore
      const expected =
`<foo>
  <bar/>
</foo>`;

      const actual = new XmlMinifier(xml, options).minify();
      expect(actual).toBe(expected);
    });
  });
});

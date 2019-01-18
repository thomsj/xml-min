import { Element } from "xml-js";
import { Options } from "../options";
import * as XmlJsConverter from "../xml-js-converter";

describe("XmlJsConverter", () => {
  describe(".toJsFrom()", () => {
    test("converts XML string to JS object", () => {
      const xml = "<foo></foo>";

      const expected: Element = {
        elements: [
          {
            name: "foo",
            type: "element",
          },
        ],
      };

      const actual = XmlJsConverter.toJsFrom(xml);
      expect(actual).toEqual(expected);
    });

    test("ignores comments", () => {
      const xml = "<!--comment-->";
      const expected: Element = {};

      const actual = XmlJsConverter.toJsFrom(xml);
      expect(actual).toEqual(expected);
    });
  });

  describe(".toXmlFrom()", () => {
    test("converts JS object to XML string", () => {
      const js: Element = {
        elements: [
          {
            name: "foo",
            type: "element",
          },
        ],
      };

      const expected = "<foo/>";
      const actual = XmlJsConverter.toXmlFrom(js);
      expect(actual).toBe(expected);
    });

    test("returns empty string when given empty object", () => {
      const js: Element = {};
      const actual = XmlJsConverter.toXmlFrom(js);
      expect(actual).toBe("");
    });

    test("indents resultant XML when desired", () => {
      const js: Element = {
        elements: [
          {
            name: "foo",
            type: "element",

            // tslint:disable-next-line:object-literal-sort-keys
            elements: [
              {
                name: "bar",
                type: "element",
              },
            ],
          },
        ],
      };

      const options: Options = { spaces: 2 };

      // prettier-ignore
      const expected =
`<foo>
  <bar/>
</foo>`;

      const actual = XmlJsConverter.toXmlFrom(js, options);
      expect(actual).toBe(expected);
    });
  });
});

import { Element } from "xml-js";
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
  });
});

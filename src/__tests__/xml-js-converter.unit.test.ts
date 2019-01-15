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
  });
});

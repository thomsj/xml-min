import XmlMinifier from "../index";

describe("index", () => {
  test("exports XmlMinifier", () => {
    const input = "<foo/>";
    const actual = new XmlMinifier(input).minify();
    expect(actual).toBe(input);
  });
});

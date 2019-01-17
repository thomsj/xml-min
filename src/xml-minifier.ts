import { Element } from "xml-js";
import * as XmlJsConverter from "./xml-js-converter";
export { XmlMinifier };

class XmlMinifier {
  private readonly document: Element;

  constructor(xml: string) {
    this.document = XmlJsConverter.toJsFrom(xml);
  }

  public minify(): string {
    const minifiedXml = XmlJsConverter.toXmlFrom(this.document);
    return minifiedXml;
  }
}

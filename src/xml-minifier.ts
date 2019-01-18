import { Element } from "xml-js";
import { Options } from "./options";
import * as XmlJsConverter from "./xml-js-converter";
export { XmlMinifier };

class XmlMinifier {
  private readonly document: Element;

  constructor(xml: string, private readonly options?: Options) {
    this.document = XmlJsConverter.toJsFrom(xml);
  }

  public minify(): string {
    const minifiedXml = XmlJsConverter.toXmlFrom(this.document, this.options);
    return minifiedXml;
  }
}

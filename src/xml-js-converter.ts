import { Element, xml2js } from "xml-js";
export { toJsFrom };

function toJsFrom(xml: string): Element {
  return xml2js(xml) as Element;
}

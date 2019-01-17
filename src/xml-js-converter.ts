import { Element, js2xml, xml2js } from "xml-js";
export { toJsFrom, toXmlFrom };

function toJsFrom(xml: string): Element {
  return xml2js(xml) as Element;
}

function toXmlFrom(js: Element): string {
  return js2xml(js);
}

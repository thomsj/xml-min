import { Element, js2xml, Options as XMLJSOptions, xml2js } from "xml-js";
export { toJsFrom, toXmlFrom };

function toJsFrom(xml: string): Element {
  const options: XMLJSOptions.XML2JS = {
    ignoreComment: true,
  };

  return xml2js(xml, options) as Element;
}

function toXmlFrom(js: Element): string {
  return js2xml(js);
}

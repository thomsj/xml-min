import { Element, js2xml, Options, xml2js } from "xml-js";
export { toJsFrom, toXmlFrom };

function toJsFrom(xml: string): Element {
  const options: Options.XML2JS = {
    ignoreComment: true,
  };

  return xml2js(xml, options) as Element;
}

function toXmlFrom(js: Element): string {
  return js2xml(js);
}

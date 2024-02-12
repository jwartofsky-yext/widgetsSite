import { TemplateConfig } from "@yext/pages";


export const getPath = () => {
  return `robots.txt`;
};

export const render = (): string => {
  /*
   * Return a string that will be served at robots.txt.
   * For more information about robots.txt, check out this resource: https://developers.google.com/search/docs/advanced/robots/intro
   * An emtpty robots.txt will NOT prevent any pages from being crawled.
   */

  return ``;
};

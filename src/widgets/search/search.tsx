import { Widget, WidgetConfig, WidgetModule } from "@yext/pages/*";
import * as ReactDOMServer from "react-dom/server";

export const config: WidgetConfig = {
  name: "search"
}

const Search: Widget = () => {
  console.log("hello")
  return(
    <div>
      search?
    </div>
  )
}

export const module: WidgetModule = {
  config: config, 
  default: Search
}

const render = () => {
  const viewHtml = ReactDOMServer.renderToString(<Search/>);
  return viewHtml;
};

render();

export default Search;
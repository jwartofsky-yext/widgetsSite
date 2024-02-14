import { Widget, WidgetConfig, WidgetModule } from "@yext/pages/*";
import * as React from "react";
import * as ReactDOM from "react-dom";

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
if (typeof window !== 'undefined') {
  const searchContainer = document.getElementById("searchContainer");
  if (!searchContainer) {
    throw new Error('could not find "searchContainer" element');
  }

  ReactDOM.render(
    <React.StrictMode>
      <Search/>
    </React.StrictMode>,
    searchContainer
  );
}

export default Search;
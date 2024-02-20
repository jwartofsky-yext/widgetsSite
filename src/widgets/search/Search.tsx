import { Widget, WidgetConfig, WidgetModule } from "@yext/pages/*";
import SearchApp from "../../common/searchApp";

export const config: WidgetConfig = {
  name: "search"
}

const Search: Widget = () => {
  console.log("hello")
  return(
    <div>
      <SearchApp/>
    </div>
  )
}

export const module: WidgetModule = {
  config: config, 
  default: Search
}

export default Search;

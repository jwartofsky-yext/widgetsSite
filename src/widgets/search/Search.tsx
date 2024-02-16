import { Widget, WidgetConfig, WidgetModule } from "@yext/pages/*";
import { PageRouter } from "../../common/pages/PageRouter";

export const config: WidgetConfig = {
  name: "search"
}

const Search: Widget = () => {
  console.log("hello")
  return(
    <div>
      <PageRouter/>
    </div>
  )
}

export const module: WidgetModule = {
  config: config, 
  default: Search
}

export default Search;

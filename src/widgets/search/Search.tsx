import { Widget, WidgetConfig, WidgetModule } from "@yext/pages/*";
import { SimpleJSX } from "../../common/simpleTest";

export const config: WidgetConfig = {
  name: "search"
}

const Search: Widget = () => {
  console.log("hello")
  return(
    <div>
      <SimpleJSX/>
    </div>
  )
}

export const module: WidgetModule = {
  config: config, 
  default: Search
}

export default Search;

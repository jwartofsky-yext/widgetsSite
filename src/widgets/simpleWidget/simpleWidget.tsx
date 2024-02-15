import { Widget, WidgetConfig, WidgetModule } from "@yext/pages/*";

export const config: WidgetConfig = {
  name: "simpleWidget"
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

export default Search;

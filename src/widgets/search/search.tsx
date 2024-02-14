import { Widget, WidgetConfig, WidgetModule } from "@yext/pages/*";

export const config: WidgetConfig = {
  name: "search"
}

const Search: Widget = () => {
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
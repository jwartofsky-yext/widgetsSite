import { Module, ModuleConfig, ModuleModule } from "@yext/pages/*";
import SearchApp from "../../common/searchApp";
import "./index.css";

export const config: ModuleConfig = {
  name: "search"
}

const Search: Module = () => {
  console.log("hello")
  return(
    <div>
      <SearchApp/>
    </div>
  )
}

export const module: ModuleModule = {
  config: config, 
  default: Search
}

export default Search;

import { Module, ModuleConfig, ModuleModule } from "@yext/pages/*";

export const config: ModuleConfig = {
  name: "simpleModule"
}

const Search: Module = () => {
  console.log("hello")
  return(
    <div>
      search?
    </div>
  )
}

export const module: ModuleModule = {
  config: config, 
  default: Search
}

export default Search;

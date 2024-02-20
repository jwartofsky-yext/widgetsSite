import { Module, ModuleConfig } from "@yext/pages/*";

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

export default Search;

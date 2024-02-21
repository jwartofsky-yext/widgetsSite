import { Module, ModuleConfig } from "@yext/pages/*";

export const config: ModuleConfig = {
  name: "simpleWidget"
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

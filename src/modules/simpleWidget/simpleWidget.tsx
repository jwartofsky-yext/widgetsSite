import { Module, ModuleConfig } from "@yext/pages/*";

export const config: ModuleConfig = {
  name: "potato"
}

const Search: Module = () => {
  console.log("hello")
  return(
    <div>
      potato?
    </div>
  )
}

export default Search;

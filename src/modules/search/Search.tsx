import { Module, ModuleConfig } from "@yext/pages/*";
import SearchApp from "../../common/searchApp";
import "./index.css";

export const config: ModuleConfig = {
  name: "search"
}

const Search: Module = () => {
  console.log("search")
  return(
    <div className="tailwind">
      <SearchApp/>
    </div>
  )
}

export default Search;

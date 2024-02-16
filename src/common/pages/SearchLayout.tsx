import {
  SearchBar,
  SpellCheck
} from "@yext/search-ui-react";
import {
    SearchHeadlessProvider,
  } from "@yext/search-headless-react";
import { getSearchProvider } from "../config";
import { useSearchParams } from "react-router-dom";
import { SearchStyleProvider } from "./SearchStyleProvider";
import {UniversalPage} from "./UniversalPage";

export interface SearchLayoutProps {
  page: JSX.Element;
}

const SearchLayout = () => {
  const searcher = getSearchProvider(
    "ceedc10c919e565fd610f6240736ea81", // using 'test' search experience for now
    "en"
  );

  return (
    <SearchStyleProvider>
      <SearchHeadlessProvider searcher={searcher}>
        <SearchLayoutInternal/>
      </SearchHeadlessProvider>
    </SearchStyleProvider>
  );
};

const SearchLayoutInternal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearch = (searchEventData: {
    verticalKey?: string,
    query?: string,
  }) => {
    const { query } = searchEventData;
    if (query) {
      searchParams.set("query", query);
    } else {
      searchParams.delete("query");
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="container py-5">
      <SearchBar
        placeholder="Search in the Widget!"
        customCssClasses={{
          searchBarContainer: "SearchBar",
          inputElement: "py-2.5 px-5 text-lg",
        }}
        showVerticalLinks={false}
        onSearch={onSearch}
      />
      <SpellCheck />
      <UniversalPage/>
    </div>
  );
};

export default SearchLayout;
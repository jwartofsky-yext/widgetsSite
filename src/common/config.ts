import { provideHeadless } from "@yext/search-headless-react";
import { VerticalConfigMap } from "@yext/search-ui-react";
import type { ConfigurationProviderContextType } from "@yext/sites-react-components";
import StandardCard from "./components/cards/StandardCard";
import StandardSection from "./components/sections/StandardSection";

const config: ConfigurationProviderContextType = {
  components: {},
};

export default config;

// when implemented with pagesjs, could use environment variables for these vars
export const getSearchProvider = (apiKey: string, locale: string) =>
  provideHeadless({
    apiKey,
    experienceKey: "default",
    locale,
    experienceVersion: "PRODUCTION",
  });

  export const verticalConfig: VerticalConfigMap<Record<string, any>> = {
    characters: {
      label: "Characters",
      viewAllButton: true,
      CardComponent: StandardCard,
      SectionComponent: StandardSection,
    },
    locations: {
      label: "Locations",
      viewAllButton: true,
      CardComponent: StandardCard,
      SectionComponent: StandardSection,
    },
  };
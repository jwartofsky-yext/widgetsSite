import { provideHeadless, SearchHeadlessProvider } from '@yext/search-headless-react';
import { SearchBar, UniversalResults, VerticalConfigMap } from '@yext/search-ui-react';
import { v4 as uuidv4 } from 'uuid';
import { SearchStyleProvider } from './SearchStyle';
import StandardCard from './components/cards/StandardCard';
import StandardSection from './components/sections/StandardSection';

const config = {
  apiKey: 'ceedc10c919e565fd610f6240736ea81',
  experienceKey: 'default',
  locale: 'en',
  experienceVersion: 'PRODUCTION',
}

const searcher = provideHeadless(config);

searcher.setSessionTrackingEnabled(true);
let sessionId = window.sessionStorage.getItem('sessionId');
if (!sessionId) {
  sessionId = uuidv4();
  window.sessionStorage.setItem('sessionId', sessionId ?? 'sessionId');
}
searcher.setSessionId(sessionId ?? 'sessionId');

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

function App() {
  return (
    <SearchStyleProvider>
      <SearchHeadlessProvider searcher={searcher}>
        <SearchBar placeholder="Search..." 
          customCssClasses={{
          searchBarContainer: "SearchBar",
          inputElement: "py-2.5 px-5 text-lg",
        }} />
        <UniversalResults verticalConfigMap={verticalConfig}/>
      </SearchHeadlessProvider>
    </SearchStyleProvider>
  );
}

export default App;
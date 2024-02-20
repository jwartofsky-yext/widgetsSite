import { provideHeadless, SearchHeadlessProvider } from '@yext/search-headless-react';
import { SearchBar, UniversalResults, VerticalConfigMap } from '@yext/search-ui-react';
import { v4 as uuidv4 } from 'uuid';
import '@yext/search-ui-react/bundle.css'

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

const verticalConfigMap: VerticalConfigMap = {
  help_articles: {
    label: "Help Articles"
  }
}

function App() {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <SearchBar />
      <UniversalResults verticalConfigMap={verticalConfigMap}/>
    </SearchHeadlessProvider>
  );
}

export default App;
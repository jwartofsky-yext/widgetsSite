import { Widget, WidgetConfig, WidgetModule } from "@yext/pages/*";
import * as React from "react";
import * as ReactDOM from "react-dom";

// this doesn't work rn
export const config: WidgetConfig = {
  name: "complexWidget"
}

const Search: Widget = () => {
  console.log("hello")
  return(
    <div>
      <App/>
    </div>
  )
}

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      greeting: 'Hello, World!'
    };
  }

  changeGreeting = () => {
    this.setState({
      greeting: 'Hello, React!'
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.changeGreeting}>Change Greeting</button>
      </div>
    );
  }
}

export const module: WidgetModule = {
  config: config, 
  default: Search
}
if (typeof window !== 'undefined') {
  const searchContainer = document.getElementById("searchContainer");
  if (!searchContainer) {
    throw new Error('could not find "searchContainer" element');
  }

  ReactDOM.render(
    <React.StrictMode>
      <Search/>
    </React.StrictMode>,
    searchContainer
  );
}

export default Search;
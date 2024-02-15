import { Widget, WidgetConfig } from "@yext/pages/*";
import * as React from "react";

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

export default Search;

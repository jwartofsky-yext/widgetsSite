import { Module, ModuleConfig } from "@yext/pages/*";
import "./index.css";

const App = () => {
  return (
    <div className="tailwind">
      <div className="text-orange">
        Orange (aka purple)
      </div>
      <div className="bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-blue-500">Blue tailwind</h1>
      </div>
      <div className="primary-cta">
        css component 
      </div>
    </div>
  );
};

export default App;

export const config: ModuleConfig = {
  name: "prefix"
}

export const TailwindWidget: Module = () => {
  console.log("prefix")
  return(
    <div>
      <App/>
    </div>
  )
};

import { Widget, WidgetConfig } from "@yext/pages/*";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-blue-500">Tailwind???</h1>
      </div>
      <div className="primary-cta">
        I forgot to put anything here 
      </div>
    </>
  );
};

export default App;

export const config: WidgetConfig = {
  name: "tailwindWidget"
}

export const TailwindWidget: Widget = () => {
  console.log("hello")
  return(
    <div>
      <App/>
    </div>
  )
};

import { Widget, WidgetConfig } from "@yext/pages/*";

const App = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-blue-500">Hello, Tailwind!</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
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

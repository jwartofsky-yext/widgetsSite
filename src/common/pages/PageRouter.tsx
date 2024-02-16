import { Route, Routes, BrowserRouter } from "react-router-dom";
import SearchLayout from "./SearchLayout";

export const routeConfig: {
  label: string,
  path: string,
  element: JSX.Element,
}[] = [
  {
    label: "All",
    path: "/",
    element: <SearchLayout/>,
  },
];

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.label} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
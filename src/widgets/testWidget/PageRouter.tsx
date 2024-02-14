// 'https://hitchhikers.yext.com/guides/search-react-state-in-url/01-basic-nav/

import { Route, Routes, BrowserRouter } from "react-router-dom";

export const routeConfig: {
  label: string,
  path: string,
  element: JSX.Element,
}[] = [
  {
    label: "All",
    path: "/",
    element: <div>???</div>,
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
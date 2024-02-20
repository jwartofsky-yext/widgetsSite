import { PropsWithChildren } from "react";
import '@yext/search-ui-react/bundle.css'

/**
 * Adds Search styling scoped to this component and its children.
 */
export function SearchStyleProvider({ children }: PropsWithChildren<any>) {
  return <div className="yext-react-search">{children}</div>;
}
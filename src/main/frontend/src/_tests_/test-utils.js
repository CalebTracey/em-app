import React from "react";
import { render as rtlRender } from "@testing-library/react";
import testStore from "./test-store";
import { Provider } from "react-redux";
import employeeReducer from "../redux/reducers/employeesReducer";

function render(
  ui,
  testStore,
  {
    //     preloadedState,
    //     store = testStore({
    //       reducer: { user: employeeReducer },
    //       preloadedState,
    //     }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={testStore}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

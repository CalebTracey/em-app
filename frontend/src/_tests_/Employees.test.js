import React from "react";
// import allActions from '../redux/actions/index';
import api from "../apis/api";
import { render, fireEvent, screen } from "./test-utils";
import App from "../App";
// import Employees from "../containers/Employees";

export const handlers = [
  api.get("api/v1/employees", (req, res, ctx) => {
    return res(ctx.json("success"), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetches & receives a list of employees after clicking the appropriate nav button", async () => {
  render(<App />);

  expect(screen.getByText(/no Madge/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText("Employees"));

  await waitFor(() => screen.getByRole("link"));

  expect(screen.getByRole("menuitem")).toHaveTextContent("Bauch, Madge");
  expect(screen.getByRole("button")).toBeDisabled();

  test("handles server error", async () => {
    server.use(
      rest.get("api/v1/employees", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    fireEvent.click(screen.getByRole("menuitem", { name: /Bauch, Madge/i }));
    //   expect(screen.getByText("6389 Wilkinson Ways")).toBeInTheDocument();

    // after some time, the user should be received
    expect(await screen.findByText(/6389 Wilkinson Ways/i)).toBeInTheDocument();
    //   expect(screen.queryByText(/no user/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Dashboard1234/i)).not.toBeInTheDocument();
  });
});

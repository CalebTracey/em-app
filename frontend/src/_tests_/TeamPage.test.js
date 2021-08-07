import { render, screen, cleanup } from "@testing-library/react";
import TeamPage from "../components/team/TeamPage";

test("should render team page component", () => {
  render(<TeamPage />);
  const teamPageElement = screen.getByTestId("team-page");
  expect(teamPageElement).toBeInTheDocument();
});

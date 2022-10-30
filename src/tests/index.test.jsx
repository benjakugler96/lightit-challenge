import "@testing-library/jest-dom";
import {
  render,
  screen,
  within,
  fireEvent,
  waitFor,
} from "@testing-library/react";

import App from "../App";

describe("Lightit Challenge", () => {
  it("Should render dropdown options", () => {
    render(<App />);
    const header = screen.getByTestId("app-header");
    expect(header).toBeInTheDocument();

    const dropdown = within(header).getByTestId("dropdown");
    expect(dropdown).toBeInTheDocument();

    fireEvent.click(dropdown.querySelector("button"));

    expect(
      within(dropdown).getByText("Guardar y continuar")
    ).toBeInTheDocument();
    expect(within(dropdown).getByText("Guardar y salir")).toBeInTheDocument();
    expect(within(dropdown).getByText("Salir sin guardar")).toBeInTheDocument();
  });
  it.only("Should render Categories and Sub Categories for Aberturas", async () => {
    render(<App />);
    const openings = screen.getByTestId("aberturas");
    fireEvent.click(openings);

    const expandableContainer = screen.getByTestId("expandable-container");

    // wait for Sub Categories to load.
    const puertas = await within(expandableContainer).findByText("Puertas");
    expect(puertas).toBeInTheDocument();
    fireEvent.click(puertas);

    // Wait for Products to load
    const temploIngles = await within(expandableContainer).findByText(
      "Templo Ingles"
    );
    expect(temploIngles).toBeInTheDocument();
  });
});

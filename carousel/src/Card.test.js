import { render } from "@testing-library/react";
import React from "react";
import Card from "./Card";

// smoke test
it("should render without crashing", () => {
	render(<Card />);
});

// snapshot test
it("matches snapshot", function() {
	// asFragment gives us an object
	const { asFragment } = render(<Card />);
	expect(asFragment()).toMatchSnapshot();
});

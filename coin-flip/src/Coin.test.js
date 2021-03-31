import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin";

// smoke test
it("renders without crashing", function() {
	render(<Coin />);
});

// snapshot test
it("matches snapshot", function() {
	// asFragment gives us an object
	const { asFragment } = render(<Coin />);
	expect(asFragment()).toMatchSnapshot();
});

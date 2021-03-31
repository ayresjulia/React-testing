import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Coin from "./Coin";

// use for random flip of a coin and score count
const heads = "https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l400.jpg";

// smoke test
it("renders without crashing", () => {
	render(<Coin />);
});

// snapshot test
it("matches snapshot", () => {
	// asFragment gives us an object
	const { asFragment } = render(<Coin />);
	expect(asFragment()).toMatchSnapshot();
});

it("shows the coin when you click on the the button", () => {
	const { queryByTestId } = render(<Coin />);
	const coinImg = queryByTestId("coin-img");

	// expect the coin image to not be seen with zero clicks
	expect(coinImg).not.toBeInTheDocument();
});

it("increments count of either  head or tail on flip of a coin", () => {
	const { getByTestId, queryByTestId } = render(<Coin />);

	// get button and click
	const coinBtn = queryByTestId("coin-btn");
	fireEvent.click(coinBtn);

	// get content of scores string
	const checkContent = getByTestId("coin-count");

	// get contents of coin-img src and compare to expected scores
	let imgSrc = queryByTestId("coin-img").src;
	imgSrc === heads
		? expect(checkContent).toHaveTextContent("Out of 1 flips, there have been 1 heads and 0 tails.")
		: expect(checkContent).toHaveTextContent("Out of 1 flips, there have been 0 heads and 1 tails.");

	// coin-img in the document
	expect(queryByTestId("coin-img")).toBeInTheDocument();
});

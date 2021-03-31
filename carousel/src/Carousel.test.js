import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// smoke test
it("should render without crashing", () => {
	render(<Carousel />);
});

// snapshot test
it("matches snapshot", function() {
	// asFragment gives us an object
	const { asFragment } = render(<Carousel />);
	expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the RIGHT ARROW", function() {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// expect the first image to show, but not the second
	expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
	expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

	// move forward in the carousel
	const rightArrow = queryByTestId("right-arrow");
	fireEvent.click(rightArrow);

	// expect the second image to show, but not the first
	expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
	expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the LEFT ARROW", function() {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// expect the first image to show, but not the second
	expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
	expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

	// move forward in the carousel
	const rightArrow = queryByTestId("right-arrow");
	fireEvent.click(rightArrow);

	// expect the second image to show, but not the first
	expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
	expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

	// move backward in the carousel
	const leftArrow = queryByTestId("left-arrow");
	fireEvent.click(leftArrow);

	// expect the first image to show, but not the second
	expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
	expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

it("is missing a RIGHT ARROW on the last image", () => {
	const { queryByTestId } = render(<Carousel />);
	const rightArrow = queryByTestId("right-arrow");

	// proceed to last image
	fireEvent.click(rightArrow);
	fireEvent.click(rightArrow);

	// expect right arrow to dissapear on last image
	expect(rightArrow).not.toBeInTheDocument();
});

it("is missing a LEFT ARROW on the first image", () => {
	const { queryByTestId } = render(<Carousel />);
	const leftArrow = queryByTestId("left-arrow");

	// expect left arrow to dissapear on first image
	expect(leftArrow).not.toBeInTheDocument();
});

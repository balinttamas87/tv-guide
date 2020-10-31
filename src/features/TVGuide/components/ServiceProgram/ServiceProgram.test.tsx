import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ServiceProgram from "./ServiceProgram";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Test ServiceProgram component", () => {
	const mockStore = configureStore();

	it("should render ServiceProgram with correct details", async () => {
		const store = mockStore({});
		const event = {
			eid: "Efe2-320",
			st: 1580256000,
			d: 3600,
			t: "CSI: Crime Scene Investigation",
			sy:
				"Spark Of Life: When Grissom links the suicide of a woman to the murders of an entire family, a harrowing tale of unfaithfulness and desperation is uncovered. (S5, ep 18)",
			eg: "Entertainment",
			esg: "Detective",
			seasonnumber: 5,
			episodenumber: 18,
			programmeuuid: "f46b1152-4252-4e09-a5c8-cbab2f97b4ed",
			seasonuuid: "5e4a1d2b-233e-4ece-8813-d0515ab38905",
			seriesuuid: "cb570a56-16f3-4416-9a48-0cf20652573e",
			r: "--",
			s: true,
			ad: false,
			hd: true,
			new: false,
		};

		const { queryByText } = render(
			<Provider store={store}>
				<ServiceProgram event={event} />
			</Provider>
		);

		const programTitle = queryByText(/CSI: Crime Scene Investigation/i).closest(
			"p"
		);
		fireEvent.click(programTitle);

		expect(queryByText(/CSI: Crime Scene Investigation/i)).toBeInTheDocument();
	});
});

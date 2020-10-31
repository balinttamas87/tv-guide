import React from "react";
import { render } from "@testing-library/react";
import ServiceProgramList from "./ServiceProgramList";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Test ServiceProgramList component", () => {
	const mockStore = configureStore();

	it("should render ServiceProgramList with correct details", async () => {
		const store = mockStore({});
		const events = [
			{
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
			},
			{
				eid: "E40c-278",
				st: 1580248800,
				d: 3600,
				t: "Police Raids: Caught By Surprise",
				sy:
					"Docuseries following enforcement agencies. Officers launch raids on a nationwide drug-trafficking operation. A repeat offender appears to be clean at first, but has he fooled the agents? (S1 Ep 1)",
				eg: "News & Docs",
				esg: "Features",
				seasonnumber: 1,
				episodenumber: 1,
				programmeuuid: "0eb81239-f313-4ccb-a2e2-a4b0c3848ca6",
				seasonuuid: "56d0f4d8-45a3-44ec-9e48-ae46f33dc8b8",
				seriesuuid: "1864ff54-7d45-47ca-97c1-ffed6b8ee5f5",
				r: "--",
				s: false,
				ad: false,
				hd: false,
				new: false,
			},
		];

		const schedule = {
			sid: "2002",
			date: "20200202",
			events,
		};

		const { queryByText } = render(
			<Provider store={store}>
				<ServiceProgramList schedule={schedule} />
			</Provider>
		);

		expect(queryByText(/CSI: Crime Scene Investigation/i)).toBeInTheDocument();
		expect(
			queryByText(/Police Raids: Caught By Surprise/i)
		).toBeInTheDocument();
	});
});

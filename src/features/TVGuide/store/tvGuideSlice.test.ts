import { selectSchedules } from "./tvGuideSlice";
import tvGuideSlice, {
	initialState,
	selectDate,
	selectSelectedDate,
	selectSelectedDateIndex,
	navigateSchedule,
	openProgramModal,
	closeProgramModal,
	selectIsProgramModalOpen,
	selectProgramDetailsInModal,
} from "./tvGuideSlice";

describe("tvGuideSlice slice", () => {
	describe("reducer, actions and selectors", () => {
		it("should return the initial state on first run", () => {
			// Arrange
			const nextState = initialState;

			// Act
			const result = tvGuideSlice.reducer(undefined, { type: "" });

			// Assert
			expect(result).toEqual(nextState);
		});

		it("should properly set the state when selecting a date", () => {
			// Arrange
			const date = "20200202";
			const schedules = { ids: [], entities: {} };

			// Act
			const nextState = tvGuideSlice.reducer(initialState, selectDate(date));

			// Assert
			const rootState = { tvGuide: nextState };
			expect(selectSelectedDate(rootState)).toEqual(date);
			expect(selectSelectedDateIndex(rootState)).toEqual(4);
			expect(selectSchedules(rootState)).toEqual(schedules);
		});

		it("should properly set the state when selecting a date using the next button", () => {
			// Arrange
			const schedules = { ids: [], entities: {} };

			// Act
			const nextState = tvGuideSlice.reducer(initialState, navigateSchedule(1));

			// Assert
			const rootState = { tvGuide: nextState };
			expect(selectSelectedDate(rootState)).toEqual("20200130");
			expect(selectSelectedDateIndex(rootState)).toEqual(1);
			expect(selectSchedules(rootState)).toEqual(schedules);
		});

		it("should properly set the state when selecting a date using the previous button", () => {
			// Arrange
			const schedules = { ids: [], entities: {} };
			const startingState = {
				...initialState,
				selectedDate: "20200130",
				selectedDateIndex: 1,
			};

			// Act
			const nextState = tvGuideSlice.reducer(
				startingState,
				navigateSchedule(-1)
			);

			// Assert
			const rootState = { tvGuide: nextState };
			expect(selectSelectedDate(rootState)).toEqual("20200129");
			expect(selectSelectedDateIndex(rootState)).toEqual(0);
			expect(selectSchedules(rootState)).toEqual(schedules);
		});

		it("should properly set the state when opening program modal", () => {
			// Arrange
			const programDetails = {
				eid: "Efd5-246",
				st: 1580253000,
				d: 4500,
				t: "Oz",
				sy:
					"Ancient Tribes: McManus places the prisoners in Em City into 10 groups, and sets up a council where grievances can be addressed. (S2, ep 2)",
				eg: "Entertainment",
				esg: "Drama",
				seasonnumber: 2,
				episodenumber: 2,
				programmeuuid: "c27a1d3a-bee6-428d-b2c9-e24eb7e92262",
				seasonuuid: "947457ce-f10b-4f53-806f-a47c8eebcdcf",
				seriesuuid: "7401610a-97b9-4960-9bad-3cb63d8f329c",
				r: "--",
				s: true,
				ad: false,
				hd: false,
				new: false,
			};

			// Act
			const nextState = tvGuideSlice.reducer(
				initialState,
				openProgramModal(programDetails)
			);

			// Assert
			const rootState = { tvGuide: nextState };
			expect(selectIsProgramModalOpen(rootState)).toEqual(true);
			expect(selectProgramDetailsInModal(rootState)).toEqual(programDetails);
		});

		it("should properly set the state when closing program modal", () => {
			// Arrange
			const programDetails = {
				eid: "Efd5-246",
				st: 1580253000,
				d: 4500,
				t: "Oz",
				sy:
					"Ancient Tribes: McManus places the prisoners in Em City into 10 groups, and sets up a council where grievances can be addressed. (S2, ep 2)",
				eg: "Entertainment",
				esg: "Drama",
				seasonnumber: 2,
				episodenumber: 2,
				programmeuuid: "c27a1d3a-bee6-428d-b2c9-e24eb7e92262",
				seasonuuid: "947457ce-f10b-4f53-806f-a47c8eebcdcf",
				seriesuuid: "7401610a-97b9-4960-9bad-3cb63d8f329c",
				r: "--",
				s: true,
				ad: false,
				hd: false,
				new: false,
			};

			const startingState = {
				...initialState,
				programDetailsInModal: programDetails,
			};

			// Act
			const nextState = tvGuideSlice.reducer(
				startingState,
				closeProgramModal()
			);

			// Assert
			const rootState = { tvGuide: nextState };
			expect(selectIsProgramModalOpen(rootState)).toEqual(false);
			expect(selectProgramDetailsInModal(rootState)).toEqual({});
		});
	});
});

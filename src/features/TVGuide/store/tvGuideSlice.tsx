import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchServices from "../api/fetchServices";
import fetchSchedule from "../api/fetchSchedule";
import dayjs, { Dayjs } from "dayjs";

const getServices = createAsyncThunk("fetchServices", async () => {
	return fetchServices()
		.then((res) => res.json())
		.then((servicesJSON) => servicesJSON);
});

const getSchedules = createAsyncThunk(
	"fetchSchedules",
	async ({ services, date }: any) => {
		return Promise.all(
			services
				.slice(0, 20)
				.map((service: any) =>
					fetchSchedule(service.sid, date).then((res: any) => res.json())
				)
		).then((schedules: any) => schedules);
	}
);

const toAPIAcceptedDateFormat = (date: Dayjs) => date.format("YYYYMMDD");

// get 7 consecutive dates starting from today's date for service schedules
const getInitialScheduleDates = (): string[] => {
	// today's date is 29/01/2020 for the sake of this project
	return Array(7)
		.fill(null)
		.map((__, numberOfDays) => {
			return toAPIAcceptedDateFormat(
				dayjs(new Date(2020, 0, 29)).add(numberOfDays, "day")
			);
		});
};

const initialScheduleDates: string[] = getInitialScheduleDates();

/*
	Normally we would get todays date by calling 'new Date()' with no arguments.
	However for the sake of this test we set 29/01/2020 as today's date in initialState, in the following format: 29012020. This format is used by the api when we query schedules for a given service.
*/
export const initialState = {
	loading: false,
	error: null,
	services: [],
	schedules: [],
	scheduleDates: initialScheduleDates,
	selectedDate: initialScheduleDates[0],
	selectedDateIndex: 0,
	isProgramModalOpen: false,
	programDetailsInModal: {},
};

const tvGuideSlice = createSlice({
	name: "tvGuide",
	initialState,
	reducers: {
		selectDate(state, action) {
			state.selectedDate = action.payload;
			state.selectedDateIndex = state.scheduleDates.indexOf(action.payload);
		},
		// action.payload is either 1 or -1 indicating the direction
		navigateSchedule(state, action) {
			const selectedIndex = state.selectedDateIndex + action.payload;
			state.selectedDateIndex = selectedIndex;
			state.selectedDate = state.scheduleDates[selectedIndex];
		},
		openProgramModal(state, action) {
			state.isProgramModalOpen = true;
			state.programDetailsInModal = action.payload;
		},
		closeProgramModal(state) {
			state.isProgramModalOpen = false;
			state.programDetailsInModal = {};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getServices.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getServices.rejected, (state, action: any) => {
			state.loading = false;
			state.error = action.error;
		});
		builder.addCase(getServices.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.services = payload;
		});
		builder.addCase(getSchedules.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getSchedules.rejected, (state, action: any) => {
			state.loading = false;
			state.error = action.error;
		});
		builder.addCase(getSchedules.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.schedules = payload;
		});
	},
});

// selectors
export const selectServices = (state: any) => state.tvGuide.services;
export const selectSchedules = (state: any) => state.tvGuide.schedules;
export const selectSelectedDate = (state: any) => state.tvGuide.selectedDate;
export const selectSelectedDateIndex = (state: any) =>
	state.tvGuide.selectedDateIndex;
export const selectScheduleDates = (state: any) => state.tvGuide.scheduleDates;
export const selectLoading = (state: any) => state.tvGuide.loading;
export const selectIsProgramModalOpen = (state: any) =>
	state.tvGuide.isProgramModalOpen;
export const selectProgramDetailsInModal = (state: any) =>
	state.tvGuide.programDetailsInModal;

// actions
export const {
	selectDate,
	navigateSchedule,
	openProgramModal,
	closeProgramModal,
} = tvGuideSlice.actions;
// thunks
export { getServices, getSchedules };

// reducer
export default tvGuideSlice;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchServices from "../api/fetchServices";
import fetchSchedule from "../api/fetchSchedule";

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

const toAPIAcceptedDateFormat = (dateObject: Date) => {
	const fullYear = dateObject.getFullYear();
	const month = dateObject.getMonth() + 1; // months are zero based
	const date = dateObject.getDate();
	const formattedMonth = String(month).padStart(2, "0");
	const formattedDate = String(date).padStart(2, "0");
	return `${fullYear}${formattedMonth}${formattedDate}`;
};

/*
	Normally we would get todays date by calling 'new Date()' with no arguments.
	However for the sake of this test we set 29/01/2020 as today's date in initialState, in the following format: 29012020. This format is used by the api when we query schedules for a given service.
*/
export const initialState = {
	loading: false,
	error: null,
	services: [],
	schedules: [],
	selectedDate: toAPIAcceptedDateFormat(new Date(2020, 0, 29)),
};

const tvGuideSlice = createSlice({
	name: "tvGuide",
	initialState,
	reducers: {
		selectDate(state, action) {
			state.selectedDate = action.payload;
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
export const selectedDate = (state: any) => state.tvGuide.selectedDate;

// actions
export const { selectDate } = tvGuideSlice.actions;
// thunks
export { getServices, getSchedules };

// reducer
export default tvGuideSlice;

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

export const initialState = {
	loading: false,
	error: null,
	services: [],
	schedules: [],
	selectedDate: "20200129",
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

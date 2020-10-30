import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
	PayloadAction,
} from "@reduxjs/toolkit";
import type Service from "../../../types/Service";
import type Schedule from "../../../types/Schedule";
import type ProgramDetails from "../../../types/ProgramDetails";
import { RootState } from "../../../app/store";
import fetchServices from "../api/fetchServices";
import fetchSchedule from "../api/fetchSchedule";
import dayjs, { Dayjs } from "dayjs";

interface GetSchedulesParams {
	services: Service[];
	date: string;
	range?: {
		startIndex: number;
		stopIndex: number;
	};
}

const servicesAdapter = createEntityAdapter({
	selectId: (service: Service) => service.sid,
});

const schedulesAdapter = createEntityAdapter({
	selectId: (schedule: Schedule) => schedule.sid,
});

const getServices = createAsyncThunk("fetchServices", async () => {
	return fetchServices()
		.then((res) => res.json())
		.then((servicesJSON) => servicesJSON);
});

const getSchedules = createAsyncThunk(
	"fetchSchedules",
	async ({
		services,
		date,
		range = { startIndex: 0, stopIndex: 20 },
	}: GetSchedulesParams) => {
		return Promise.all(
			services
				.slice(range.startIndex, range.stopIndex)
				.map((service: Service) =>
					fetchSchedule(service.sid, date).then((res) => res.json())
				)
		).then((schedules: any) => schedules);
	}
);

// This format is used by the api when we query schedules for a given service.
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

export const initialState = {
	loading: false,
	error: null,
	services: servicesAdapter.getInitialState(),
	schedules: schedulesAdapter.getInitialState(),
	lastScheduleRequestId: "",
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
		selectDate(state, action: PayloadAction<string>) {
			state.selectedDate = action.payload;
			state.selectedDateIndex = state.scheduleDates.indexOf(action.payload);
			state.schedules = schedulesAdapter.getInitialState();
		},
		// action.payload is either 1 or -1 indicating the direction
		navigateSchedule(state, action: PayloadAction<number>) {
			const selectedIndex = state.selectedDateIndex + action.payload;
			state.selectedDateIndex = selectedIndex;
			state.selectedDate = state.scheduleDates[selectedIndex];
			state.schedules = schedulesAdapter.getInitialState();
		},
		openProgramModal(state, action: PayloadAction<ProgramDetails>) {
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
			servicesAdapter.setAll(state.services, payload);
		});
		builder.addCase(getSchedules.pending, (state, { meta }) => {
			state.lastScheduleRequestId = meta.requestId;
			state.loading = true;
		});
		builder.addCase(getSchedules.rejected, (state, action: any) => {
			state.loading = false;
			state.error = action.error;
		});
		builder.addCase(getSchedules.fulfilled, (state, { payload, meta }) => {
			state.loading = false;
			if (meta.requestId === state.lastScheduleRequestId) {
				schedulesAdapter.addMany(state.schedules, payload);
			}
		});
	},
});

// selectors
export const selectServices = (state: RootState) => state.tvGuide.services;
export const selectSchedules = (state: RootState) => state.tvGuide.schedules;
export const selectSelectedDate = (state: RootState) =>
	state.tvGuide.selectedDate;
export const selectSelectedDateIndex = (state: RootState) =>
	state.tvGuide.selectedDateIndex;
export const selectScheduleDates = (state: RootState) =>
	state.tvGuide.scheduleDates;
export const selectLoading = (state: RootState) => state.tvGuide.loading;
export const selectIsProgramModalOpen = (state: RootState) =>
	state.tvGuide.isProgramModalOpen;
export const selectProgramDetailsInModal = (state: any) =>
	state.tvGuide.programDetailsInModal;
export const serviceSelectors = servicesAdapter.getSelectors();
export const scheduleSelectors = schedulesAdapter.getSelectors();

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

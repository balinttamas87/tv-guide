import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import tvGuideSlice from "../features/TVGuide/store/tvGuideSlice";

export const store = configureStore({
	reducer: {
		tvGuide: tvGuideSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

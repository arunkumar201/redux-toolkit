import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./features/CounterSlice";

export const store = configureStore({
	reducer: {
		counter: CounterSlice,
	},
	devTools: true,
	preloadedState: {
		counter: {
			count: 100,
		},
	},
});

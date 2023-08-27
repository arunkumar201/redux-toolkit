import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 0,
};
const CounterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {

			console.debug("🚀 ~ file: CounterSlice.js:12 ~ increment:", increment);

			state.count++;
		},
		decrement: (state) => {
			state.count--;
		},
		updateByValue: (state, action) => {
		state.count=state.count + Number(action.payload);
		},
		clearValue: (state)=>{
			state.count=0;
		}
	},
});

export const { increment, decrement,updateByValue,clearValue } = CounterSlice.actions;


export default CounterSlice.reducer;

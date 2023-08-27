import {
	clearValue,
	decrement,
	increment,
	updateByValue,
} from "../features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

const Counter = () => {
	const [input, setInput] = useState(0);
	const { count } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const incrementHandler = () => {
		dispatch(increment());
	};
	const decrementHandler = () => {
		dispatch(decrement());
	};
	const updateByX = () => {
		dispatch(updateByValue(input));
	};
	const clearCountValue = () => {
		dispatch(clearValue());
	};
	
	return (
		<div>
			<button onClick={incrementHandler}>Increment</button>
			<p>{count}</p>
			<button onClick={decrementHandler}>Decrement</button>
			<input
				type="number"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={updateByX}>Update by {input}</button>
			<button onClick={clearCountValue}>Clear Count Value</button>
		</div>
	);
};

export default Counter;

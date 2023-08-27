import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
function App() {
	return (
		<Routes>
			<Route path="/" element={<h1>Hello,Welcome to Redux Toolkit page</h1>} />
			<Route path="/counter" element={<Counter />} />
			
		</Routes>
	);
}

export default App;

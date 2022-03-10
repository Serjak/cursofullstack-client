import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";

import "./App.scss";

function App() {
	return (
		<Routes>
			{routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					element={
						<route.layout>
							<route.component />
						</route.layout>
					}
				></Route>
			))}
		</Routes>
	);
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PlaceOrder from "./pages/PlaceOrder";
import OrderConfirmation from "./pages/OrderConfirmation";
import PastOrders from "./pages/PastOrders";
import CancelOrder from "./pages/CancelOrder";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/register'
					element={<Register />}
				/>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>
				<Route
					path='/placeOrder'
					element={<PlaceOrder />}
				/>
				<Route
					path='/orderConfirmation'
					element={<OrderConfirmation />}
				/>
				<Route
					path='/pastOrders'
					element={<PastOrders />}
				/>
				<Route
					path='/cancelOrder'
					element={<CancelOrder />}
				/>
				<Route
					path='/aboutus'
					element={<AboutUs />}
				/>
				<Route
					path='/services'
					element={<Services />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;


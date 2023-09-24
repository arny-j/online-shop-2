import "./App.css"; // Brings in Styles
import { Routes, Route } from "react-router-dom"; // Brings in Routes and Route 
import { useAuth0 } from "@auth0/auth0-react"; // Lets you incorperate Auth0
import ProtectedRoute from "./auth/ProtectedRoute"; // Lets you create protected routes
import Header from "./components/Header"; // Header component
import AddProperty from "./components/AddProperty"; // AddProperty component
import Properties from "./components/Properties"; // Properties
// Creates the app that will display content to the page
const App = () => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <p>Loading...</p>;
	} // IDRK what this does

	return (
		<>
			<Header />
			<div className="container">
				<Routes>
					<Route path="/add" element={<ProtectedRoute />}>
						<Route path="/add" element={<AddProperty />} />
					</Route>
					<Route path="/" element={<Properties />} />
				</Routes>
			</div>
		</>
	); // This is the content that will be displayed in the browser
};

export default App;

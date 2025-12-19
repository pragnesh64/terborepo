import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default AppRoutes;


import { BrowserRouter, Route, Routes } from "react-router";
import DashLayout from "../Layout/DashLayout";
import Dashboard from "../pages/Dashboard";
import { routePaths } from "./routePaths";
import CPDLog from "../pages/CPDLog";
import ActivityLog from "../pages/ActivityLog";
import Alerts from "../pages/Alerts";
import EvidenceVault from "../pages/EvidenceVault";
import Settings from "../pages/Settings";
import Reports from "../pages/Reports";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DashLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path={routePaths.logCPDActivity} element={<CPDLog />} />
                    <Route path={routePaths.activityLog} element={<ActivityLog />} />
                    <Route path={routePaths.alerts} element={<Alerts />} />
                    <Route path={routePaths.reports} element={<Reports />} />
                    <Route path={routePaths.evidenceVault} element={<EvidenceVault />} />
                    <Route path={routePaths.settings} element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
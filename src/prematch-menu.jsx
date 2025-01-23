import {QueryClient, QueryClientProvider} from "react-query";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import {PrematchMenuMarkup} from "./components/prematch-menu-markup.jsx";


const queryClient = new QueryClient();
// const root = createRoot(document.getElementById("root"));

function PrematchMenu() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename="/sport">
                <Routes>
                    <Route path=":branchId" element={<PrematchMenuMarkup />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default PrematchMenu;
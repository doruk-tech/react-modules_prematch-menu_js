import {QueryClient, QueryClientProvider} from "react-query";

import { createRoot } from "react-dom/client";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import {PrematchMenu} from "@components/prematch-menu.jsx";


const queryClient = new QueryClient();
// const root = createRoot(document.getElementById("root"));

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename="/sport">
                <Routes>
                    <Route path=":branchId" element={<PrematchMenu />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App;
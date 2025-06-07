import {Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import TaskDetail from "./pages/TaskDetail"
import NotFound from "./pages/NotFound"

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task/:id" element={<TaskDetail />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}



import { Link } from "react-router-dom"

export default function TaskCard({ task }) {
    return (
        <Link
            to={`/task/${task.id}`}
            className="block p-4 rounded-xl bg-[#1e1f24] shadow-[2px_2px_6px_rgba(0,0,0,0.2),-2px_-2px_6px_rgba(255,255,255,0.05)] mb-3 hover:bg-[#2a2b30] transition"
        >
            <p className="truncate text-white">{task.text}</p>
        </Link>
    )
}

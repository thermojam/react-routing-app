import {Link} from "react-router-dom"

export default function TaskCard({task}) {
    return (
        <Link
            to={`/task/${task.id}`}
            className="block p-6 text-2xl rounded-xl bg-[#24272c] shadow-neomorph-inset transition"
        >
            <p className="truncate text-white">{task.text}</p>
        </Link>
    )
}

import {useNavigate} from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <div
            className="min-h-screen flex flex-col items-center px-4 py-10 bg-gradient-to-b from-[#1e1f24] via-[#23252d] to-[#18191f] justify-center fade-in-up">
            <h1 className="text-8xl text-center font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">Not
                Found</h1>
            <p className="text-4xl mb-6 text-center text-slate-400 pulse-text glow-text">
                Check the url in the address bar - there may be a mistake!
            </p>
            <button
                onClick={() => navigate(-1)}
                className="text-2xl mb-6 text-cyan-400 cursor-pointer"
            >
                ← back
            </button>
        </div>
    )
}

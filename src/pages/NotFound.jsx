import { useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen px-4 py-10 bg-[#232527] text-white flex flex-col items-center justify-center">
            <h1 className="text-8xl font-bold text-red-400 mb-4">Not Found</h1>
            <p className="mb-6 text-center text-gray-400">
                Check the address in the address bar - there may be a mistake!
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

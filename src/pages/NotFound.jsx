import { useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen px-4 py-10 bg-[#131417] text-white flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-red-400 mb-4">404 — Страница не найдена</h1>
            <p className="mb-6 text-center text-gray-400">
                Проверьте адрес в адресной строке — возможно, допущена ошибка.
            </p>
            <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-xl transition cursor-pointer"
            >
                ← Назад
            </button>
        </div>
    )
}

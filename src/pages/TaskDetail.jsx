import { useTaskDetail } from "../hooks/useTaskDetail"
import Spinner from "../components/Spinner"
import NotFound from "./NotFound"

export default function TaskDetail() {
    const {
        task,
        text,
        setText,
        loading,
        updateTask,
        deleteTask,
        goBack,
    } = useTaskDetail()

    if (loading) return <Spinner />
    if (!task) return <NotFound />

    return (
        <div className="min-h-screen px-4 py-10 bg-[#131417] text-white">
            <div className="max-w-xl mx-auto">
                <button
                    onClick={goBack}
                    className="mb-6 text-cyan-400 cursor-pointer"
                >
                    ← Назад
                </button>

                <h2 className="text-2xl font-bold mb-4 text-purple-300">
                    Редактирование задачи
                </h2>

                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={4}
                    className="w-full p-4 rounded-xl bg-[#1e1f24] text-white shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] mb-4 resize-none"
                />

                <div className="flex gap-4">
                    <button
                        onClick={updateTask}
                        className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-xl transition"
                    >
                        Сохранить
                    </button>
                    <button
                        onClick={deleteTask}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-xl transition"
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}

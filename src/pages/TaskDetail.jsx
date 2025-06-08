import {useTaskDetail} from "../hooks/useTaskDetail"
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

    if (loading) return <Spinner/>
    if (!task) return <NotFound/>

    return (
        <div className="min-h-screen px-4 py-10 bg-gradient-to-b from-[#1e1f24] via-[#23252d] to-[#18191f]">
            <div className="max-w-xl mx-auto">
                <button
                    onClick={goBack}
                    className="text-2xl mb-6 text-cyan-400 cursor-pointer"
                >
                    ← back
                </button>

                <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Editing a task
                </h2>

                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={4}
                    className="w-full p-4 rounded-xl bg-[#24272c] text-white text-2xl shadow-neomorph-inset my-4 resize-none "
                />

                <div className="flex gap-4">
                    <button
                        onClick={updateTask}
                        className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-xl transition cursor-pointer"
                    >
                        Save
                    </button>
                    <button
                        onClick={deleteTask}
                        className="px-4 py-2 bg-pink-400 hover:bg-pink-600 rounded-xl transition cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

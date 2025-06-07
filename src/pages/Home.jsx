import { useTodos } from "../hooks/useTodos"
import Spinner from "../components/Spinner"
import TaskCard from "../components/TaskCard"
import TaskForm from "../components/TaskForm"

export default function Home() {
    const { todos, loading, addTodo, query, setQuery, sortAsc, setSortAsc } = useTodos()

    return (
        <div className="min-h-screen px-4 sm:px-2 py-10 bg-[#232527] text-white">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-6xl font-bold mb-6 text-center text-cyan-400 mb-10">Todos Routing App</h1>

                <TaskForm onAdd={addTodo} />

                <div className="flex gap-2 mb-10">
                    <input
                        type="text"
                        placeholder="Search .."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 p-2 rounded bg-[#1e1f24] text-white shadow-neomorph-inset"
                    />
                    <button
                        onClick={() => setSortAsc(!sortAsc)}
                        className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-xl cursor-pointer"
                    >
                        {sortAsc ? "ABC" : "Sort"}
                    </button>
                </div>

                {loading ? (
                    <Spinner />
                ) : (
                    <div className="space-y-2">
                        {todos.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

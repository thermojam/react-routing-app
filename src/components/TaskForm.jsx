import { useState } from "react"

export default function TaskForm({ onAdd }) {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        onAdd(text)
        setText("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                className="flex-1 p-3 rounded-xl bg-[#1e1f24] text-white shadow-neomorph-inset"
                placeholder="Create task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-xl cursor-pointer">Add</button>
        </form>
    )
}

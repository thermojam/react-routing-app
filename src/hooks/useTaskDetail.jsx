import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export function useTaskDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [task, setTask] = useState(null)
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let cancelled = false

        fetch(`http://localhost:3330/todos/${id}`)
            .then((res) => {
                if (res.status === 404) {
                    if (!cancelled) {
                        setTask(null)
                        setLoading(false)
                    }
                    return
                }
                if (!res.ok) throw new Error("Ошибка при получении задачи")
                return res.json()
            })
            .then((data) => {
                if (!cancelled && data) {
                    setTask(data)
                    setText(data.text)
                    setLoading(false)
                }
            })
            .catch(() => {
                if (!cancelled) setLoading(false)
            })

        return () => {
            cancelled = true
        }
    }, [id])

    const updateTask = () => {
        fetch(`http://localhost:3330/todos/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        }).then(() => navigate("/"))
    }

    const deleteTask = () => {
        fetch(`http://localhost:3330/todos/${id}`, {
            method: "DELETE",
        }).then(() => navigate("/"))
    }

    return {
        task,
        text,
        setText,
        loading,
        updateTask,
        deleteTask,
        goBack: () => navigate(-1),
    }
}

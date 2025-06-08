import {useEffect, useState} from "react"
import {useDebounce} from "./useDebounce"

export function useTodos() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState("")
    const [sortAsc, setSortAsc] = useState(true)

    const debouncedQuery = useDebounce(query, 300)

    useEffect(() => {
        fetch("http://localhost:3330/todos")
            .then((res) => res.json())
            .then((data) => {
                setTodos(data)
                setLoading(false)
            })
    }, [])

    const addTodo = (text) => {
        fetch("http://localhost:3330/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({text}),
        })
            .then((res) => res.json())
            .then((newTodo) => setTodos((prev) => [...prev, newTodo]))
    }

    const filtered = todos
        .filter((t) =>
            t.text.toLowerCase().includes(debouncedQuery.toLowerCase())
        )
        .sort((a, b) =>
            sortAsc ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
        )

    return {
        todos: filtered,
        loading,
        addTodo,
        query,
        setQuery,
        sortAsc,
        setSortAsc,
    }
}

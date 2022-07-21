import React from 'react'
import { useSelector } from 'react-redux'

export default function Todo() {
    const { todos } = useSelector(state => state.todos)
    const loading = useSelector(state => state.todos.loading)
    console.log(todos)
    return (
        <div>
            {
                loading ? <div>Loading...</div> :
                    <table>
                        <tbody>
                            {todos.map(({ id, title }, i) => (
                                <tr key={i}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>
                                        <button>Delete</button>
                                        <button>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            }
        </div>
    )
}

import React from 'react'
import { useSelector } from 'react-redux'
import EditTodoModal from '../Modal/EditTodo'
import DeleteTodoModal from '../Modal/DeleteTodo'
import AddTodoModal from '../Modal/AddTodo'

export default function Todo() {
    const { todos } = useSelector(state => state.todos)
    const loading = useSelector(state => state.todos.loading)

    const [editModalOpen, setEditModalOpen] = React.useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = React.useState(false)
    const [addModalOpen, setAddModalOpen] = React.useState(false)

    return (
        <div>
            <button className="p-2 bg-blue-200" onClick={() => setAddModalOpen(true)}>New To Do</button>
            {
                loading ? <div>Loading...</div> :
                    <table>
                        <tbody>
                            {todos.map(({ id, title }, i) => (
                                <tr key={i}>
                                    <td>{title}</td>
                                    <td>
                                        <button onClick={() => setDeleteModalOpen(true)}>Delete</button>
                                        <button onClick={() => setEditModalOpen(true)}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            }
            <EditTodoModal editModalOpen={editModalOpen} setEditModalOpen={setEditModalOpen} />
            <DeleteTodoModal deleteModalOpen={deleteModalOpen} setDeleteModalOpen={setDeleteModalOpen} />
            <AddTodoModal addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} />
        </div>
    )
}

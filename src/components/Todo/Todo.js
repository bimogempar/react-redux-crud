import React from 'react'
import { useSelector } from 'react-redux'
import EditTodoModal from '../Modal/EditTodo'
import DeleteTodoModal from '../Modal/DeleteTodo'
import AddTodoModal from '../Modal/AddTodo'

export default function Todo() {
    const { todos } = useSelector(state => state.todos)
    // console.log(todos)
    const loading = useSelector(state => state.todos.loading)

    const [editModalOpen, setEditModalOpen] = React.useState({
        open: false,
        todo: {}
    })
    const [deleteModalOpen, setDeleteModalOpen] = React.useState({
        open: false,
        todo: {}
    })
    const [addModalOpen, setAddModalOpen] = React.useState(false)

    const handleClickEdit = (e) => {
        setEditModalOpen({
            open: true,
            todo: e
        })
    }

    const handleDelete = (e) => {
        setEditModalOpen({
            open: false,
            todo: {}
        })
        setDeleteModalOpen({
            open: true,
            todo: e
        })
    }

    return (
        <div>
            <button className="p-2 bg-blue-200" onClick={() => setAddModalOpen(true)}>New To Do</button>
            {
                loading ? <div>Loading...</div> :
                    <table>
                        <tbody>
                            {todos.map((todo, i) => (
                                <tr key={i}>
                                    <td>{todo.title}</td>
                                    <td>
                                        <button onClick={() => handleClickEdit(todo)}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            }
            <EditTodoModal editModalOpen={editModalOpen} setEditModalOpen={setEditModalOpen} handleDelete={handleDelete} />
            <DeleteTodoModal deleteModalOpen={deleteModalOpen} setDeleteModalOpen={setDeleteModalOpen} />
            <AddTodoModal addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} />
        </div>
    )
}

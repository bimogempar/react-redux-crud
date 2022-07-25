import React from 'react'
import { useSelector } from 'react-redux'
import EditTodoModal from '../Modal/EditTodo'
import DeleteTodoModal from '../Modal/DeleteTodo'
import AddTodoModal from '../Modal/AddTodo'
import { AiOutlineEdit } from "react-icons/ai";

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
            <div className="flex justify-center">
                <button className="p-2 bg-blue-200 my-4" onClick={() => setAddModalOpen(true)}>New To Do</button>
            </div>
            <div className="flex space-x-6 justify-center">
                <div>
                    <div className="flex justify-center text-lg mb-5 p-2 bg-red-200">Belum Selesai</div>
                    {
                        loading ? <div>Loading...</div> :
                            todos
                                .filter(todo => todo.status !== 1)
                                .map((todo, i) => (
                                    <div key={i} className="flex justify-between space-x-24 border-2 border-gray-200 my-2 p-2">
                                        <div>{todo.title}</div>
                                        <button onClick={() => handleClickEdit(todo)}><AiOutlineEdit /></button>
                                    </div>
                                ))
                    }
                </div>
                <div>
                    <div className="flex justify-center text-lg mb-5 p-2 bg-green-200">Selesai</div>
                    {
                        loading ? <div>Loading...</div> :
                            todos
                                .filter(todo => todo.status === 1)
                                .map((todo, i) => (
                                    <div key={i} className="flex justify-between space-x-24 border-2 border-gray-200 my-2 p-2">
                                        <div>{todo.title}</div>
                                        <button onClick={() => handleClickEdit(todo)}><AiOutlineEdit /></button>
                                    </div>
                                ))
                    }
                </div>
            </div>
            <EditTodoModal editModalOpen={editModalOpen} setEditModalOpen={setEditModalOpen} handleDelete={handleDelete} />
            <DeleteTodoModal deleteModalOpen={deleteModalOpen} setDeleteModalOpen={setDeleteModalOpen} />
            <AddTodoModal addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen} />
        </div >
    )
}

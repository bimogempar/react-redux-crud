import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditTodoModal from '../Modal/EditTodo'
import DeleteTodoModal from '../Modal/DeleteTodo'
import AddTodoModal from '../Modal/AddTodo'
import { AiOutlineEdit } from "react-icons/ai";
import { updateStatusToDo } from '../../redux/features/todoSlice'

export default function Todo() {
    const { todos } = useSelector(state => state.todos)
    const loading = useSelector(state => state.todos.loading)
    const dispatch = useDispatch()

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

    const handleUpdateStatusTodo = (e) => {
        dispatch(
            updateStatusToDo({
                id: e.id,
                status: e.status === 1 ? 0 : 1 || e.status === 0 ? 1 : 0
            })
        )
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
                                .sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
                                .map((todo) => (
                                    <div key={todo.id} className="flex justify-between space-x-24 border-2 border-gray-200 my-2 p-2">
                                        <div>{todo.title}</div>
                                        <div className='space-x-4'>
                                            <input
                                                type="checkbox"
                                                onChange={() => { handleUpdateStatusTodo(todo) }}
                                            />
                                            <button onClick={() => handleClickEdit(todo)}><AiOutlineEdit /></button>
                                        </div>
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
                                .sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
                                .map((todo) => (
                                    <div key={todo.id} className="flex justify-between space-x-24 border-2 border-gray-200 my-2 p-2">
                                        <div>{todo.title}</div>
                                        <div className='space-x-4'>
                                            <input
                                                type="checkbox"
                                                checked={todo.status === 1}
                                                onChange={() => { handleUpdateStatusTodo(todo) }}
                                            />
                                            <button onClick={() => handleClickEdit(todo)}><AiOutlineEdit /></button>
                                        </div>
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

import { Dialog } from '@headlessui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateToDo } from '../../redux/features/todoSlice'

export default function EditTodo({ editModalOpen, setEditModalOpen, }) {
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [errorResp, setError] = React.useState('')
    const dispatch = useDispatch()

    const handleChangeTitle = (e) => setTitle(e.target.value)
    const handleChangeDescription = (e) => setDescription(e.target.value)

    useEffect(() => {
        setTitle(editModalOpen.todo.title)
        setDescription(editModalOpen.todo.description)
    }, [editModalOpen.todo.description, editModalOpen.todo.title])

    const handleClickUpdateTodo = () => {
        if (title.length !== 0 && description.length !== 0) {
            dispatch(
                updateToDo({
                    id: editModalOpen.todo.id,
                    title: title,
                    description: description,
                    status: editModalOpen.todo.status,
                    createdAt: editModalOpen.todo.createdAt
                })
            )
            setError('')
            setEditModalOpen({
                open: false,
                todo: {}
            })
        } else {
            setError("Please fill all fields")
        }
    }

    return (
        <Dialog
            open={editModalOpen.open}
            onClose={() => {
                setEditModalOpen({
                    open: false,
                    todo: {}
                })
                setError('')
            }}
            className="relative z-50"
        >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                {/* The actual dialog panel  */}
                <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
                    <div className='m-5'>
                        <h1 className='text-2xl font-bold'>Add To Do List</h1>
                        <div className='mt-5'>
                            <div>
                                <label htmlFor="title">Title</label>
                                <input type='text' className='w-full p-2 border border-gray-400' name="title" placeholder='Title' onChange={handleChangeTitle} value={title === undefined ? '' : title} />
                            </div>
                            <div>
                                <label htmlFor="description">Description</label>
                                <input type='text' className='w-full p-2 border border-gray-400' name="description" placeholder='Description' onChange={handleChangeDescription} value={description === undefined ? '' : description} />
                            </div>
                            <div className='flex justify-end my-2'>
                                <button onClick={handleClickUpdateTodo} className='p-1 bg-blue-200'>Update To Do</button>
                            </div>
                            {errorResp && <p className="text-red-500 text-sm mb-5">{errorResp}</p>}
                        </div>
                    </div>
                </Dialog.Panel>
                <button></button>
            </div>
        </Dialog>
    )
}

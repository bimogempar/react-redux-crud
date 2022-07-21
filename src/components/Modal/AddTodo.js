import React from 'react'
import { Dialog } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo } from '../../redux/features/todoSlice'

export default function AddTodo({ addModalOpen, setAddModalOpen, }) {
    const [field, setField] = React.useState({})
    const [errorResp, setError] = React.useState('')
    const dispatch = useDispatch()
    const todoAmount = useSelector(state => state.todos.todos.length)

    function setValue(e) {
        const target = e.target
        const name = target.name
        const value = target.value

        setField({
            ...field,
            [name]: value
        })
    }

    const handleClickAddTodo = () => {
        if (field.title !== undefined && field.description !== undefined) {
            dispatch(
                addToDo({
                    id: todoAmount + 1,
                    title: field.title,
                    description: field.description,
                    status: 0,
                    createdAt: new Date().toISOString()
                })
            )
            setError('')
            setAddModalOpen(false)
        } else {
            setError("Please fill all fields")
        }
    }

    return (
        <Dialog
            open={addModalOpen}
            onClose={() => setAddModalOpen(false)}
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
                                <input type='text' className='w-full p-2 border border-gray-400' name="title" placeholder='Title' onChange={setValue} />
                            </div>
                            <div>
                                <label htmlFor="description">Description</label>
                                <input type='text' className='w-full p-2 border border-gray-400' name="description" placeholder='Description' onChange={setValue} />
                            </div>
                            <div className='flex justify-end my-2'>
                                <button onClick={handleClickAddTodo} className='p-1 bg-blue-200'>Add To Do</button>
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

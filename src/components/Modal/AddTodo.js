import React from 'react'
import { Dialog } from '@headlessui/react'

export default function AddTodo({ addModalOpen, setAddModalOpen, }) {
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
                            <input type='text' className='w-full p-2 border border-gray-400' placeholder='Title' />
                        </div>
                    </div>
                </Dialog.Panel>
                <button></button>
            </div>
        </Dialog>
    )
}

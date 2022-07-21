import { Dialog } from '@headlessui/react'
import React from 'react'

export default function DeleteTodo({ deleteModalOpen, setDeleteModalOpen, }) {
    return (
        <Dialog
            open={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            className="relative z-50"
        >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                {/* The actual dialog panel  */}
                <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
                    <div className='m-5'>
                        <h1 className='text-2xl font-bold'>Edit Todo</h1>
                        Are you sure to delete this todo?
                    </div>
                </Dialog.Panel>
                <button></button>
            </div>
        </Dialog>
    )
}

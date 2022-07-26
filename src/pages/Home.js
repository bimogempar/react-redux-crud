import React from 'react'
import Todo from '../components/Todo/Todo'

export default function Home() {
    return (
        <div className='min-h-screen flex flex-col justify-center'>
            <div className="flex justify-center">
                <h1 className='text-2xl font-bold'>Todo List using React Redux</h1>
            </div>
            <div className="flex justify-center">
                <Todo />
            </div>
        </div>
    )
}

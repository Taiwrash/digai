"use client"

import React, { useState } from 'react';

const Playground = () => {
    const [input, setInput] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(input);
        // Here you can call your function to generate and display records on the domain
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200 px-4 sm:px-0">
            <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col sm:flex-row items-center mb-6">
                    <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                        <label className="block text-gray-500 font-bold mb-1 pr-4" htmlFor="inline-full-name">
                            Email or Domain
                        </label>
                    </div>
                    <div className="w-full sm:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Generate Records
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Playground;
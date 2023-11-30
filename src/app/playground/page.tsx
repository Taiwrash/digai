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
        <div className="flex items-center justify-center h-screen bg-gray-200 sm:p-6">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Email or Domain
                        </label>
                    </div>
                    <div className="md:w-2/3 bg-gray-200">
                        <input
                            className="bg-gray-100 appearance-none border-2 border-[#314a64]-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={input}
                            placeholder='Email Address  Please'
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-[#314a64] hover:bg-[#314a64] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Analyze Now
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Playground;
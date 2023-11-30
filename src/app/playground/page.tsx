"use client"

// import React, { useState } from 'react';

// const Playground = () => {
//     const [input, setInput] = useState('');

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(input);
//         // Here you can call your function to generate and display records on the domain
//     };

//     return (
//         <div className="flex items-center justify-center h-screen bg-gray-200 sm:p-6">
//             <form onSubmit={handleSubmit} className="w-full max-w-sm">
//                 <div className="md:flex md:items-center mb-6">
//                     <div className="md:w-1/3">
//                         <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
//                             Email or Domain
//                         </label>
//                     </div>
//                     <div className="md:w-2/3 bg-gray-200">
//                         <input
//                             className="bg-gray-100 appearance-none border-2 border-[#314a64]-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//                             id="inline-full-name"
//                             type="text"
//                             value={input}
//                             placeholder='Email Address  Please'
//                             onChange={(e) => setInput(e.target.value)}
//                         />
//                     </div>
//                 </div>
//                 <div className="md:flex md:items-center">
//                     <div className="md:w-1/3"></div>
//                     <div className="md:w-2/3">
//                         <button className="shadow bg-[#314a64] hover:bg-[#314a64] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
//                             Analyze Now
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Playground;


import React, { useState } from 'react';

const VerifyComponent = () => {
    interface Data {
        HasSPF: boolean;
        HasMX: boolean;
        HasDMARC: boolean;
        Spf: string;
        DMarc: string;
    }

    const [data, setData] = useState<Data | null>(null);
    const [email, setEmail] = useState('');

    const fetchData = () => {
        fetch('http://127.0.0.1:4040/api/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 px-4 sm:px-0">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full sm:w-1/2 p-2 mb-4 border border-gray-300 rounded"
            />
            <button onClick={fetchData} className="mb-4 bg-[#314a64] hover:bg-[#314a44] text-white font-bold py-2 px-4 rounded">
                Analyze Now
            </button>

            {data ? (
                <div className="w-full sm:w-1/2 p-4 border border-gray-300 rounded bg-white">
                    <p>Sever Authentication and Authorization: {data.HasSPF ? 'Yes' : 'No'}</p>
                    <p>Can Receive Emails: {data.HasMX ? 'Yes' : 'No'}</p>
                    <p>Can Recognise Unauthenticated Emails: {data.HasDMARC ? 'Yes' : 'No'}</p>
                    <p>Recommendation: 1.   Consider gradually transitioning from "none" to a stricter policy, such as "quarantine" or "reject," to enhance email security.</p>
                    <p> 2. Your mail servers are authorized to send emails on behalf of this domain</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default VerifyComponent;
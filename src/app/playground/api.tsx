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
        fetch(`http://localhost:4040/api/verify?email=${email}`)
            .then((response) => response.json())
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
            <button onClick={fetchData} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Analyze Now
            </button>

            {data ? (
                <div className="w-full sm:w-1/2 p-4 border border-gray-300 rounded bg-white">
                    <p>Has SPF: {data.HasSPF ? 'Yes' : 'No'}</p>
                    <p>Has MX: {data.HasMX ? 'Yes' : 'No'}</p>
                    <p>Has DMARC: {data.HasDMARC ? 'Yes' : 'No'}</p>
                    <p>SPF: {data.Spf}</p>
                    <p>DMARC: {data.DMarc}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default VerifyComponent;
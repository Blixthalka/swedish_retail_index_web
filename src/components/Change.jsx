import React, { useEffect, useState } from 'react';


const Change = () => {
    const [change, setChange] = useState(undefined);


    useEffect(() => {
        fetch(`/api/change`)
            .then(i => i.json())
            .then(i => {
                setChange(i)
            })
    }, []);

    if (!change) {
        return (<></>)
    }

    if (change.old.length === 0) {
        return (<></>)
    }

    return (
        <div className="text-white">
            <h3 className="text-gray-400 text-lg mb-3">Indexförändringar</h3>
            <p className="mb-5 text-sm">Visar ändringar av underliggande aktier senaste 6 månaderna.</p>
            <table className='table-fixed'>
                <tr>
                    <th>Inkommande</th>
                    <th>Utgående</th>
                </tr>
                {change.old.map((name, index) => (
                    <tr className='text-sm border border-gray-800 px-5 py-2 hover:border-blue-400 '>
                        <td>{change.new[index]}</td>
                        <td>{name}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Change;

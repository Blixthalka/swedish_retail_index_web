import React from 'react';
import { useState, useEffect } from 'react';
import Button from './Button';

const IncludedStocksTable = ({ className }) => {
    const [showAll, setShowAll] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`/api/instruments`)
            .then(i => i.json())
            .then(i => {
                setData(i)
            })
    }, [])
    const showSize = 10

    const instruments = showAll ? data : data.slice(0, showSize)

    return (
        <div className={className}>
            <h3 className="text-gray-400 text-lg mb-3">Stocks Included</h3>
            <table className="">
                <thead>
                    <tr>
                        <th className="">Name</th>
                        <th className="th-num">Owners</th>
                        <th className="th-num">Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {instruments.map((row) => (
                        <tr>
                            <td>{row.name}</td>
                            <td className="td-num">{new Intl.NumberFormat("en-GB", {minimumFractionDigits: 0}).format(row.owners)}</td>
                            <td className="td-num">{`${new Intl.NumberFormat("se-SE", {minimumFractionDigits: 2}).format(row.weight)} %`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-end">
                <Button text={showAll ? "See Less" : "See All"} className="mt-5" onClick={(e) => setShowAll(!showAll)} />
            </div>
        </div>
    );
}

export default IncludedStocksTable;

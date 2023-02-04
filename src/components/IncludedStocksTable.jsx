import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useNavigate } from "react-router-dom";


const IncludedStocksTable = ({ className }) => {
    const [showAll, setShowAll] = useState(false)
    const [data, setData] = useState([])
    let navigate = useNavigate()


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
            <h3 className="text-gray-400 text-lg mb-3">Underliggande Aktier</h3>
            <table className="">
                <thead>
                    <tr>
                        <th className="th-num hidden sm:table-cell">#</th>
                        <th className="">Namn</th>
                        <th className="th-num">Ägare</th>
                        <th className="th-num">Vikt</th>
                    </tr>
                </thead>
                <tbody>
                    {instruments.map((row, i) => (
                         <tr className="clickable" onClick={(e) => navigate(`/instruments/${row.key}`)}>
                            <td className="td-num hidden sm:table-cell w-0">{i + 1}</td>
                            <td>{row.name}</td>
                            <td className="td-num">{new Intl.NumberFormat("en-GB", {minimumFractionDigits: 0}).format(row.owners)}</td>
                            <td className="td-num">{`${new Intl.NumberFormat("se-SE", {minimumFractionDigits: 2}).format(row.weight)}%`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-end">
                <Button text={showAll ? "See Mindre" : "Se Alla"} className="mt-5" onClick={(e) => setShowAll(!showAll)} />
            </div>
        </div>
    );
}

export default IncludedStocksTable;

import React, { useEffect, useState } from 'react';
import { formatDate } from '../utils/util';
import Chart from './Chart';

function Performance() {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        fetch(`/api/index`)
            .then(i => i.json())
            .then(i => {
                setData(i)
            })
    }, [])

    if (!data) {
        return (<></>)
    }

    return (
        <div>
            <div className="grid sm:grid-cols-2 gap-10 justify-items-center border border-gray-800 p-5 rounded mb-20">
                <div className=''>
                    <p className="text-gray-400 text-sm font-extralight">{formatDate(data.date)}</p>
                    <h4 className="text-4xl font-medium text-white">{`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(data.value)}`}</h4>
                </div>
                <div>
                    <p className="text-gray-400 text-sm font-extralight">Change</p>
                    <h4 className={`text-4xl font-medium ${Number(data.change) >= 0 ? "text-blue-400" : "text-red-400"}`}>{`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2 }).format(data.change)} %`}</h4>
                </div>
            </div>
            <Chart data={data} />
        </div>
    );
}

export default Performance;

import React, { useEffect, useState } from 'react';
import { formatShortDate } from '../utils/util';
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

    const compareDate = (d1, d2) => {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate()
    }

    return (
        <>
            <div>
                <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center sm:justify-items-start items-end gap-5 mb-20">
                    <h4 className="text-6xl font-extralight text-white col-span-2">{`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(data.value)}`}</h4>
                    <div>
                        <p className="text-gray-400 text-sm ">{compareDate(new Date(data.date), new Date()) ? 'i dag':formatShortDate(data.date)}</p>
                        <h4 className={`text-2xl font-medium ${Number(data.last_change) >= 0 ? "text-blue-400" : "text-red-400"}`}>{`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2 }).format(data.last_change)} %`}</h4>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm ">i år</p>
                        <h4 className={`text-2xl font-medium ${Number(data.from_start_change) >= 0 ? "text-blue-400" : "text-red-400"}`}>{`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2 }).format(data.from_start_change)} %`}</h4>
                    </div>
                </div>

                <Chart data={data} />

            </div>
        </>
    );
}

export default Performance;

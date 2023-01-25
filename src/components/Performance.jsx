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

    return (
        <>
            <div>
                <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center sm:justify-items-start gap-5 mb-20 ">
                    <div className=''>
                        <p className="text-gray-400 text-sm">{formatShortDate(data.date)}</p>
                        <h4 className="text-2xl font-medium text-white">{`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(data.value)}`}</h4>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm ">{formatShortDate(data.date)}</p>
                        <h4 className={`text-2xl font-medium ${Number(data.last_change) >= 0 ? "text-blue-400" : "text-red-400"}`}>{`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2 }).format(data.last_change)} %`}</h4>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm ">i år</p>
                        <h4 className={`text-2xl font-medium ${Number(data.from_start_change) >= 0 ? "text-blue-400" : "text-red-400"}`}>{`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2 }).format(data.from_start_change)} %`}</h4>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm ">max</p>
                        <h4 className={`text-2xl font-medium ${Number(data.from_start_change) >= 0 ? "text-blue-400" : "text-red-400"}`}>{`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2 }).format(data.from_start_change)} %`}</h4>
                    </div>
                </div>


                <Chart data={data} />

            </div >
        </>
    );
}

export default Performance;

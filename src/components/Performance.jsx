import React from 'react';
import { formatShortDate } from '../utils/util';
import Chart from './Chart';


function Performance({ graph, setPeroid, period }) {

    if (!graph) {
        return (<></>)
    }

    const periods = [
        { name: "i år", value: "ytd" },
        { name: "6 m", value: "6m" },
        { name: "3 m", value: "3m" },
        { name: "1 m", value: "1m" }
    ]

    const currentPeriod = periods.find(p => p.value === period)
    let currentPeriodName = ""
    if (currentPeriod === undefined) {
        currentPeriodName = "i år"
    } else {
        currentPeriodName = currentPeriod.name
    }

    const compareDate = (d1, d2) => {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate()
    }

    return (
        <>
            <div>
                <div className="grid grid-cols-2 sm:gap-5 gap-10 sm:grid-cols-4 justify-items-center sm:justify-items-start items-end  mb-20">
                    <h4 className="text-6xl font-extralight text-white col-span-2">
                        {`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(graph.value)}`}
                    </h4>
                    <div>
                        <p className="text-gray-400 text-sm ">{compareDate(new Date(graph.date), new Date()) ? 'i dag' : formatShortDate(graph.date)}</p>
                        <h4 className={`text-2xl font-medium ${Number(graph.last_change) >= 0 ? "text-blue-400" : "text-red-400"}`}>
                            {`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2 }).format(graph.last_change)} %`}
                        </h4>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm ">{currentPeriodName}</p>
                        <h4 className={`text-2xl font-medium ${Number(graph.from_start_change) >= 0 ? "text-blue-400" : "text-red-400"}`}>
                            {`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2 }).format(graph.from_start_change)} %`}
                        </h4>
                    </div>
                </div>

                <Chart graph={graph} />
                {setPeroid &&
                    <div className='flex justify-end'>
                        <div className="text-white mt-5 grid gap-2 grid-cols-4">
                            {periods.map((p) => (<Period name={p.name} value={p.value} setPeroid={setPeroid} selected={p.value === period} />))}

                        </div>
                    </div>}

            </div>
        </>
    );
}

const Period = ({ name, value, setPeroid, selected }) => {
    return (
        <button className={`border text-white border-gray-800  text-sm px-2 py-1 rounded hover:bg-gray-800  ${selected && "  border-white"}`} onClick={(E) => setPeroid(value)}>
            {name}
        </button>
    )
}

export default Performance;

import React from 'react';
import { formatShortDate } from '../utils/util';
import Chart from './Chart';


function Performance({ graph, setPeroid, period }) {

    if (!graph) {
        return (<div className='h-96'></div>)
    }

    const periods = [
        { name: "1 m", value: "1m" },
        { name: "3 m", value: "3m" },
        { name: "6 m", value: "6m" },
        { name: "i år", value: "ytd" },
        { name: "1 år", value: "1y" },
        { name: "start", value: "start" },
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
                <div className="grid grid-cols-2 sm:gap-5 gap-10 sm:grid-cols-3 justify-items-center items-end  mb-20">
                    <div className=''>
                        <p className="text-gray-400 text-sm">{"kurs"}</p>
                        <h4 className="text-3xl font-medium text-white ">
                            {`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(graph.value)}`}
                        </h4>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm ">{compareDate(new Date(graph.date), new Date()) ? 'i dag' : formatShortDate(graph.date)}</p>
                        <h4 className={`text-3xl font-medium ${Number(graph.last_change) >= 0 ? "text-blue-400" : "text-red-400"}`}>
                            {`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2 }).format(graph.last_change)}%`}
                        </h4>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm ">{currentPeriodName}</p>
                        <h4 className={`text-3xl font-medium ${Number(graph.from_start_change) >= 0 ? "text-blue-400" : "text-red-400"}`}>
                            {`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2 }).format(graph.from_start_change)}%`}
                        </h4>
                    </div>
                </div>


                <div className=''>
                    <Chart graph={graph} />
                    {setPeroid &&
                        <div className='flex justify-end items-start'>
                            <div className='border-t  border-gray-800 flex-grow' />

                            <div className="text-white grid grid-cols-6 flex-grow-0">
                                {periods.map((p) => (<Period name={p.name} value={p.value} setPeroid={setPeroid} selected={p.value === period} />))}
                            </div>
                        </div>}
                </div>

            </div>
        </>
    );
}

const Period = ({ name, value, setPeroid, selected }) => {
    return (
        <button className={`border-t text-white border-gray-800 w-16 text-sm px-2 py-2 hover:bg-gray-800  ${selected && "  border-white"}`} onClick={(E) => setPeroid(value)}>
            {name}
        </button>
    )
}

export default Performance;

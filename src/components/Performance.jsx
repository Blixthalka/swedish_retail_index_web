import React from 'react';
import { formatShortDate } from '../utils/util';
import Chart from './Chart';


function Performance({ graph }) {

    if (!graph) {
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
                        <p className="text-gray-400 text-sm ">i år</p>
                        <h4 className={`text-2xl font-medium ${Number(graph.from_start_change) >= 0 ? "text-blue-400" : "text-red-400"}`}>
                            {`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 2 }).format(graph.from_start_change)} %`}
                        </h4>
                    </div>
                </div>

                <Chart graph={graph} />

            </div>
        </>
    );
}

export default Performance;

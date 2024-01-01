import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Chart from '../components/Chart';
import Performance from '../components/Performance';


function Instrument() {
    const [state, setState] = useState({ isLoading: true })
    const [period, setPeriod] = useState("1y")
    let params = useParams();


    useEffect(() => {
        fetch(`/api/instruments/${params.key}?period=${period}`)
            .then(resp => {

                if (resp.status !== 200) {
                    throw Error("Not Found");
                }

                return resp.json()
            })
            .then(body => {
                setState({
                    isLoading: false,
                    isFound: true,
                    instrument: body
                })
            },
                error => {
                    setState({
                        error,
                        isLoading: false,
                    })
                });

    }, [params.key, period])

    if (state.isLoading) {
        return (
            <div className="text-white">
                Loading..
            </div>
        )
    } else if (state?.error) {
        return (
            <div className="text-white">
                {state.error.message}
            </div>
        )
    }

    return (
        <div className="my-20 grid gap-20">
            <div className='relative py-10'>
                <h1 className="text-white text-4xl font-bold text-center mb-3">{state.instrument.name}</h1>
                <div className='dots -z-10' />
            </div>

            <div>
                <Performance graph={state.instrument.graph} setPeroid={setPeriod} period={period} />
            </div>
            <div>
                <h3 className="text-gray-400 text-lg mb-3">Ägare</h3>
                <Chart graph={state.instrument.owners} />
                <div className="grid grid-cols-2 gap-10 justify-items-center items-end text-white mt-5">
                    <div>
                        <p className="text-gray-400 text-sm ">{"min"}</p>
                        <h4 className={`text-3xl font-medium`}>
                            {`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 0 }).format(state.instrument.owners.min)}`}
                        </h4>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm ">{"max"}</p>
                        <h4 className={`text-3xl font-medium `}>
                            {`${new Intl.NumberFormat("se-SE", { minimumFractionDigits: 0 }).format(state.instrument.owners.max)}`}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Instrument;

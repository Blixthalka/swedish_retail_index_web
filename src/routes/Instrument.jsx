import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Performance from '../components/Performance';
import BarChart from '../components/BarChart';

function Instrument() {
    const [state, setState] = useState({ isLoading: true })
    const [period, setPeriod] = useState("ytd")
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
            <div>
                <h1 className="text-white text-3xl font-medium mb-3">{state.instrument.name}</h1>
            </div>

            <div>
                <Performance graph={state.instrument.graph} setPeroid={setPeriod} period={period} />
            </div>
            <div>
                <h3 className="text-gray-400 text-lg mb-3">Ägare</h3>
                <BarChart data={state.instrument.owners} />
            </div>
        </div>
    );
}

export default Instrument;

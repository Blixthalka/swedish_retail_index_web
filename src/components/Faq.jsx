import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

const Faq = ({ className }) => {
    const [active, setActive] = useState(undefined)

    const data = [
        {
            q: "Hur viktas indexet?",
            a: <div className="grid gap-3">
                <p>Indexet viktas genom att hämta antal ägare per aktie för de 50 aktier med mest ägare, summera antal ägare för top 50.</p>
                <p>Aktiens ägare / summerade ägare = vikt i procent för aktien.</p>
                <p>Viktas om varje dag. </p>
            </div>,
        },
        {
            q: "Inkluderar indexet utdelning?",
            a: "Nej. Jämförelseindexet, OMXS30, är också valt efter detta.",
        }
    ]


    return (
        <div classname={className}>
            <h3 className="text-gray-400 text-lg mb-3">Vanliga Frågor</h3>
            {data.map((d, index) => (
                <div className={`text-sm border-l border-r border-b border-gray-800 ${index === 0 ? 'border-t' : ''}`}>
                    <div
                        onClick={(e) => setActive(active === index ? undefined : index)}
                        className={`text-white p-3 hover:bg-gray-800 hover:cursor-pointer flex items-center justify-between  `}
                    >
                        <span>{d.q}</span>
                        <PlusIcon className="w-5 h-5" />
                    </div>
                    {index === active && (
                        <div className={`text-gray-400 p-3 border-t border-gray-800`}>
                            {d.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Faq;

import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

const Faq = ({ className }) => {


    return (
        <div classname={className}>
            <h3 className="text-gray-400 text-lg mb-3">How is the index calculated?</h3>
            <div className="text-white text-sm">
                <p className="mb-3">
                    The index started with the value <strong>100</strong> on first of January 2023.
                </p>
                <p className="mb-3">
                    And it's calculated by fetching the 50 most owned stocks each day from <a className="text-blue-400 hover:text-blue-500" href="https://www.avanza.se/aktier/lista.html/jxGl2hfp">Avanza</a>, and weighting them by number of owners.
                    Thus the stocks gets a new weight each day, and might be replaced by another stock that have gained more owners.
                </p>
                <p>
                    The index is calculated in <strong>SEK</strong>. Which means stocks denominated in other currencies will get fx exposure.
                </p>
            </div>
        </div>
    );
}

export default Faq;

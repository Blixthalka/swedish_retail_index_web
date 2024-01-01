import React, { useEffect, useState } from 'react';
import IncludedStocksTable from '../components/IncludedStocksTable';
import Performance from '../components/Performance';
import Change from '../components/Change';
import Faq from '../components/Faq';

function Index() {
  const [index, setIndex] = useState(undefined);
  const [period, setPeriod] = useState('1y')

  useEffect(() => {
      fetch(`/api/index?period=${period}`)
          .then(i => i.json())
          .then(i => {
            setIndex(i)
          })
  }, [period])

  return (
    <div className="my-20 grid gap-20">


      <div className='relative py-10'>
        <h1 className="text-white text-3xl font-extrabold mb-3 z-10 text-center">SWEDISH RETAIL INDEX</h1>
        <h3 className="text-gray-400 text-lg z-10 text-center">Ett aktie-index som består av de 50 mest ägda aktierna av småsparare i Sverige.</h3>
        <div className='dots -z-10'/>
      </div>



      <Performance graph={index?.graph} period={period} setPeroid={setPeriod} />
      <IncludedStocksTable className="" />
      <Change />

      <Faq />
    </div>
  );
}

export default Index;

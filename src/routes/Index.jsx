import React, { useEffect, useState } from 'react';
import IncludedStocksTable from '../components/IncludedStocksTable';
import Performance from '../components/Performance';
import Change from '../components/Change';
import Faq from '../components/Faq';

function Index() {
  const [index, setIndex] = useState(undefined);
  const [period, setPeriod] = useState('ytd')

  useEffect(() => {
      fetch(`/api/index?period=${period}`)
          .then(i => i.json())
          .then(i => {
            setIndex(i)
          })
  }, [period])

  return (
    <div className="my-20 grid gap-20">
      <div>
        <h1 className="text-white text-3xl font-medium mb-3">Swedish Retail Index.</h1>
        <h3 className="text-gray-400 text-lg">Ett aktie-index som består av de 50 mest ägda aktierna av småsparare i Sverige.</h3>
      </div>

      <Performance graph={index?.graph} period={period} setPeroid={setPeriod} />
      <IncludedStocksTable className="" />
      <Change />

      <Faq />
    </div>
  );
}

export default Index;

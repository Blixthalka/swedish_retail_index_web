import React from 'react';
import IncludedStocksTable from '../components/IncludedStocksTable';
import Performance from '../components/Performance';
import Faq from '../components/Faq';

function Index() {
  return (
    <div className="my-20 grid gap-20">
      <div>
        <h1 className="text-white text-3xl font-medium mb-3">Swedish Retail Index.</h1>
        <h3 className="text-gray-400 text-lg">Ett aktie-index som består av de 50 mest ägda aktierna av småsparare i Sverige.</h3>
      </div>

      <Performance />
      <IncludedStocksTable className="" />

      <Faq />
    </div>
  );
}

export default Index;

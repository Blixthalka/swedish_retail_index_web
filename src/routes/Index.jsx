import React from 'react';
import IncludedStocksTable from '../components/IncludedStocksTable';
import Performance from '../components/Performance';

function Index() {
  return (
    <div className="my-20 grid gap-20">
      <div>
        <h1 className="text-white text-3xl font-medium mb-3">Swedish Retail Index.</h1>
        <h3 className="text-gray-400 text-lg">An index consisting of the 50 most owned stocks by retail investors in Sweden.</h3>
      </div>

      <Performance />
      <IncludedStocksTable className="" />
    </div>
  );
}

export default Index;

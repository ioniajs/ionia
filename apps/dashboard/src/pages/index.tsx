import React, { Suspense } from 'react';

const Trend = React.lazy(() => import('./components/Trend'));

export default () => {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Trend />
    </Suspense>
  );
};

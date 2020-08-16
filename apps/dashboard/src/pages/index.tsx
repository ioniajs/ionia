import React, { Suspense } from 'react';

const Trend = React.lazy(() => import('./components/Trend'));

export default () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Trend />
    </Suspense>
  );
};

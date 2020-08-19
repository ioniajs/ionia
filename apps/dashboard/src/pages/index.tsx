import React, { Suspense } from 'react';
import { Loading } from '@ionia/components';

const Trend = React.lazy(() => import('./components/Trend'));

export default () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Trend />
      </Suspense>
    </div>
  );
};

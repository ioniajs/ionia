import React, { Suspense } from 'react';
import { Button } from '@ionia/components';

const Trend = React.lazy(() => import('./components/Trend'));

export default () => {
  return (
    <div>
      <Suspense fallback={<h1>loading...</h1>}>
        <Trend />
      </Suspense>
      <Button />
    </div>
  );
};

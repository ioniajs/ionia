import ChartCol from "@/components/ChartCol";
import { Row } from "antd";
import React from "react";
import { Loading } from "@ionia/libs";
import Loadable from "react-loadable";

const BasicArea = Loadable({
  loader: () => import("./components/Area"),
  loading: () => <Loading />,
  delay: 300,
});

const StackedArea = Loadable({
  loader: () => import("./components/StackedArea"),
  loading: () => <Loading />,
  delay: 300,
});

const PercentStackedArea = Loadable({
  loader: () => import("./components/PercentStackedArea"),
  loading: () => <Loading />,
  delay: 300,
});

const Area = () => {
  return (
    <Row>
      <ChartCol>
        <BasicArea />
      </ChartCol>
      <ChartCol>
        <StackedArea />
      </ChartCol>
      <ChartCol>
        <PercentStackedArea />
      </ChartCol>
    </Row>
  );
};

export default Area;

import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/charts";

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/antfincdn/YdLK%24VvSkW/fireworks-sales.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: "基础面积图",
    },
    data,
    xField: "Date",
    yField: "scales",
    xAxis: {
      type: "dateTime",
      tickCount: 5,
    },
  };
  return <Area {...config} />;
};

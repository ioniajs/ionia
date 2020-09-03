import React, { useState, useEffect } from "react";
import { StackedArea } from "@ant-design/charts";

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch("https://gw.alipayobjects.com/os/antfincdn/A%26Bp9uKRb2/oil.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: "堆叠面积图-areaLabel",
    },
    description: {
      visible: true,
      text:
        "堆叠面积图中\uFF0C将label type设置为area时\uFF0Clabel显示在堆叠区域内\uFF0C使用户能够更容易的通过视觉将label和对应图形产生联系\u3002autoScale配置项设置为true时\uFF0Clabel会自适应堆叠区域的大小\u3002",
    },
    data,
    xField: "date",
    yField: "value",
    stackField: "country",
    color: [
      "#6897a7",
      "#8bc0d6",
      "#60d7a7",
      "#dedede",
      "#fedca9",
      "#fab36f",
      "#d96d6f",
    ],
    xAxis: {
      type: "dateTime",
      tickCount: 5,
    },
    label: {
      visible: true,
      type: "area",
      autoScale: true,
    },
    legend: {
      visible: true,
      position: "right-top",
    },
    responsive: true,
  };
  return <StackedArea {...config} />;
};

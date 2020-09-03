import React, { useState, useEffect } from "react";
import { PercentStackedBar } from "@ant-design/charts";

export default () => {
  const data = [
    {
      country: "Asia",
      year: "1750",
      value: 502,
    },
    {
      country: "Asia",
      year: "1800",
      value: 635,
    },
    {
      country: "Asia",
      year: "1850",
      value: 809,
    },
    {
      country: "Asia",
      year: "1900",
      value: 947,
    },
    {
      country: "Asia",
      year: "1950",
      value: 1402,
    },
    {
      country: "Asia",
      year: "1999",
      value: 3634,
    },
    {
      country: "Asia",
      year: "2050",
      value: 5268,
    },
    {
      country: "Africa",
      year: "1750",
      value: 106,
    },
    {
      country: "Africa",
      year: "1800",
      value: 107,
    },
    {
      country: "Africa",
      year: "1850",
      value: 111,
    },
    {
      country: "Africa",
      year: "1900",
      value: 133,
    },
    {
      country: "Africa",
      year: "1950",
      value: 221,
    },
    {
      country: "Africa",
      year: "1999",
      value: 767,
    },
    {
      country: "Africa",
      year: "2050",
      value: 1766,
    },
    {
      country: "Europe",
      year: "1750",
      value: 163,
    },
    {
      country: "Europe",
      year: "1800",
      value: 203,
    },
    {
      country: "Europe",
      year: "1850",
      value: 276,
    },
    {
      country: "Europe",
      year: "1900",
      value: 408,
    },
    {
      country: "Europe",
      year: "1950",
      value: 547,
    },
    {
      country: "Europe",
      year: "1999",
      value: 729,
    },
    {
      country: "Europe",
      year: "2050",
      value: 628,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: "百分比堆叠条形图",
    },
    data,
    xField: "value",
    yField: "year",
    stackField: "country",
    color: ["#2582a1", "#f88c24", "#c52125", "#87f4d0"],
    label: {
      visible: true,
      formatter: (v) => {
        return v.toFixed(2);
      },
    },
  };
  return <PercentStackedBar {...config} />;
};

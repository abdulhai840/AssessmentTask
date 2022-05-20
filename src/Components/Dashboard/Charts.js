import React from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";
var entries;

export const options = {
    title: "Covid-19 Global Stats",
    is3D: true,
};

export function Charts() {

    const datasets = useSelector((state) => state?.globalData)
    entries = Object.entries(datasets);
    entries.shift();
    return (
        <Chart
            chartType="PieChart"
            data={[["ok", "1"], entries[1], entries[3], entries[5], entries[7], entries[8]]}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    );
}
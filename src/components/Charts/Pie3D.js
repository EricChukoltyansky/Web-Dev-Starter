// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data

// STEP 3 - Creating the JSON object to store the chart configurations

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "pie3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Languages",
        theme: "candy",
        pieRadius: "45%",
        paletteColors: [
          "#FF6633",
          "#FFB399",
          "#FF33FF",
          "#FFFF99",
          "#00B3E6",
          "#E6B333",
          "#3366E6",
          "#999966",
          "#99FF99",
          "#B34D4D",
          "#80B300",
          "#809900",
          "#E6B3B3",
          "#6680B3",
          "#66991A",
          "#FF99E6",
          "#CCFF1A",
          "#FF1A66",
          "#E6331A",
          "#33FFCC",
          "#66994D",
          "#B366CC",
          "#4D8000",
          "#B33300",
          "#CC80CC",
          "#66664D",
          "#991AFF",
          "#E666FF",
          "#4DB3FF",
          "#1AB399",
          "#E666B3",
          "#33991A",
          "#CC9999",
          "#B3B31A",
          "#00E680",
          "#4D8066",
          "#809980",
          "#E6FF80",
          "#1AFF33",
          "#999933",
          "#FF3380",
          "#CCCC00",
          "#66E64D",
          "#4D80CC",
          "#9900B3",
          "#E64D66",
          "#4DB380",
          "#FF4D4D",
          "#99E6E6",
          "#6666FF",
        ],
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};
// STEP 4 - Creating the DOM element to pass the react-fusioncharts component

export default ChartComponent;

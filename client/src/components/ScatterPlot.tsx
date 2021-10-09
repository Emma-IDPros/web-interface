import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { Coord } from "src/api/api";

export type coordArrayObject = {
  x: [] | number[];
  y: [] | number[];
};

interface ScatterPlotProps {
  coords: Coord[] | [];
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({ coords }) => {
  const [coordArrayObject, setCoordArrayObject] = useState<coordArrayObject>({
    x: [],
    y: [],
  });

  useEffect(() => {}, [coords]);

  return (
    <div>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
      />
    </div>
  );
};

export default ScatterPlot;

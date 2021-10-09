import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { Coord } from "src/api/api";
import { deconstructCoords } from "src/utils";

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

  useEffect(() => {
    setCoordArrayObject(deconstructCoords(coords));
  }, [coords]);

  return (
    <div>
      <Plot
        data={[
          {
            x: coordArrayObject.x,
            y: coordArrayObject.y,
            type: "scatter",
            mode: "markers",
            marker: { color: "red" },
          },
        ]}
        layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
      />
    </div>
  );
};

export default ScatterPlot;

import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { Coord } from "src/api/api";
import { deconstructCoords } from "src/utils";

export type coordArrayObject = {
  x: [] | number[];
  y: [] | number[];
  createdAt: [] | number[];
};

interface ScatterPlotProps {
  coords: Coord[] | [];
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({ coords }) => {
  const [coordArrayObject, setCoordArrayObject] = useState<coordArrayObject>({
    x: [],
    y: [],
    createdAt: [],
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
            type: "scattergl",
            mode: "markers",
            marker: { color: coordArrayObject.createdAt },
            colorscale: "RdBu",
          },
        ]}
        layout={{
          width: 600,
          height: 600,
          paper_bgcolor: "#171923",
          plot_bgcolor: "#171923",
          margin: { pad: 0, l: 60, r: 60, t: 60, b: 60 },
        }}
      />
    </div>
  );
};

export default ScatterPlot;

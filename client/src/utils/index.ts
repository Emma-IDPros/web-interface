import { Coord } from "src/api/api";
import { coordArrayObject } from "src/components/ScatterPlot";

export const deconstructCoords = (coords: Coord[] | []): coordArrayObject => {
  let x: number[] | [] = [];
  let y: number[] | [] = [];
  if (coords.length > 0) {
    x = coords.map((coord) => coord.X);
    y = coords.map((coord) => coord.Y);
  }

  return { x, y };
};

export interface Coord {
  id: number;
  createdAt: number;
  X: number;
  Y: number;
}

const link: string = "http://localhost:6969/";

const get = async (endpoint: string) => {
  return (await (await fetch(link + endpoint)).json()) as Promise<any>;
};

export const getCoords = async () => {
  const res: Coord[] | [] = await get("coords");
  return res;
};

export const deleteCoords = async () => {
  get("delete");
};

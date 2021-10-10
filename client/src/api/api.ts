export interface Coord {
  id: number;
  createdAt: number;
  X: number;
  Y: number;
}

export interface DeleteResponse {
  count: number;
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
  const res: DeleteResponse = await get("delete");
  return res;
};

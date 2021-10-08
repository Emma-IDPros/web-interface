import React, { FC, useEffect, useState } from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Coord, deleteCoords, getCoords } from "./api/api";
import CoordTable from "./components/Table";

const App: FC = () => {
  const [coords, setCoords] = useState<Coord[] | []>([]);

  useEffect(() => {
    setInterval(() => {
      getCoords().then((res) => setCoords(res));
    }, 100);
  }, []);

  return (
    <div>
      <VStack justifyContent="center">
        <Button onClick={() => deleteCoords()}>Delete</Button>
        <CoordTable coordList={coords}></CoordTable>
      </VStack>
    </div>
  );
};

export default App;

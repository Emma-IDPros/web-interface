import React, { FC, useEffect, useState } from "react";
import { Button, Switch, VStack } from "@chakra-ui/react";
import { Coord, deleteCoords, getCoords } from "./api/api";
import CoordTable from "./components/Table";
import { FETCH_PERIOD } from "./configs";

const App: FC = () => {
  const [coords, setCoords] = useState<Coord[] | []>([]);
  const [toggleFetch, setToggleFetch] = useState<boolean>(false);

  useEffect(() => {
    if (toggleFetch) {
      setInterval(() => {
        getCoords().then((res) => setCoords(res));
      }, FETCH_PERIOD);
    } else {
      // janky way to clear all intervals
      for (let i = 0; i < 100; i++) {
        window.clearInterval(i);
      }
    }
  }, [toggleFetch]);

  return (
    <div>
      <VStack justifyContent="center">
        <Switch onChange={() => setToggleFetch(!toggleFetch)}></Switch>
        <Button onClick={() => deleteCoords()}>Delete</Button>
        <CoordTable coordList={coords}></CoordTable>
      </VStack>
    </div>
  );
};

export default App;

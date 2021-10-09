import React, { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Switch,
  VStack,
  Text,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { Coord, deleteCoords, getCoords } from "./api/api";
import CoordTable from "./components/Table";
import { FETCH_PERIOD } from "./configs";
import ScatterPlot from "./components/ScatterPlot";

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
      <Flex direction="row" justifyContent="space-evenly" m={4}>
        <Box bgColor="gray.900" borderRadius="lg" p={4}>
          <HStack>
            <Text>Start Recording</Text>
            <Switch
              pt="4.5px"
              onChange={() => setToggleFetch(!toggleFetch)}
            ></Switch>
          </HStack>
        </Box>
        <Box pt="4.5px">
          <Button colorScheme="red" onClick={() => deleteCoords()}>
            Delete Data
          </Button>
        </Box>
      </Flex>
      <Divider my={4}></Divider>
      <HStack justifyContent="center">
        <CoordTable coordList={coords}></CoordTable>
        <ScatterPlot coords={coords}></ScatterPlot>
      </HStack>
    </div>
  );
};

export default App;

import { Thead, Tr, Th, Tbody, Td, Table } from "@chakra-ui/table";
import React from "react";
import { Coord } from "../api/api";

interface TableProps {
  coordList: Coord[] | [];
}

const CoordTable: React.FC<TableProps> = ({ coordList }) => {
  return (
    <div>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>X</Th>
            <Th>Y</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {coordList.map(({ X, Y, createdAt }, idx) => (
            <>
              <Tr key={createdAt}>
                <Td>{X}</Td>
                <Td>{Y}</Td>
                <Td>{createdAt}</Td>
              </Tr>
            </>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default CoordTable;

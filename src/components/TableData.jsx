import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
  Box,
  Button,
  Collapse,
} from '@chakra-ui/react';
import TableCollapse from './TableCollapse';

const TableData = () => {
  return (
    <TableContainer
      border='2px'
      borderColor='#F7FAFC'
    >
      <Table>
        <Thead>
          <Tr bgColor={'#90CDF4'}>
            <Th>
              <Checkbox>Packages</Checkbox>
            </Th>
            <Th>Rate (in sqft)</Th>
            <Th isNumeric>Total</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableCollapse />
          <TableCollapse />
          <TableCollapse />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableData;

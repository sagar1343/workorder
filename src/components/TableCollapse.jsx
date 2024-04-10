import { BiPlus, BiMinus } from 'react-icons/bi';
import { useState } from 'react';
import { Tr, Td, Checkbox, Box, Collapse } from '@chakra-ui/react';
import SubAccordion from './SubAccordion';
const TableCollapse = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Tr>
        <Td>
          <Checkbox>Civil 1</Checkbox>
        </Td>
        <Td>567.80</Td>
        <Td isNumeric>₹ 2986792</Td>
        <Td>
          <Box
            color='cyan'
            onClick={handleToggle}
          >
            {isOpen ? <BiMinus /> : <BiPlus />}
          </Box>
        </Td>
      </Tr>
      <Collapse in={isOpen}>
        <Tr>
          <Td p={0}>
            <SubAccordion />
          </Td>
          <Td>567.80</Td>
          <Td>₹ 2986792</Td>
          <Td></Td>
        </Tr>
      </Collapse>
    </>
  );
};

export default TableCollapse;

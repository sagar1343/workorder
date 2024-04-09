import { BiPlus, BiMinus } from 'react-icons/bi';
import { useState } from 'react';
import { Tr, Td, Checkbox, Box, Button, Collapse } from '@chakra-ui/react';
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
          <Button
            color='green'
            onClick={handleToggle}
          >
            {isOpen ? <BiMinus /> : <BiPlus />}
          </Button>
        </Td>
      </Tr>
      {isOpen && (
        <Tr>
          <Td colSpan={4}>
            <Collapse in={isOpen}>
              <Box>
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user
              </Box>
            </Collapse>
          </Td>
        </Tr>
      )}
    </>
  );
};

export default TableCollapse;

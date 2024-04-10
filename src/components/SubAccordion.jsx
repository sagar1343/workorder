import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
  HStack,
  Spacer,
  Flex,
} from '@chakra-ui/react';

const SubAccordion = () => {
  return (
    <Accordion
      allowToggle
      pl={8}
    >
      <AccordionItem border='0px'>
        <Flex align='center'>
          <Box flexGrow={1}>
            <HStack>
              <Checkbox>Activity 1</Checkbox>
            </HStack>
          </Box>

          <AccordionButton
            w={0}
            _hover={{ bg: '#ffff' }}
          >
            <AccordionIcon />
          </AccordionButton>
        </Flex>
        <AccordionPanel
          pl={10}
          pb={4}
        >
          <HStack>
            <Checkbox>Work Item 1</Checkbox>
            <Spacer />
            <Box>₹ 2986792</Box>
          </HStack>
          <HStack>
            <Checkbox>Work Item 2</Checkbox>
            <Spacer />
            <Box>₹ 2986792</Box>
          </HStack>
          <HStack>
            <Checkbox>Work Item 3</Checkbox>
            <Spacer />
            <Box>₹ 2986792</Box>
          </HStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SubAccordion;

import { BiChevronLeft } from 'react-icons/bi';
import { Icon, Button, Spacer, Flex, HStack, Heading } from '@chakra-ui/react';

const Head = () => {
  return (
    <Flex p='4'>
      <HStack>
        <Icon
          as={BiChevronLeft}
          boxSize={8}
        />
        <Heading size='md'>Create Workorder</Heading>
      </HStack>
      <Spacer />
      <Button
        px='10'
        colorScheme='cyan'
        color='#ffff'
      >
        Save
      </Button>
    </Flex>
  );
};

export default Head;

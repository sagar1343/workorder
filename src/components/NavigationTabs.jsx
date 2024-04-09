import TableData from './TableData';
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
const NavigationTabs = () => {
  return (
    <Tabs>
      <TabList
        color='#8a8a8a'
        w={'35%'}
      >
        <Tab
          w={60}
          fontWeight='bold'
          fontSize='md'
          _selected={{ color: 'black', borderBottom: '2px solid black' }}
        >
          Overview
        </Tab>
        <Tab
          w={60}
          fontWeight='bold'
          fontSize='lg'
          _selected={{ color: 'black', borderBottom: '2px solid black' }}
        >
          Other
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TableData />
        </TabPanel>
        <TabPanel>
          <p>Hello World !</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NavigationTabs;

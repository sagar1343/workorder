import Head from './components/Head';
import NavigationTabs from './components/NavigationTabs';
import { Container } from '@chakra-ui/react';
const App = () => {
  return (
    <>
      <Head />
      <Container maxW='6xl'>
        <NavigationTabs />
      </Container>
    </>
  );
};

export default App;

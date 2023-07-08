import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ChakraProps {
  children: ReactNode;
}

const Chakra: React.FC<ChakraProps> = ({ children }) => (
  <ChakraProvider>
    <CSSReset />
    {children}
  </ChakraProvider>
);

export default Chakra;

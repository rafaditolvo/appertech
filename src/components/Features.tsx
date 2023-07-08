import { Box, Heading, Text, Stack, Container, chakra, useColorModeValue, Grid, Divider, GridItem, Icon  } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi'; // Importando o ícone desejado (neste caso, FiCheckCircle)


interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600" display="flex" alignItems="center">
        <Icon as={FiCheckCircle} mr={2} /> {/* Ícone */}
        {heading}
      </chakra.h3>
      
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Features() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
          {/*<Icon as={FiCheckCircle} mt={20} boxSize={30}  /> {/* Ícone */}
        </Stack>
   
        <Divider mt={2} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'First Feature'}
            text={'Short text describing one of your features/services'}
          />
          <Feature
            heading={'Second Feature'}
            text={'Short text describing one of your features/services'}
          />
          <Feature
            heading={'Third Feature'}
            text={'Short text describing one of your features/services'}
          />
          <Feature
            heading={'Fourth Feature'}
            text={'Short text describing one of your features/services'}
          />
        </Grid>
      </Container>
    </Box>
  );
}

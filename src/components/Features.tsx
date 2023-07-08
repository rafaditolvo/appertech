import { Box, Heading, Text, Stack, Container, chakra, useColorModeValue, Grid, Divider, GridItem, Icon } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <Box
        p={8}
        borderRadius="40px"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="md"

      >
        <chakra.h3 fontSize="xl" fontWeight="600" display="flex" alignItems="center">
          <Icon as={FiCheckCircle} mr={2} />
          {heading}
        </chakra.h3>
        
        <chakra.p>{text}</chakra.p>
      </Box>
    </GridItem>
  );
};

export default function Features() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}        >
      <Container maxW={'4xl'} py={16} as={Stack} spacing={10} >
        <Stack spacing={10} align={'center'} >
          <Heading>Nossos Serviços</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
   
        <Divider  mt={2} mb={10} />
        <Grid
   paddingInlineEnd={0}
          templateColumns={{
            base: 'repeat(4, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={{ base: '12', sm: '12', md: '12' }}
   
        >
          <Feature
          
            heading={'Financeiro'}
            text={'Rotinas financeiras bem construídas e realizadas corretamente são as chaves para uma gestão segura dosrecursos das empresas.'}
          />
          <Feature
            heading={'Contabilidade'}
            text={'Demonstrações contábeis e apuração de impostos são mais consistentes quando são elaboradas por especialistas'}
          />
             <Feature
            heading={'Contas médicas e recursos de glosas'}
            text={'São necessários especialistas e ferramentas para que o faturamento e os recursos de glosas assegurem o correto recebimento dos seus honorários.'}
          />
          <Feature
            heading={'Juridico preventivo e especializado'}
            text={'Um jurídico especializado permite que a empresa seja direcionada nas melhores práticas sem precisar que os problemas aconteçam para serem tratados.'}
          />
          <Feature
            heading={'Recrutamento e Seleção'}
            text={'O bom funcionamento de uma empresa da área saúde e a qualidade da jornada do paciente passam por uma boa formação de equipe.'}
          />
         
        
          <Feature
            heading={'Controladoria'}
            text={'Construa seu planejamento orçamentário e acompanhe seus indicadores para conseguir dimensionar de forma inteligente os resultados da sua empresa.  '}
          />
        </Grid>
      </Container>
    </Box>
  );
}

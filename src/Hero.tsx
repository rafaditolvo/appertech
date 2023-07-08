
import { chakra, Box, useColorModeValue, Icon, Image, Button, Stack } from "@chakra-ui/react";

export default function Hero(){
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box pos="relative" overflow="hidden" bg={bg} >
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{ base: "9xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 38 }}
          >
            <Box
              w="100%"
              textAlign={{ sm: "center", lg: "left" }}
         
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
                w="100%"
                letterSpacing="tight"
                //lineHeight="short"
                fontWeight="extrabold"
                color="gray.900"
                _dark={{ color: "white" }}
              >
                <chakra.span       display={{ base: "block", xl: "inline" }}>
                Solucão completa para o{" "}
                </chakra.span>
                <chakra.span
                  display={{ base: "block", xl: "inline" }}
                  color="teal.300"
                  _dark={{ color: "brand.400" }}
                >
                   controle de médicos, clínicas e consultórios
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color="gray.500"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </chakra.p>
              <Stack spacing={9} mt={10} direction={'row'}>
                <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={"teal.300"}
              _hover={{ bg: 'blackAlpha.500' }}>
              Get started
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
             >
              How It Works
            </Button>
              
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 100 }}
        w={{ lg: "40%" }}
        border="solid 1px transparent"
      >
        <Image
         // h={[56, 72, 96, "full"]}
  
          //fit="fill"
          src="https://www.appermed.com.br/images/banner.png"
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
  );
};


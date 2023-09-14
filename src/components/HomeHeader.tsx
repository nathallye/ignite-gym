import { Heading, HStack, Text, VStack } from "native-base";

import { UserPhoto } from "./UsePhoto";

export const HomeHeader = () => {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md">
          Nathallye
        </Heading>

        <UserPhoto
          source={{ uri: 'https://github.com/nathallye.png' }}
          size={16}
          alt="Imagem do usuário"
          mr={4}
        />
      </VStack>
    </HStack>
  );
};
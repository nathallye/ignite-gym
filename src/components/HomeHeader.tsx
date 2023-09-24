import React from "react";

import { TouchableOpacity } from "react-native";
import { Heading, HStack, Text, VStack } from "native-base";
import { SignOut } from 'phosphor-react-native';

import { UserPhoto } from "./UserPhoto";

export const HomeHeader = () => {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: 'https://github.com/nathallye.png' }}
        size={16}
        alt="Imagem do usuário"
        mr={4}
      />

      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md">
          Nathallye
        </Heading>

        <TouchableOpacity>
          <SignOut
            color="gray.200"
            size={7}
          />
        </TouchableOpacity>
      </VStack>
    </HStack>
  );
};
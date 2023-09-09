import { VStack, Image, Text, Center,Heading } from "native-base";

import LogoSvg from "../assets/img/logo.svg";
import BackgroundImg from "../assets/img/background.png";

import { Input } from "../componets/Input";
import { Button } from "../componets/Button";

export const SignIn = () => {
  return (
    <VStack flex={1} bg="gray.700" px={10}>
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />

        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo.
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Acesse a conta
        </Heading>
      </Center>

      <Input 
          placeholder="E-mail" 
          keyboardType="email-address"
          autoCapitalize="none"

      />

      <Input 
        placeholder="Senha" 
        secureTextEntry
      />

      <Button title="Acessar" />
      <Button title="Criar conta" variant="outline" />
    </VStack>
  );
};

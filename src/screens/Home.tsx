import { Text, VStack } from "native-base";

import { HomeHeader } from "@components/HomeHeader";

export const Home = () => {
  return (
    <VStack flex={1}>
      <HomeHeader />
    </VStack>
  );
};
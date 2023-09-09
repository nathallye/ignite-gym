import { Input as NativeBaseInput, IInputProps } from "native-base";

export const Input = ({ ...rest }: IInputProps) => {
  return (
    <NativeBaseInput 
      bg="gray.700"
      borderWidth={0}
      h={14}
      mb={4}
      px={4}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        bgColor: 'gray.700',
        borderWidth: 1,
        borderColor: 'green.500'
      }}
      {...rest}
    />
  );
};
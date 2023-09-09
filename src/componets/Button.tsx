import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type ButtonProps = IButtonProps & {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <ButtonNativeBase
      bg="green.700"
      h={14}
      w="full"
      rounded="sm"
      _pressed={{
        bg: "green.500"
      }}
      {...rest}
    >
      <Text 
        color="white" 
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
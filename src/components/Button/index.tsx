import { Container, Icon, LeftText, Title } from "./styles";

interface ButtonProps {
  title: string;
  onClick: () => void;
  leftIcon?: string;
  leftText?: string;
  fontSize?: number;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  leftIcon,
  leftText,
  fontSize,
}) => {
  return (
    <Container onClick={() => onClick()}>
      {leftIcon && <Icon src={leftIcon} />}
      {leftText && <LeftText>{leftText}</LeftText>}
      <Title fontSize={fontSize}>{title}</Title>
    </Container>
  );
};

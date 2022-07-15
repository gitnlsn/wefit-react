import styled from "styled-components";

interface ContainerProps {
  shrinkHeight?: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 41px;

  width: 734.41px;
  height: ${({ shrinkHeight }) => (shrinkHeight ? "auto" : "629.18px")};

  border-radius: 4px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 10px 12px 12px;

  > .button-wrapper {
    margin-top: 35px;
  }
`;

export const Title = styled.h1`
  margin-top: 62px;

  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #2f2e41;
`;

export const Image = styled.img`
  width: 178.63px;
  height: 264px;

  margin-top: 49px;
`;

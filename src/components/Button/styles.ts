import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px;

  min-width: 180px;
  width: min-content;
  height: 40px;

  justify-content: center;
  align-items: center;

  background-color: #009edd;
  border-radius: 4px;
  cursor: pointer;
`;

export const Title = styled.p<{ fontSize?: number }>`
  font-weight: 700;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  line-height: 16px;
  text-align: center;

  color: #ffffff;
  white-space: nowrap;
`;

export const Icon = styled.img`
  margin-right: 5px;

  width: 11.42px;
  height: 11.9px;
`;

export const LeftText = styled.p`
  margin-right: 12px;

  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;
`;

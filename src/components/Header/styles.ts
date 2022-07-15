import styled from "styled-components";

export const Container = styled.header`
  width: 734px;
  height: 72px;
  padding: 11.74px;

  background-color: #2f2e41;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MyCartArea = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  align-items: center;

  img {
    margin-left: 9.33px;
    width: 29.32px;
    height: 25.31px;
  }
`;

export const MyCartTextArea = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 0px;
  align-items: flex-end;
`;

export const LogoTitle = styled.h3`
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
  color: #fff;
`;

export const MyCartTitle = styled.h3`
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.07px;
  color: #fff;
`;

export const ItemsQuantity = styled.h4`
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
  color: #999999;
`;

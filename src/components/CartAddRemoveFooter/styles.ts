import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  /* align-items: center; */

  justify-content: space-between;

  > .total-section {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 4px;
    h1 {
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      color: #999999;
    }

    h3 {
      font-weight: 700;
      font-size: 24px;
      color: #2f2e41;
    }
  }
`;

export const HorizontalLine = styled.div`
  margin-top: 15px;
  margin-bottom: 12px;

  width: 712px;
  height: 1px;

  background: #999999;
`;

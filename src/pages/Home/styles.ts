import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  height: 800px;

  background-color: #2f2e41;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieListWrapper = styled.div`
  width: 734px;
  height: 629.18px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  > div {
    margin: 7px 7px;
  }
`;

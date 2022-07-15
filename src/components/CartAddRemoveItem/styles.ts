import styled from "styled-components";

export const Container = styled.div`
  width: 712px;
  height: 130px;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 8px 36px 8px 0px;

  > img {
    width: 90px;
    height: 114px;
  }

  > .product-section {
    margin-left: 55px;
    p {
      width: 119px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      color: #2f2e41;
      margin-top: 4px;
    }
  }

  > .inc-dec-section {
    margin-left: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;

    .icon {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }

  > .subtotal-section {
    margin-left: 85px;
    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      color: #2f2e41;
    }
  }

  > .remove-button-section {
    margin-left: 101px;
    > img {
      width: 14px;
      height: 18px;
      cursor: pointer;
    }
  }
`;

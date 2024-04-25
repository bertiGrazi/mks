import { useLocalStorage } from "@/hooks/useLocalStorage";

import { CartIcon } from "./cart-icon";

import styled from "styled-components";

const Container = styled.div`
  position: relative;

  width: 90px;
  height: 45px;

  border-radius: 8px;

  margin-left: 16px;
  
  background: #ffffff;
`

const CartCount = styled.span`
    font-size: 18px;
    font-weight: 700;
    line-height: 21.94px;
    text-align: left;
    position: absolute;

    color: #000000;
`

export function CartControl() {
  const { value } = useLocalStorage('cart-items')

  return (
    <Container>
      <CartIcon />
      {Array.isArray(value) && <CartCount>{value.length}</CartCount>}
    </Container>  
  )
}
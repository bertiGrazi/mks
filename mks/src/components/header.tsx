"use client"

import styled from "styled-components"
import { PrimaryInputWithSearchIcon } from "./primary-input"
import { CartControl } from "./car-control"

interface HeaderProps {

}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
`

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo>Capputeeno</Logo>
      <div>
        <PrimaryInputWithSearchIcon placeholder="Procurando algo em específico?" />
        <CartControl />
      </div>
    </TagHeader>
  )
}
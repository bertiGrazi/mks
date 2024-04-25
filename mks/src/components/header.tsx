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
  background: var(--bg-logo-color)
`

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
`
const LogoSecondName = styled.a`
  color: var(--logo-color);
  font-size: 20px;
  font-weight: 300;
  line-height: 19px;
  text-align: left;
  padding-left: 16px;
`

const Container = styled.div`
  display: flex;
`

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo>MKS<LogoSecondName>Sistemas</LogoSecondName></Logo>
      <Container>
        {/*
          <PrimaryInputWithSearchIcon placeholder="Procurando algo em específico?" />
        */}
        <CartControl />
      </Container>
    </TagHeader>
  )
}
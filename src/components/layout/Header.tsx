import * as React from 'react'
import styled from '../../utils/styled'
import Container from './Container'

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <Wrapper>
    <HeaderInner>
      <HeaderLeft>
        <Title>{title}</Title>
      </HeaderLeft>
    </HeaderInner>
  </Wrapper>
)

export default Header

const Wrapper = styled('header')`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.headings};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

const HeaderLeft = styled('div')`
  padding-right: 1rem;
`

const Title = styled('h2')`
  margin: 0;
  font-weight: 500;
`

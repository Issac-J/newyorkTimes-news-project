import styled from "styled-components";

const Header = () => {
  return (
    <HeaderDiv>
      <StyledNavLink>Home</StyledNavLink>
      <StyledNavLink>Clip</StyledNavLink>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 50px;
  background: #fff;
`;

const StyledNavLink = styled.div`
  border: none;
  background: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2563eb;
  cursor: pointer;
  padding: 30px;
  text-decoration: none;

  &:active,
  &:hover {
    border-bottom: 2px solid #2563eb;
  }

  &.active {
    border-bottom: 2px solid #2563eb;
  }
`;

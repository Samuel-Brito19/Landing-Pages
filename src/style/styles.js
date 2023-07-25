import styled, { css } from 'styled-components';


export const Wrap = styled.div`
  ${({ theme }) => css`
    background: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
  `}
`;

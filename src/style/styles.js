import styled, { css } from 'styled-components';


export const Wrap = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
  `}
`;

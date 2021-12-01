import styled from '@emotion/styled'

export const Circle = styled.span`
  border-radius: 50%;
  background: ${props => props.theme.colors[props.color]};
  color: ${({ theme }) => theme.colors.textSecondary};
  height: 340px;
  width: 340px;
  position: relative;
  aspect-ratio: 1;
`

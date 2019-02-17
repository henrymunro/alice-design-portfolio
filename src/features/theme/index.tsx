//@flow

import styled, { css } from "styled-components";

import { ThemeName as ThemeNameType, getThemeColor } from "src/utils/theme";

export type ThemeName = ThemeNameType;

type Props = {
  themeName: ThemeName;
};

export const ThemeBackground = styled.div<Props>`
  ${props => css`
    background: ${getThemeColor(props.themeName)};
  `}
`;

export const ThemeText = styled.div<Props>`
  ${props => css`
    color: ${getThemeColor(props.themeName)};
  `}
`;

//@flow

import styled, { css } from "styled-components";

import {
  ThemeName as ThemeNameType,
  getThemeColor,
  getThemeRGB
} from "src/utils/theme";

export type ThemeName = ThemeNameType;

type Props = {
  themeName: ThemeName;
};

export const ThemeBackground = styled.div<Props>`
  ${props => css`
    background: ${getThemeColor(props.themeName)};
  `}
`;

export const ThemeBackgroundFilterOnHover = styled.div<Props>`
  background: transparent;
  transition: 0.3s;

  &:hover {
    ${props => css`
      background: rgba(${getThemeRGB(props.themeName)}, 0.8);
    `};
  }
`;

export const ThemeText = styled.div<Props>`
  ${props => css`
    color: ${getThemeColor(props.themeName)};
  `}
`;

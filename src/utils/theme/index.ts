interface ThemesInterface<T> {
  home: T;
  animation: T;
}

export const themes: ThemesInterface<string> = Object.freeze({
  home: "red",
  animation: "blue"
});

export type ThemeName = keyof ThemesInterface<any>;

export function getThemeColor(themeName: ThemeName) {
  return themes[themeName];
}

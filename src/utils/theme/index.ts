interface ThemesInterface<T> {
  home: T;
  animation: T;
}

export const themes: ThemesInterface<{
  name: string;
  rgb: string;
}> = Object.freeze({
  home: { name: "red", rgb: "255, 0, 0" },
  animation: { name: "blue", rgb: "0, 0, 255" }
});

export type ThemeName = keyof ThemesInterface<any>;

export function getThemeColor(themeName: ThemeName) {
  return themes[themeName].name;
}

export function getThemeRGB(themeName: ThemeName) {
  return themes[themeName].rgb;
}

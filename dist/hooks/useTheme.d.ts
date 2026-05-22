import { ThemeType } from '../types';

export declare function useTheme(initialTheme?: ThemeType): {
    theme: ThemeType;
    setTheme: (newTheme: ThemeType) => void;
    themeConfig: import('..').IThemeConfig;
};

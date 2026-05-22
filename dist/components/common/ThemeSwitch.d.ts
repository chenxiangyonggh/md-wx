import { ThemeType } from '../../types';

interface ThemeSwitchProps {
    theme: ThemeType;
    onChange: (theme: ThemeType) => void;
}
export default function ThemeSwitch({ theme, onChange }: ThemeSwitchProps): import("react/jsx-runtime").JSX.Element;
export {};

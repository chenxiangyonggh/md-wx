import { ThemeType, ViewMode } from '../types';

interface SettingsBarProps {
    theme: ThemeType;
    viewMode: ViewMode;
    onThemeChange: (theme: ThemeType) => void;
    onViewModeChange: (viewMode: ViewMode) => void;
    onCopy: () => void;
}
export default function SettingsBar({ theme, viewMode, onThemeChange, onViewModeChange, onCopy, }: SettingsBarProps): import("react/jsx-runtime").JSX.Element;
export {};

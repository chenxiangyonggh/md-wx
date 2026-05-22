import { ViewMode } from '../../types';

interface ViewSwitchProps {
    viewMode: ViewMode;
    onChange: (viewMode: ViewMode) => void;
}
export default function ViewSwitch({ viewMode, onChange }: ViewSwitchProps): import("react/jsx-runtime").JSX.Element;
export {};

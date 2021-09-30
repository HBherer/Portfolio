import { SupportedThemes } from "../../../contents/components/ThemeSelect";

export const toggleTheme = (theme: SupportedThemes ) => {
    return async (dispatch: Function) => {
        if (theme === SupportedThemes.LIGHT) {
            dispatch({ type: "ENABLE_LIGHT"});
        } else {
            dispatch({ type: "ENBLE_DARK"});
        }
    };
};
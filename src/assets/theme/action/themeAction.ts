import { SupportedThemes } from "../../../contents/components/ThemeSelect";

export const toggleTheme = (theme: SupportedThemes) => {
    return async (dispatch: Function) => {
      if (theme === SupportedThemes.DARK) {
        dispatch({ type: "ENABLE_DARK" });
      } else {
        dispatch({ type: "ENABLE_LIGHT" });
      }
    };
  };
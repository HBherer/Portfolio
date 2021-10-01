import { SupportedThemes } from "./../components/ThemeSelect";

type Action = { type: string };

const initialState: { theme: SupportedThemes } = {
  theme: SupportedThemes.DARK,
};

const themeReducer = (
  state: { theme: SupportedThemes } = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ENABLE_LIGHT":
      return { ...state, theme: SupportedThemes.LIGHT };
    case "ENABLE_DARK":
      return { ...state, theme: SupportedThemes.DARK };
    default:
      return state;
  }
};

export default themeReducer;

import { SupportedThemes } from "../components/ThemeSelect";

type Action = { type: string };

const initialState: { theme: SupportedThemes } = {
  theme: SupportedThemes.DARK,
};

const themeReducer = (
  state: { theme: SupportedThemes } = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ENABLE_DARK":
      return { ...state, theme: SupportedThemes.DARK };
    case "ENABLE_LIGHT":
      return { ...state, theme: SupportedThemes.LIGHT };
    default:
      return state;
  }
};

export default themeReducer;
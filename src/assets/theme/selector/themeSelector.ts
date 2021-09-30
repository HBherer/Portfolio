import { createSelector } from "reselect";

const themeSelector = (state: any) => state.theme.theme;
const getTheme = createSelector(themeSelector, (theme) => theme);

export { getTheme };
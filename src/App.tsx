import React from 'react';
import './assets/sass/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavigator from "../src/contents/router/AppNavigator";
import { connect } from "react-redux"
import { getTheme } from './assets/theme/selector/themeSelector';
import { SupportedThemes } from "../src/contents/components/ThemeSelect";
import { I18nextProvider } from "react-i18next";
import i18n from "./assets/i18n";
interface Props {
  theme: SupportedThemes
}

function App(props: Props) {
  const clickEffect = (e: any) => {
    const d = document.createElement("div");
    d.className = "clickEffectDark";
    d.style.top = e.clientY + "px"; d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener('animationend', function () { d.parentElement!.removeChild(d); });
  }
  document.addEventListener('click', clickEffect);
  return (
    <I18nextProvider i18n={i18n} >
      <Router>
        <AppNavigator />
      </Router>
    </I18nextProvider>

  );
}

const mapStateToProps = (state: any) => {
  return {
    theme: getTheme(state),
  }
}

export default connect(mapStateToProps)(App);


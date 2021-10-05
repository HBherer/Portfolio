import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleTheme } from "../../assets/theme/action/themeAction"
import { getTheme } from "../../assets/theme/selector/themeSelector"
import { useTranslation } from "react-i18next";

export enum SupportedThemes {
    DARK = "DARK",
    LIGHT = "LIGHT"
    
}

interface Props {
    theme: any;
    actions: {
        toggleTheme: (theme: SupportedThemes) => void;
    }
}

const ThemeSelect = (props: Props) => {
    const { t } = useTranslation("general");
    const [theme, setTheme] = useState<SupportedThemes>(SupportedThemes.DARK)

    const handleChange = (event: any) => {
        const newTheme = event.target.value;

        setTheme(newTheme);
        props.actions.toggleTheme(newTheme);
    }

    return (
        <form>
            <label className="themeSelectLebel" htmlFor="themeSelect">Thème</label>
            <select id="themeSelect" name="themeSelect" value={theme} onChange={handleChange}>
                <option value={SupportedThemes.DARK}>{t("dark")}</option>
                <option value={SupportedThemes.LIGHT}>{t("light")}</option>
            </select>
        </form>
    )
}

const mapStateToProps = (state: any) => {
    return {
        theme: getTheme(state)
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators({
            toggleTheme: toggleTheme,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelect);
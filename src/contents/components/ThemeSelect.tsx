import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleTheme } from "../../assets/theme/action/themeAction"
import { getTheme } from "../../assets/theme/selector/themeSelector"

export enum SupportedThemes {
    DARK,
    LIGHT
}

interface Props {
    theme: any;
    actions: {
        toggleTheme: (theme: SupportedThemes) => void;
    }
}

const ThemeSelect = (props: Props) => {
    const [theme, setTheme] = useState<SupportedThemes>(SupportedThemes.DARK)

    const handleChange = (event: any) => {
        const newTheme = event.target.value;

        setTheme(newTheme);
        props.actions.toggleTheme(newTheme);
    }

    return (
        <div>
            <form>
                <label htmlFor="themeSelect">Thème</label>
                <select id="themeSelect" name="themeSelect" value={theme} onChange={handleChange}>
                    <option value={SupportedThemes.DARK}>Sombre</option>
                    <option value={SupportedThemes.LIGHT}>Claire</option>
                </select>
            </form>
        </div>
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
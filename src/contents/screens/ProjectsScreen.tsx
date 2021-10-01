import React from "react";
import logo from '../../logo.svg';
import { connect } from "react-redux"
import { getTheme } from "../../assets/theme/selector/themeSelector";
import { SupportedThemes } from "../components/ThemeSelect";

interface Props {
    theme: SupportedThemes
}

const ProjectsScreen = (props: Props) => {
    const getColor = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "#1E1E1E"
        }
        else {
            return "#DBDBDB"
        }
    }

    return (
        <>
            <main className="App-header" style={{ backgroundColor: getColor() }}>
                <p>Project</p>
                <img src={logo} className="App-logo" alt="logo" />
            </main>
        </>

    )
}

const mapStateToProps = (state: any) => {
    return {
        theme: getTheme(state),
    }
}

export default connect(mapStateToProps, () => { })(ProjectsScreen);
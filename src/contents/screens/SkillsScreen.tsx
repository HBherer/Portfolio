import React from "react";

import { connect } from "react-redux"
import { getTheme } from "../../assets/theme/selector/themeSelector";
import { SupportedThemes } from "../components/ThemeSelect";
import "../../assets/sass/App.scss"
import Header from "../components/Header";
import FooterLegal from '../components/FooterLegal';


interface Props {
    theme: SupportedThemes
}

const SkillsScreen = (props: Props) => {
    const getColor = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "darkMain"
        }
        else {
            return "lightMain"
        }
    }

    return (
        <div className={getColor()}>
            <Header />
            <main >
                
            </main>
            <FooterLegal />
        </div>

    )
}

const mapStateToProps = (state: any) => {
    return {
        theme: getTheme(state),
    }
}

export default connect(mapStateToProps, () => { })(SkillsScreen);
import React from "react";
import { connect } from "react-redux"
import { SupportedThemes } from "./ThemeSelect";
import { getTheme } from "../../assets/theme/selector/themeSelector";
import ThemeSelect from "./ThemeSelect";
import "../../assets/sass/footer.scss"

interface Props {
    theme: SupportedThemes
}

const FooterLegal = (props: Props) => {

    return (
            <footer className="fo">
                <p>Copyright © 2021 Hans Bherer Tous droits réservés.</p>
                <ThemeSelect />
            </footer>
    )
}

const mapStateToProps = (state: any) => {
    return {
        theme: getTheme(state),
    }
}

export default connect(mapStateToProps, () => { })(FooterLegal);
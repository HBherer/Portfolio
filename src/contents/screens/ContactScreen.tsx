import React from "react";
import { connect } from "react-redux"
import { getTheme } from "../../assets/theme/selector/themeSelector";
import { SupportedThemes } from "../components/ThemeSelect";
import "../../assets/sass/App.scss"
import Header from "../components/Header";
import HambergerMenu from "../components/HambergerMenu";
import FooterLegal from '../components/FooterLegal';
import "../../assets/sass/animation.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


interface Props {
    theme: SupportedThemes
}

const Contact = (props: Props) => {
    const { t } = useTranslation("general");
    const getColor = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "darkMain"
        }
        else {
            return "lightMain"
        }
    };
    const getColorAnime1 = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "animText1Dark"
        }
        else {
            return "animText1Light"
        }
    };
    const getColorAnime2 = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "animText2Dark"
        }
        else {
            return "animText2Light"
        }
    };
    const getColorAnime3 = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "animText3Dark"
        }
        else {
            return "animText3Light"
        }
    };
    const getColorAnime4 = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "animText4Dark"
        }
        else {
            return "animText4Light"
        }
    };
    return (
        <div className={getColor()}>
            <HambergerMenu />
            <Header />
            <div className="wrapperAnim">
                <span className={getColorAnime1()}>DEV WEB - DEV WEB - </span>
                <span className={getColorAnime2()}>DEV WEB - DEV WEB - </span>
                <span className={getColorAnime3()}>DEV WEB - DEV WEB - </span>
                <span className={getColorAnime4()}>DEV WEB - DEV WEB - </span>
            </div>
            <section className="containerAbout main">
                <h1 className="title">{t("rankDev")}</h1>
                <article className="containerAboutRight">
                    <p className="firstLine">{t("salutation1")}<span>{t("salutation2")}</span>{t("salutation3")}</p>
                    <p className="secondLine">{t("presentation")}</p>
                    <Link className="btnContact" to="/contact">{t("contact")}</Link>
                </article>
            </section>
            <FooterLegal />
        </div>

    )
}

const mapStateToProps = (state: any) => {
    return {
        theme: getTheme(state),
    }
}

export default connect(mapStateToProps)(Contact);
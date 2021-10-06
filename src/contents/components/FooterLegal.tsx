import React from "react";
import { connect } from "react-redux"
import { SupportedThemes } from "./ThemeSelect";
import { getTheme } from "../../assets/theme/selector/themeSelector";
import ThemeSelect from "./ThemeSelect";
import "../../assets/sass/footer.scss"
import avatar from "../../assets/images/Tête_heureuxSVG.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
    theme: SupportedThemes
}

const FooterLegal = (props: Props) => {
    const { t } = useTranslation("general");
    const getColor = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "footerDark"
        }
        else {
            return "footerLight"
        }
    };
    const getLinkColor = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "LinkFooterDark"
        }
        else {
            return "LinkFooterLight"
        }
    };

    return (
        <footer className={getColor()}>
            <section className="sectionFooter">
                <article className="LogoFooter">
                    <img src={avatar} alt="Avatare"></img>
                    <p>Hans Bherer</p>
                </article>
                <article className="infoFooter">
                    <h3>{t("content")}</h3>
                    <ul>
                        <li className="li"><Link className={getLinkColor()} to="/">{t("about")}</Link></li>
                        <li className="li"><Link className={getLinkColor()} to="/skills">{t("skill")}</Link></li>
                        <li className="li"><Link className={getLinkColor()} to="/projects">{t("project")}</Link></li>
                        <li className="li"><a className={getLinkColor()} href="mailto:1hansbherer@gmail.com">{t("contact")}</a></li>
                    </ul>
                </article>
                <article className="infoFooter">
                    <h3>{t("SM")}</h3>
                    <ul>
                        <li className="li"><a className={getLinkColor()} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hans-bherer-b566731b4/">Linkedin</a></li>
                        <li className="li"><a className={getLinkColor()} target="_blank" rel="noreferrer" href="https://github.com/HBherer">GitHub</a></li>
                        <li className="li"><a className={getLinkColor()} target="_blank" rel="noreferrer" href="https://gitlab.com/H.Bherer">GitLab</a></li>
                    </ul>
                </article>
                <article className="infoFooter">
                    <h3>{t("ref")}</h3>
                    <ul>
                        <li className="li"><a className={getLinkColor()} target="_blank" rel="noreferrer" href="https://www.flaticon.com/">Flaticon</a></li>
                        <li className="li"><a className={getLinkColor()} target="_blank" rel="noreferrer" href="https://icons8.com/">Icons8</a></li>
                    </ul>
                </article>
                <article className="infoFooter">
                    <ThemeSelect />
                </article>
            </section>

            <section className="legal">
                <p>{t("legal")}</p>
            </section>
        </footer>
    )
}

const mapStateToProps = (state: any) => {
    return {
        theme: getTheme(state),
    }
}

export default connect(mapStateToProps)(FooterLegal);
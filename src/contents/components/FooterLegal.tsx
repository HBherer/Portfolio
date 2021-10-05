import React from "react";
import { connect } from "react-redux"
import { SupportedThemes } from "./ThemeSelect";
import { getTheme } from "../../assets/theme/selector/themeSelector";
import ThemeSelect from "./ThemeSelect";
import "../../assets/sass/footer.scss"
import avatar from "../../assets/images/Tête_heureuxSVG.svg";
import { Link } from "react-router-dom";

interface Props {
    theme: SupportedThemes
}

const FooterLegal = (props: Props) => {
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
                    <h3>Contenu</h3>
                    <ul>
                        <li className="li"><Link className={getLinkColor()} to="/">À Propos</Link></li>
                        <li className="li"><Link className={getLinkColor()} to="/skills">Compétence</Link></li>
                        <li className="li"><Link className={getLinkColor()} to="/projects">Réalisation</Link></li>
                        <li className="li"><Link className={getLinkColor()} to="/contact">Contacter</Link></li>
                    </ul>
                </article>
                <article className="infoFooter">
                    <h3>Réseaux sociaux</h3>
                    <ul>
                        <li className="li"><Link className={getLinkColor()} to="/">Linkedin</Link></li>
                        <li className="li"><Link className={getLinkColor()} to="/skills">GitHub</Link></li>
                        <li className="li"><Link className={getLinkColor()} to="/contact">GitLab</Link></li>
                    </ul>
                </article>
                <article className="infoFooter">
                    <h3>Référence</h3>
                    <ul>
                        <li className="li"><Link className={getLinkColor()} to="/">Flaticon</Link></li>
                        <li className="li"><Link className={getLinkColor()} to="/skills">Icons8</Link></li>
                    </ul>
                </article>
                <article className="infoFooter">
                    <ThemeSelect />
                </article>
            </section>

            <section className="legal">
                <p>Copyright © 2021 Hans Bherer Tous droits réservés.</p>
                <section>Langue</section>
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
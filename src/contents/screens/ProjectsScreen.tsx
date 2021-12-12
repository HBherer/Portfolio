import React from "react";
import { connect } from "react-redux"
import { getTheme } from "../../assets/theme/selector/themeSelector";
import { SupportedThemes } from "../components/ThemeSelect";
import "../../assets/sass/App.scss"
import Header from "../components/Header";
import FooterLegal from '../components/FooterLegal';
import HambergerMenu from "../components/HambergerMenu";
import { useTranslation } from "react-i18next";

import PortfolioImg from "../../assets/images/imgProject/Portfolio_HansBherer_prev_img.jpg";
import WebAppComptaPlusImg from "../../assets/images/imgProject/Web-App_CpmtaPlus.jpg";
import FoodShare from "../../assets/images/imgProject/FoodShere-Laravel_img.jpg";
import ForceMajeure from "../../assets/images/imgProject/ForceMajeure_img.jpg";
import ListeEpicerie from "../../assets/images/imgProject/Liste-Episerie_img.jpg";
import JeuMemoire from "../../assets/images/imgProject/jeu-de-memoire-img.jpg";

import ReactImg from "../../assets/images/inconsDev/front-end/reactjs-icon.svg";
import Ts from "../../assets/images/inconsDev/prog/icons8-typescript-100.svg"
import Sass from "../../assets/images/inconsDev/front-end/icons8-sass-100.svg";
import Vue from "../../assets/images/inconsDev/front-end/icons8-vue-js-100.svg";
import Js from "../../assets/images/inconsDev/prog/icons8-javascript-100.svg"
import Php from "../../assets/images/inconsDev/prog/php-icon.svg"
import Python from "../../assets/images/inconsDev/prog/icons8-python.svg"
import Laravel from "../../assets/images/inconsDev/back-end/laraval_logo.svg";
import Ex from "../../assets/images/inconsDev/back-end/expressjs-icon.svg";
import Html5 from "../../assets/images/inconsDev/front-end/icons8-html-5-100.svg";
import Css3 from "../../assets/images/inconsDev/front-end/icons8-css3-100.svg";
import Handlebars from "../../assets/images/inconsDev/front-end/handlebarsjs_logo.svg";


interface Props {
    theme: SupportedThemes
}

const ProjectsScreen = (props: Props) => {
    const { t } = useTranslation("general");
    const getColor = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "darkMain"
        }
        else {
            return "lightMain"
        }
    };
    const getColorBgCard = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "CardProjectDark"
        }
        else {
            return "CardProjectLight"
        }
    };
    return (
        <div className={getColor()}>
            <HambergerMenu />
            <Header />
            <section className="ContainerAllProject">
                <article className={getColorBgCard()}>
                    <h3 className="subTitleProject">Portfolio</h3>
                    <img className="projectImgSize" src={PortfolioImg} alt="preview project" />
                    <h4 className="subTitleProject">Conception :</h4>
                    <div className="containerIconsProject">
                        <img className="iconProdjectSize" src={ReactImg} alt="React" />
                        <img className="iconProdjectSize" src={Ts} alt="Ts" />
                        <img className="iconProdjectSize" src={Sass} alt="Sass" />
                    </div>
                    <a className="btnRedirectRepo" href="https://github.com/HBherer/Portfolio" target="_blank" rel="noreferrer">{t("LinkRepo")}</a>
                </article>
                <article className={getColorBgCard()}>
                    <h3 className="subTitleProject">App Compta +</h3>
                    <img className="projectImgSize" src={WebAppComptaPlusImg} alt="preview project" />
                    <h4 className="subTitleProject">Conception :</h4>
                    <div className="containerIconsProject">
                        <img className="iconProdjectSize" src={Vue} alt="Vue" />
                        <img className="iconProdjectSize" src={Js} alt="Js" />
                        <img className="iconProdjectSize" src={Ex} alt="Ex" />
                        <img className="iconProdjectSize" src={Sass} alt="Sass" />
                    </div>
                    <a className="btnRedirectRepo" href="https://github.com/HBherer/App-ComptaPlus" target="_blank" rel="noreferrer">{t("LinkRepo")}</a>
                </article>
                <article className={getColorBgCard()}>
                    <h3 className="subTitleProject">FoodShare-Laravel</h3>
                    <img className="projectImgSize" src={FoodShare} alt="preview project" />
                    <h4 className="subTitleProject">Conception :</h4>
                    <div className="containerIconsProject">
                        <img className="iconProdjectSize" src={Laravel} alt="Laravel" />
                        <img className="iconProdjectSize" src={Php} alt="Php" />
                        <img className="iconProdjectSize" src={Sass} alt="Sass" />
                    </div>
                    <a className="btnRedirectRepo" href="https://github.com/HBherer/FoodShare" target="_blank" rel="noreferrer">{t("LinkRepo")}</a>
                </article>
                <article className={getColorBgCard()}>
                    <h3 className="subTitleProject">ForceMajeure</h3>
                    <img className="projectImgSize" src={ForceMajeure} alt="preview project" />
                    <h4 className="subTitleProject">Conception :</h4>
                    <div className="containerIconsProject">
                        <img className="iconProdjectSize" src={Js} alt="Js" />
                        <img className="iconProdjectSize" src={Ex} alt="Ex" />
                        <img className="iconProdjectSize upHBS" src={Handlebars} alt="Handlebars" />
                        <img className="iconProdjectSize" src={Sass} alt="Sass" />
                    </div>
                    <a className="btnRedirectRepo" href="https://gitlab.com/H.Bherer/forcemajeure_cms" target="_blank" rel="noreferrer">{t("LinkRepo")}</a>
                </article>
                <article className={getColorBgCard()}>
                    <h3 className="subTitleProject">Liste d'épicerie</h3>
                    <img className="projectImgSize" src={ListeEpicerie} alt="preview project" />
                    <h4 className="subTitleProject">Conception :</h4>
                    <div className="containerIconsProject">
                        <img className="iconProdjectSize" src={Vue} alt="Vue" />
                        <img className="iconProdjectSize" src={Js} alt="Js" />
                        <img className="iconProdjectSize" src={Sass} alt="Sass" />
                        <img className="iconProdjectSize" src={Python} alt="Python" />
                    </div>
                    <a className="btnRedirectRepo" href="https://github.com/HBherer/Liste_Epicerie" target="_blank" rel="noreferrer">{t("LinkRepo")}</a>
                </article>
                <article className={getColorBgCard()}>
                    <h3 className="subTitleProject">Jeu de mémoire</h3>
                    <img className="projectImgSize" src={JeuMemoire} alt="preview project" />
                    <h4 className="subTitleProject">Conception :</h4>
                    <div className="containerIconsProject">
                        <img className="iconProdjectSize" src={Js} alt="Js" />
                        <img className="iconProdjectSize" src={Html5} alt="Html5" />
                        <img className="iconProdjectSize" src={Css3} alt="Css3" />
                    </div>
                    <a className="btnRedirectRepo" href="https://github.com/HBherer/Jeu-de-memoire" target="_blank" rel="noreferrer">{t("LinkRepo")}</a>
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

export default connect(mapStateToProps)(ProjectsScreen);
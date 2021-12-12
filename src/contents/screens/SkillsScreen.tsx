import React from "react";

import { connect } from "react-redux"
import { getTheme } from "../../assets/theme/selector/themeSelector";
import { SupportedThemes } from "../components/ThemeSelect";
import "../../assets/sass/App.scss"
import Header from "../components/Header";
import FooterLegal from '../components/FooterLegal';
import HambergerMenu from "../components/HambergerMenu";
import { useTranslation } from "react-i18next";
import Js from "../../assets/images/inconsDev/prog/icons8-javascript-100.svg"
import Ts from "../../assets/images/inconsDev/prog/icons8-typescript-100.svg"
import Php from "../../assets/images/inconsDev/prog/php-icon.svg"

import ReactImg from "../../assets/images/inconsDev/front-end/reactjs-icon.svg";
import Vue from "../../assets/images/inconsDev/front-end/icons8-vue-js-100.svg";
import Sass from "../../assets/images/inconsDev/front-end/icons8-sass-100.svg";
import Gulp from "../../assets/images/inconsDev/front-end/Gulp_logo.svg";
import Bootstrap from "../../assets/images/inconsDev/front-end/Bootstrap_logo.svg";
import Materialize from "../../assets/images/inconsDev/front-end/materialize_logo.svg";
import Html5 from "../../assets/images/inconsDev/front-end/icons8-html-5-100.svg";
import Css3 from "../../assets/images/inconsDev/front-end/icons8-css3-100.svg";
import Jquery from "../../assets/images/inconsDev/front-end/jquery-vertical.svg";
import Gsap from "../../assets/images/inconsDev/front-end/gsap-greensock.svg";
import Handlebars from "../../assets/images/inconsDev/front-end/handlebarsjs_logo.svg";
import styledComponents from "../../assets/images/inconsDev/front-end/styled_components.svg";

import Node from "../../assets/images/inconsDev/back-end/nodejs-icon.svg";
import Ex from "../../assets/images/inconsDev/back-end/expressjs-icon.svg";
import Laravel from "../../assets/images/inconsDev/back-end/laraval_logo.svg";
import Npm from "../../assets/images/inconsDev/back-end/npmjs-icon.svg";
import Postman from "../../assets/images/inconsDev/back-end/getpostman-icon.svg";

import PostgreSQL from "../../assets/images/inconsDev/database/Postgresql_elephant.svg";
import MongoDB from "../../assets/images/inconsDev/database/mongodb-icon.svg";
import MySQL from "../../assets/images/inconsDev/database/icons8-mysql-logo-100.svg";

import Git from "../../assets/images/inconsDev/devops/icons8-git-100.svg";
import Docker from "../../assets/images/inconsDev/devops/docker-icon.svg";

import Ps from "../../assets/images/inconsDev/adobecc/Adobe_Photoshop_CC_icon.svg";
import Lr from "../../assets/images/inconsDev/adobecc/Adobe_Photoshop_Lightroom_CC_logo.svg";
import Ai from "../../assets/images/inconsDev/adobecc/Adobe_Illustrator_CC_icon.svg";
import Xd from "../../assets/images/inconsDev/adobecc/Adobe_XD_CC_icon.svg";
import Ae from "../../assets/images/inconsDev/adobecc/Adobe_After_Effects_CC_icon.svg";
import Pr from "../../assets/images/inconsDev/adobecc/Adobe_Premiere_Pro_CC_icon.svg";
import Au from "../../assets/images/inconsDev/adobecc/Adobe_Audition_CC_icon_(2020).svg";

import Wordpress from "../../assets/images/inconsDev/cms/icons8-wordpress-100.svg";

import Aws from "../../assets/images/inconsDev/cloud/icons8-amazon-web-services-100.svg";
import Ngnix from "../../assets/images/inconsDev/cloud/icons8-nginx.svg";
import Apache from "../../assets/images/inconsDev/cloud/apache.svg";

interface Props {
    theme: SupportedThemes
}

const SkillsScreen = (props: Props) => {
    const { t } = useTranslation("general");
    const getColor = () => {
        if (props.theme === SupportedThemes.DARK) {
            return "darkMain"
        }
        else {
            return "lightMain"
        }
    };
    return (
        <div className={getColor()}>
            <HambergerMenu />
            <Header />
            <section className="containerSkills">
                <h2 className="subTitle">{t("langProg")}</h2>
                <article>
                    <img className="iconDev" src={Js} alt="icons Javascript" />
                    <img className="iconDev" src={Ts} alt="icons Typescript" />
                    <img className="iconDev" src={Php} alt="icons Php" />
                </article>
                <h2 className="subTitle">{t("front")}</h2>
                <article>
                    <img className="iconDev" src={ReactImg} alt="icons React" />
                    <img className="iconDev" src={Vue} alt="icons Vue" />
                    <img className="iconDev" src={Sass} alt="icons Sass" />
                    <img className="iconDev" src={styledComponents} alt="icons styled-Components" />
                    <img className="iconDev resizeIcon" src={Gulp} alt="icons Gulp" />
                    <img className="iconDev" src={Bootstrap} alt="icons Bootstrap" />
                    <img className="iconDev" src={Materialize} alt="icons Materialize" />
                    <img className="iconDev" src={Html5} alt="icons Html5" />
                    <img className="iconDev" src={Css3} alt="icons Css3" />
                    <img className="iconDev" src={Jquery} alt="icons Jquery" />
                    <img className="iconDev" src={Gsap} alt="icons Gsap" />
                    <img className="iconDev" src={Handlebars} alt="icons Handlebars" />
                </article>
                <h2 className="subTitle">{t("back")}</h2>
                <article>
                    <img className="iconDev" src={Node} alt="icons Node" />
                    <img className="iconDev" src={Ex} alt="icons Ex" />
                    <img className="iconDev" src={Laravel} alt="icons Laravel" />
                    <img className="iconDev" src={Npm} alt="icons Npm" />
                    <img className="iconDev" src={Postman} alt="icons Postman" />
                </article>
                <h2 className="subTitle">{t("DB")}</h2>
                <article>
                    <img className="iconDev" src={PostgreSQL} alt="icons PostgreSQL" />
                    <img className="iconDev" src={MongoDB} alt="icons MongoDB" />
                    <img className="iconDev" src={MySQL} alt="icons MySQL" />
                </article>
                <h2 className="subTitle">{t("devOps")}</h2>
                <article>
                    <img className="iconDev" src={Git} alt="icons Git" />
                    <img className="iconDev" src={Docker} alt="icons Docker" />
                </article>
                <h2 className="subTitle">{t("adobe")}</h2>
                <article>
                    <img className="iconDev" src={Ps} alt="icons Ps" />
                    <img className="iconDev" src={Lr} alt="icons Lr" />
                    <img className="iconDev" src={Ai} alt="icons Ai" />
                    <img className="iconDev" src={Xd} alt="icons Xd" />
                    <img className="iconDev" src={Ae} alt="icons Ae" />
                    <img className="iconDev" src={Pr} alt="icons Pr" />
                    <img className="iconDev" src={Au} alt="icons Au" />
                </article>
                <h2 className="subTitle">{t("cms")}</h2>
                <article>
                    <img className="iconDev" src={Wordpress} alt="icons Wordpress" />
                </article>
                <h2 className="subTitle">{t("deployment")}</h2>
                <article>
                    <img className="iconDev" src={Aws} alt="icons Aws" />
                    <img className="iconDev" src={Ngnix} alt="icons Ngnix" />
                    <img className="iconDev resizeIcon" src={Apache} alt="icons Apache" />
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

export default connect(mapStateToProps)(SkillsScreen);
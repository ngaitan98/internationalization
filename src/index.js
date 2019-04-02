import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import localeEsMessages from "./locales/es.json";

import enLocaleData from 'react-intl/locale-data/en';
import localeEnMessages from "./locales/en.json";

import JobsList from "./components/jobsList";

addLocaleData(esLocaleData);
addLocaleData(enLocaleData);

var messages = navigator.language === "es" || navigator.userLanguage === "es"? localeEsMessages:localeEnMessages
ReactDOM.render(
	<IntlProvider locale="en" messages = {messages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);

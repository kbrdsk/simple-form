import "./style.css";
const postalCodes = require("postal-codes-js");

const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (event) => {
	if (
		!email.validate() ||
		!country.validate() ||
		!postalCode.validate() ||
		!password.validate() ||
		!passwordConfirm.validate()
	) {
		showError();
		event.preventDefault();
	}
});

function showError() {
	alert(
		email.error ||
			country.error ||
			postalCode.error ||
			password.error ||
			passwordConfirm.error
	);
}

const email = document.getElementById("email");
email.validate = function () {
	if (email.validity.valueMissing) {
		email.error = "Please enter an email address.";
		return false;
	} else if (!email.validity.valid) {
		email.error = "Please enter a valid email address.";
		return false;
	} else {
		email.error = "";
		return true;
	}
};

const country = document.getElementById("country");
const countrySelect = document.getElementById("country-list");
const countryListAlpha2 = {
	AF: "Afghanistan",
	AL: "Albania",
	DZ: "Algeria",
	AS: "American Samoa",
	AD: "Andorra",
	AO: "Angola",
	AI: "Anguilla",
	AQ: "Antarctica",
	AG: "Antigua and Barbuda",
	AR: "Argentina",
	AM: "Armenia",
	AW: "Aruba",
	AU: "Australia",
	AT: "Austria",
	AZ: "Azerbaijan",
	BS: "Bahamas (the)",
	BH: "Bahrain",
	BD: "Bangladesh",
	BB: "Barbados",
	BY: "Belarus",
	BE: "Belgium",
	BZ: "Belize",
	BJ: "Benin",
	BM: "Bermuda",
	BT: "Bhutan",
	BO: "Bolivia (Plurinational State of)",
	BQ: "Bonaire, Sint Eustatius and Saba",
	BA: "Bosnia and Herzegovina",
	BW: "Botswana",
	BV: "Bouvet Island",
	BR: "Brazil",
	IO: "British Indian Ocean Territory (the)",
	BN: "Brunei Darussalam",
	BG: "Bulgaria",
	BF: "Burkina Faso",
	BI: "Burundi",
	CV: "Cabo Verde",
	KH: "Cambodia",
	CM: "Cameroon",
	CA: "Canada",
	KY: "Cayman Islands (the)",
	CF: "Central African Republic (the)",
	TD: "Chad",
	CL: "Chile",
	CN: "China",
	CX: "Christmas Island",
	CC: "Cocos (Keeling) Islands (the)",
	CO: "Colombia",
	KM: "Comoros (the)",
	CD: "Congo (the Democratic Republic of the)",
	CG: "Congo (the)",
	CK: "Cook Islands (the)",
	CR: "Costa Rica",
	HR: "Croatia",
	CU: "Cuba",
	CW: "Curaçao",
	CY: "Cyprus",
	CZ: "Czechia",
	CI: "Côte d'Ivoire",
	DK: "Denmark",
	DJ: "Djibouti",
	DM: "Dominica",
	DO: "Dominican Republic (the)",
	EC: "Ecuador",
	EG: "Egypt",
	SV: "El Salvador",
	GQ: "Equatorial Guinea",
	ER: "Eritrea",
	EE: "Estonia",
	SZ: "Eswatini",
	ET: "Ethiopia",
	FK: "Falkland Islands (the) [Malvinas]",
	FO: "Faroe Islands (the)",
	FJ: "Fiji",
	FI: "Finland",
	FR: "France",
	GF: "French Guiana",
	PF: "French Polynesia",
	TF: "French Southern Territories (the)",
	GA: "Gabon",
	GM: "Gambia (the)",
	GE: "Georgia",
	DE: "Germany",
	GH: "Ghana",
	GI: "Gibraltar",
	GR: "Greece",
	GL: "Greenland",
	GD: "Grenada",
	GP: "Guadeloupe",
	GU: "Guam",
	GT: "Guatemala",
	GG: "Guernsey",
	GN: "Guinea",
	GW: "Guinea-Bissau",
	GY: "Guyana",
	HT: "Haiti",
	HM: "Heard Island and McDonald Islands",
	VA: "Holy See (the)",
	HN: "Honduras",
	HK: "Hong Kong",
	HU: "Hungary",
	IS: "Iceland",
	IN: "India",
	ID: "Indonesia",
	IR: "Iran (Islamic Republic of)",
	IQ: "Iraq",
	IE: "Ireland",
	IM: "Isle of Man",
	IL: "Israel",
	IT: "Italy",
	JM: "Jamaica",
	JP: "Japan",
	JE: "Jersey",
	JO: "Jordan",
	KZ: "Kazakhstan",
	KE: "Kenya",
	KI: "Kiribati",
	KP: "Korea (the Democratic People's Republic of)",
	KR: "Korea (the Republic of)",
	KW: "Kuwait",
	KG: "Kyrgyzstan",
	LA: "Lao People's Democratic Republic (the)",
	LV: "Latvia",
	LB: "Lebanon",
	LS: "Lesotho",
	LR: "Liberia",
	LY: "Libya",
	LI: "Liechtenstein",
	LT: "Lithuania",
	LU: "Luxembourg",
	MO: "Macao",
	MG: "Madagascar",
	MW: "Malawi",
	MY: "Malaysia",
	MV: "Maldives",
	ML: "Mali",
	MT: "Malta",
	MH: "Marshall Islands (the)",
	MQ: "Martinique",
	MR: "Mauritania",
	MU: "Mauritius",
	YT: "Mayotte",
	MX: "Mexico",
	FM: "Micronesia (Federated States of)",
	MD: "Moldova (the Republic of)",
	MC: "Monaco",
	MN: "Mongolia",
	ME: "Montenegro",
	MS: "Montserrat",
	MA: "Morocco",
	MZ: "Mozambique",
	MM: "Myanmar",
	NA: "Namibia",
	NR: "Nauru",
	NP: "Nepal",
	NL: "Netherlands (the)",
	NC: "New Caledonia",
	NZ: "New Zealand",
	NI: "Nicaragua",
	NE: "Niger (the)",
	NG: "Nigeria",
	NU: "Niue",
	NF: "Norfolk Island",
	MP: "Northern Mariana Islands (the)",
	NO: "Norway",
	OM: "Oman",
	PK: "Pakistan",
	PW: "Palau",
	PS: "Palestine, State of",
	PA: "Panama",
	PG: "Papua New Guinea",
	PY: "Paraguay",
	PE: "Peru",
	PH: "Philippines (the)",
	PN: "Pitcairn",
	PL: "Poland",
	PT: "Portugal",
	PR: "Puerto Rico",
	QA: "Qatar",
	MK: "Republic of North Macedonia",
	RO: "Romania",
	RU: "Russian Federation (the)",
	RW: "Rwanda",
	RE: "Réunion",
	BL: "Saint Barthélemy",
	SH: "Saint Helena, Ascension and Tristan da Cunha",
	KN: "Saint Kitts and Nevis",
	LC: "Saint Lucia",
	MF: "Saint Martin (French part)",
	PM: "Saint Pierre and Miquelon",
	VC: "Saint Vincent and the Grenadines",
	WS: "Samoa",
	SM: "San Marino",
	ST: "Sao Tome and Principe",
	SA: "Saudi Arabia",
	SN: "Senegal",
	RS: "Serbia",
	SC: "Seychelles",
	SL: "Sierra Leone",
	SG: "Singapore",
	SX: "Sint Maarten (Dutch part)",
	SK: "Slovakia",
	SI: "Slovenia",
	SB: "Solomon Islands",
	SO: "Somalia",
	ZA: "South Africa",
	GS: "South Georgia and the South Sandwich Islands",
	SS: "South Sudan",
	ES: "Spain",
	LK: "Sri Lanka",
	SD: "Sudan (the)",
	SR: "Suriname",
	SJ: "Svalbard and Jan Mayen",
	SE: "Sweden",
	CH: "Switzerland",
	SY: "Syrian Arab Republic",
	TW: "Taiwan",
	TJ: "Tajikistan",
	TZ: "Tanzania, United Republic of",
	TH: "Thailand",
	TL: "Timor-Leste",
	TG: "Togo",
	TK: "Tokelau",
	TO: "Tonga",
	TT: "Trinidad and Tobago",
	TN: "Tunisia",
	TR: "Turkey",
	TM: "Turkmenistan",
	TC: "Turks and Caicos Islands (the)",
	TV: "Tuvalu",
	UG: "Uganda",
	UA: "Ukraine",
	AE: "United Arab Emirates (the)",
	GB: "United Kingdom of Great Britain and Northern Ireland (the)",
	UM: "United States Minor Outlying Islands (the)",
	US: "United States of America (the)",
	UY: "Uruguay",
	UZ: "Uzbekistan",
	VU: "Vanuatu",
	VE: "Venezuela (Bolivarian Republic of)",
	VN: "Viet Nam",
	VG: "Virgin Islands (British)",
	VI: "Virgin Islands (U.S.)",
	WF: "Wallis and Futuna",
	EH: "Western Sahara",
	YE: "Yemen",
	ZM: "Zambia",
	ZW: "Zimbabwe",
	AX: "Åland Islands",
};
for (let countryCode in countryListAlpha2) {
	const countryOption = document.createElement("option");
	countryOption.textContent = `${countryCode} - ${countryListAlpha2[countryCode]}`;
	countrySelect.appendChild(countryOption);
}
country.validate = function () {
	for (let countryCode in countryListAlpha2) {
		const option = `${countryCode} - ${countryListAlpha2[countryCode]}`;
		if(country.value === option){
			country.error = "";
			return true;
		}
	}
	country.error = "Please select a country from the list.";
	return false;
};

const postalCode = document.getElementById("postal-code");
postalCode.validate = function () {
	if(!postalCode.value){
		postalCode.error = "Please enter a postal code.";
		return false;
	}
	const countryCode = country.value.substring(0,2);
	postalCode.error = postalCodes.validate(countryCode, postalCode.value);
	if(postalCode.error === true){
		postalCode.error = "";
		return true;
	} else {
		return false;
	}
};
const password = document.getElementById("password");
password.validate = function () {
	if(password.validity.valueMissing){
		password.error = "Please enter a password.";
		return false;
	} else if(password.value.length < 8){
		password.error = "Password must be at least 8 characters long.";
	} else {
		password.error = "";
		return true;
	}
};
const passwordConfirm = document.getElementById("password-confirm");
passwordConfirm.validate = function () {
	if(passwordConfirm.value !== password.value){
		passwordConfirm.error = "Passwords do not match."
		return false;
	} else {
		passwordConfirm.error = "";
		return true;
	}
};

for(let inputField of [email, country, postalCode, password, passwordConfirm]){
	inputField.addEventListener("focusout", updateErrorMessage);
}

function updateErrorMessage(event, inputField = event.target){
	inputField.setAttribute("valid", inputField.validate());
	const errorID = `${inputField.id}-error`;
	const errorDisplay = document.getElementById(errorID);
	errorDisplay.textContent = inputField.error;
}
const { setLocale, ...yup } = require("yup");
const { pt } = require("yup-locales");
setLocale(pt);

module.exports = yup;

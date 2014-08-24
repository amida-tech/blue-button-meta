var CCDA = require("./lib/CCDA/index.js");

//CCDA metadata stuff
var meta = {};
meta.CCDA = CCDA;

meta.supported_sections = [
    'allergies',
    'procedures',
    'immunizations',
    'medications',
    'encounters',
    'vitals',
    'results',
    'social_history',
    'demographics',
    'problems',
    'insurance',
    'claims',
    'plan_of_care',
    'payers'
];

module.exports = exports = meta;

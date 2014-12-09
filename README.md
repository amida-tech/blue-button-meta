blue-button-meta
================

Metadata about Blue Button format internal structures

[![NPM](https://nodei.co/npm/blue-button-meta.png)](https://nodei.co/npm/blue-button-meta/)

[![Build Status](https://travis-ci.org/amida-tech/blue-button-meta.svg)](https://travis-ci.org/amida-tech/blue-button-meta)
[![Coverage Status](https://coveralls.io/repos/amida-tech/blue-button-meta/badge.png)](https://coveralls.io/r/amida-tech/blue-button-meta)

##Usage

Various metadata is directly available
``` javascript
var bbm = require("blue-button-meta");
var CCDA = bbm.CCDA;

//CCDA Document OID
console.log(CCDA.document.templateId);

//list of CCDA Templates and their OIDs
console.log(CCDA.templates);

//list of CCDA Sections and their OIDs
console.log(CCDA.sections);

//list of CCDA Clinical Statements and their OIDs
console.log(CCDA.statements);

//list of CCDA constraints
console.log(CCDA.constraints.templates);
console.log(CCDA.constraints.sections);

//list of supported master health record sections
console.log(bbm.supported_sections);
```

Code system oid to name and name to oid maps are available
``` javascript
var code_systems = bbm.code_systems;

var csGender = code_systems.find('2.16.840.1.113883.5.1');
console.log(csGender.name()); // "HL7 AdministrativeGender"

var oid = code_systems.findFromName("HL7 AdministrativeGender");
console.log(oid); // '2.16.840.1.113883.5.1'
```
For a subset of smaller code systems code to display name and display name to code methods are available
``` javascript
console.log(csGender.codeDisplayName('F'));      // 'Female'
console.log(csGender.displayNameCode('Female')); // 'F'
```
For a ValueSets similar methods are available
``` javascript
var csPS = code_systems.find('2.16.840.1.113883.3.88.12.3221.6.8');
console.log(csPS.name()); // "Problem Severity"

console.log(csPS.codeDisplayName('255604002')); // 'Mild';
console.log(csPS.displayNameCode('Mild'));      // '255604002';
```
In addition the parent code system is available
``` javascript
var id = csPS.systemId();
console.log(id.codeSystem);     // '2.16.840.1.113883.6.96'
console.log(id.codeSystemName); // 'SNOMED CT'
```

## Release Notes

See release notes [here](./RELEASENOTES.md)

## License

Licensed under [Apache 2.0](./LICENSE)


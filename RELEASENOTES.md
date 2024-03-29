# blue-button-meta Release Notes

## v1.7.3 - May 31, 2022

- Patch Update: GHSA-rm36-94g8-835r - Race Condition in Grunt

## v1.7.2 - April 18, 2022

- Patch Update: Upgraded dev dependencies
- Converted tests and coverages to jest

## v.1.7.1 - December 20, 2021
- Security fixes to dev dependencies

## v.1.7.0 - January 2, 2017
- Added 'reason_for_referral' and 'hospital_discharge_instructions' sections to meta

## v.1.5.0 - June 12, 2015
- Added code 2186-5 to Race and Ethnicity
- Added Confidentiality Code
- Added code table for Marital Status
- Organizations added
- Additional OIDs

## v.1.3.0 - December 12, 2014
- Moved oids.js here from blue-button repo.
- An API methods are added to get information from oids.js

## v.1.2.0 - September 15, 2014

This is minor release of blue-button-meta.js library.

- Updated lookups to support C32 and CDA parsers and CCDA generator in blue-button.js 1.2.0 package

## v.1.1.0 - September 2, 2014

This is the initial release of blue-button-meta.js library.

- Added subset of metadata about CCDA format
  - Templates
  - Sections
  - Statements
  - Constraints
- List of sections for downstream support in blue-button.js library
- Frequently used lookups for OIDs, and other constants from variety of vocabularies used in CCDA parsing/generation
- Library is used in downstream packages such as blue-button/match/record.js


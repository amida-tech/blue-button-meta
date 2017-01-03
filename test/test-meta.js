"use strict";

var chai = require('chai');
var bbm = require("../index.js");

var expect = chai.expect;

var ccda = bbm.CCDA;

describe('directly available metadata', function () {
    it('9 templates', function () {
        expect(Object.keys(ccda.templates)).to.have.length(9);
    });

    it('70 sections', function () {
        expect(Object.keys(ccda.sections)).to.have.length(70);
    });

    it('76 clinical statements', function () {
        expect(Object.keys(ccda.statements)).to.have.length(76);
    });

    it('15 supported sections', function () {
        expect(Object.keys(bbm.supported_sections)).to.have.length(18);
    });
});

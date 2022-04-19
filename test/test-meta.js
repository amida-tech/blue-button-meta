"use strict";

var bbm = require("../index.js");

var ccda = bbm.CCDA;

describe('directly available metadata', function () {
  it('9 templates', function () {
    expect(Object.keys(ccda.templates)).toHaveLength(9);
  });

  it('70 sections', function () {
    expect(Object.keys(ccda.sections)).toHaveLength(70);
  });

  it('76 clinical statements', function () {
    expect(Object.keys(ccda.statements)).toHaveLength(76);
  });

  it('15 supported sections', function () {
    expect(Object.keys(bbm.supported_sections)).toHaveLength(18);
  });
});

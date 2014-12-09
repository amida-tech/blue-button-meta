"use strict";

var chai = require('chai');
var bbm = require("../index.js");

var expect = chai.expect;

var code_systems = bbm.code_systems;

describe('code-system methods', function () {
    it('access using oid', function () {
        var cs = code_systems.find('2.16.840.1.113883.5.1');
        expect(cs).to.exist;

        expect(cs.name()).to.equal("HL7 AdministrativeGender");

        var id = cs.systemId();
        expect(id).to.exist;
        expect(id.codeSystem).to.equal('2.16.840.1.113883.5.1');
        expect(id.codeSystemName).to.equal("HL7 AdministrativeGender");

        expect(cs.codeDisplayName('F')).to.equal('Female');
        expect(cs.displayNameCode('Female')).to.equal('F');

        expect(cs.codeDisplayName('XXX')).to.not.exist;
        expect(cs.displayNameCode('XXX')).to.not.exist;
    });

    it('access using name', function () {
        var oid = code_systems.findFromName("HL7 AdministrativeGender");
        expect(oid).to.equal('2.16.840.1.113883.5.1');
    });

    it('ValueSet from a parent oid', function () {
        var cs = code_systems.find('2.16.840.1.113883.3.88.12.3221.6.8');
        expect(cs).to.exist;

        expect(cs.name()).to.equal("Problem Severity");

        var id = cs.systemId();
        expect(id).to.exist;
        expect(id.codeSystem).to.equal('2.16.840.1.113883.6.96');
        expect(id.codeSystemName).to.equal("SNOMED CT");

        expect(cs.codeDisplayName('255604002')).to.equal('Mild');
        expect(cs.displayNameCode('Mild')).to.equal('255604002');
    });

    it('Not existing from oid', function () {
        var cs = code_systems.find('xxx');
        expect(cs).to.not.exist;
    });

    it('Not existing from name', function () {
        var oid = code_systems.findFromName('xxx');
        expect(oid).to.not.exist;
    });
});

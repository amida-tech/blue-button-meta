"use strict";

var bbm = require("../index.js");

var code_systems = bbm.code_systems;

describe('code-system methods', function () {
  it('access using oid', function () {
    var cs = code_systems.find('2.16.840.1.113883.5.1');
    expect(cs).toBeDefined();

    expect(cs.name()).toBe("HL7 AdministrativeGender");

    var id = cs.systemId();
    expect(id).toBeDefined();
    expect(id.codeSystem).toBe('2.16.840.1.113883.5.1');
    expect(id.codeSystemName).toBe("HL7 AdministrativeGender");

    expect(cs.codeDisplayName('F')).toBe('Female');
    expect(cs.displayNameCode('Female')).toBe('F');

    expect(cs.codeDisplayName('XXX')).toBeFalsy();
    expect(cs.displayNameCode('XXX')).toBeFalsy();
  });

  it('access using name', function () {
    var oid = code_systems.findFromName("HL7 AdministrativeGender");
    expect(oid).toBe('2.16.840.1.113883.5.1');
  });

  it('ValueSet from a parent oid', function () {
    var cs = code_systems.find('2.16.840.1.113883.3.88.12.3221.6.8');
    expect(cs).toBeDefined();

    expect(cs.name()).toBe("Problem Severity");

    var id = cs.systemId();
    expect(id).toBeDefined();
    expect(id.codeSystem).toBe('2.16.840.1.113883.6.96');
    expect(id.codeSystemName).toBe("SNOMED CT");

    expect(cs.codeDisplayName('255604002')).toBe('Mild');
    expect(cs.displayNameCode('Mild')).toBe('255604002');
  });

  it('Not existing from oid', function () {
    var cs = code_systems.find('xxx');
    expect(cs).toBeFalsy();
  });

  it('Not existing from name', function () {
    var oid = code_systems.findFromName('xxx');
    expect(oid).toBeFalsy();
  });
});

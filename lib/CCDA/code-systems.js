var codeSystems = {
    "LOINC": ["2.16.840.1.113883.6.1", "8716-3"],
    "SNOMED CT": ["2.16.840.1.113883.6.96", "46680005"],
    "RXNORM": "2.16.840.1.113883.6.88",
    "ActCode": "2.16.840.1.113883.5.4",
    "CPT-4": "2.16.840.1.113883.6.12",
    "CVX": "2.16.840.1.113883.12.292",
    "HL7ActCode": "2.16.840.1.113883.5.4"
};

var sections_entries_codes = {
    "codes": {
        "AdvanceDirectivesSectionEntriesOptional": {
            "code": "42348-3",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Advance Directives"
        },
        "AdvanceDirectivesSection": {
            "code": "42348-3",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Advance Directives"
        },
        "AllergiesSectionEntriesOptional": {
            "code": "48765-2",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Allergies, adverse reactions, alerts"
        },
        "AllergiesSection": {
            "code": "48765-2",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Allergies, adverse reactions, alerts"
        },
        "AnesthesiaSection": {
            "code": "59774-0",
            "code_system": "",
            "code_system_name": "",
            "displayName": "Anesthesia"
        },
        "AssessmentAndPlanSection": {
            "code": "51847-2",
            "code_system": "",
            "code_system_name": "",
            "displayName": "Assessment and Plan"
        },
        "AssessmentSection": {
            "code": "51848-0",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Assessments"
        },
        "ChiefComplaintAndReasonForVisitSection": {
            "code": "46239-0",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Chief Complaint and Reason for Visit"
        },
        "ChiefComplaintSection": {
            "code": "10154-3",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Chief Complaint"
        },
        "undefined": "",
        "ComplicationsSection": {
            "code": "55109-3",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Complications"
        },
        "DICOMObjectCatalogSection": {
            "code": "121181",
            "code_system": "1.2.840.10008.2.16.4",
            "code_system_name": "DCM",
            "displayName": "Dicom Object Catalog"
        },
        "DischargeDietSection": {
            "code": "42344-2",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Discharge Diet"
        },
        "EncountersSectionEntriesOptional": {
            "code": "46240-8",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Encounters"
        },
        "EncountersSection": {
            "code": "46240-8",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Encounters"
        },
        "FamilyHistorySection": {
            "code": "121026",
            "code_system": "1.2.840.10008.2.16.4",
            "code_system_name": "DCM",
            "displayName": ""
        },
        "FindingsSection": "",
        "FunctionalStatusSection": {
            "code": "47420-5",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Functional Status"
        },
        "GeneralStatusSection": {
            "code": "10210-3",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "General Status"
        },
        "HistoryOfPastIllnessSection": {
            "code": "11348-0",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "History of Past Illness"
        },
        "HistoryOfPresentIllnessSection": {
            "code": "10164-2",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": ""
        },
        "HospitalAdmissionDiagnosisSection": {
            "code": "46241-6",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Hospital Admission Diagnosis"
        },
        "HospitalAdmissionMedicationsSectionEntriesOptional": {
            "code": "42346-7",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Medications on Admission"
        },
        "HospitalConsultationsSection": {
            "code": "18841-7",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Hospital Consultations Section"
        },
        "HospitalCourseSection": {
            "code": "8648-8",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Hospital Course"
        },
        "HospitalDischargeDiagnosisSection": {
            "code": "11535-2",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Hospital Discharge Diagnosis"
        },
        "HospitalDischargeInstructionsSection": {
            "code": "8653-8",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Hospital Discharge Instructions"
        },
        "HospitalDischargeMedicationsSectionEntriesOptional": {
            "code": "10183-2",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Hospital Discharge Medications"
        },
        "HospitalDischargePhysicalSection": {
            "code": "10184-0",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Hospital Discharge Physical"
        },
        "HospitalDischargeStudiesSummarySection": {
            "code": "11493-4",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Hospital Discharge Studies Summary"
        },
        "ImmunizationsSectionEntriesOptional": {
            "code": "11369-6",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Immunizations"
        },
        "ImmunizationsSection": {
            "code": "11369-6",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Immunizations"
        },
        "InstructionsSection": {
            "code": "69730-0",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Instructions"
        },
        "InterventionsSection": {
            "code": "62387-6",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Interventions Provided"
        },
        "MedicalHistorySection": {
            "code": "11329-0",
            "code_system": "",
            "code_system_name": "",
            "displayName": "Medical"
        },
        "MedicalEquipmentSection": {
            "code": "46264-8",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Medical Equipment"
        },
        "MedicationsAdministeredSection": {
            "code": "29549-3",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Medications Administered"
        },
        "MedicationsSectionEntriesOptional": {
            "code": "10160-0",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "History of medication use"
        },
        "MedicationsSection": {
            "code": "10160-0",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "History of medication use"
        },
        "ObjectiveSection": {
            "code": "61149-1",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Objective"
        },
        "OperativeNoteFluidSection": {
            "code": "10216-0",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Operative Note Fluids"
        },
        "OperativeNoteSurgicalProcedureSection": {
            "code": "10223-6",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Operative Note Surgical Procedure"
        },
        "PayersSection": {
            "code": "48768-6",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Payers"
        },
        "PhysicalExamSection": {
            "code": "29545-1",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Physical Findings"
        },
        "PlanOfCareSection": {
            "code": "18776-5",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Plan of Care"
        },
        "PlannedProcedureSection": {
            "code": "59772-4",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Planned Procedure"
        },
        "PostoperativeDiagnosisSection": {
            "code": "10218-6",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Postoperative Diagnosis"
        },
        "PostprocedureDiagnosisSection": {
            "code": "59769-0",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Postprocedure Diagnosis"
        },
        "PreoperativeDiagnosisSection": {
            "code": "10219-4",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Preoperative Diagnosis"
        },
        "ProblemSectionEntriesOptional": {
            "code": "11450-4",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Problem List"
        },
        "ProblemSection": {
            "code": "11450-4",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Problem List"
        },
        "ProcedureDescriptionSection": {
            "code": "29554-3",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Procedure Description"
        },
        "ProcedureDispositionSection": {
            "code": "59775-7",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Procedure Disposition"
        },
        "ProcedureEstimatedBloodLossSection": {
            "code": "59770-8",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Procedure Estimated Blood Loss"
        },
        "ProcedureFindingsSection": {
            "code": "59776-5",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Procedure Findings"
        },
        "ProcedureImplantsSection": {
            "code": "59771-6",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Procedure Implants"
        },
        "ProcedureIndicationsSection": {
            "code": "59768-2",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Procedure Indications"
        },
        "ProcedureSpecimensTakenSection": {
            "code": "59773-2",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Procedure Specimens Taken"
        },
        "ProceduresSectionEntriesOptional": {
            "code": "47519-4",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "History of Procedures"
        },
        "ProceduresSection": {
            "code": "47519-4",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "History of Procedures"
        },
        "ReasonForReferralSection": {
            "code": "42349-1",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Reason for Referral"
        },
        "ReasonForVisitSection": {
            "code": "29299-5",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Reason for Visit"
        },
        "ResultsSectionEntriesOptional": {
            "code": "30954-2",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Relevant diagnostic tests and/or laboratory data"
        },
        "ResultsSection": {
            "code": "30954-2",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Relevant diagnostic tests and/or laboratory data"
        },
        "ReviewOfSystemsSection": {
            "code": "10187-3",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Review of Systems"
        },
        "SocialHistorySection": {
            "code": "29762-2",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Social History"
        },
        "SubjectiveSection": {
            "code": "61150-9",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Subjective"
        },
        "SurgicalDrainsSection": {
            "code": "11537-8",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Surgical Drains"
        },
        "VitalSignsSectionEntriesOptional": {
            "code": "8716-3",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Vital Signs"
        },
        "VitalSignsSection": {
            "code": "8716-3",
            "code_system": "2.16.840.1.113883.6.1",
            "code_system_name": "LOINC",
            "displayName": "Vital Signs"
        }
    }
}

module.exports.codeSystems = codeSystems;
module.exports.sections_entries_codes = sections_entries_codes;
module.exports = exports = codeSystems;
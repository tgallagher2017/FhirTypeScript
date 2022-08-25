import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID_000, REGEX_IMPLICITRULES, REGEX_LANGUAGE, REGEX_USE, REGEX_CREATED, REGEX_OUTCOME, REGEX_DISPOSITION } from '../FhirTsLibValidation/FhirRegex';
import { Attachment, CodeableConcept, Element, ExplanationOfBenefitAccident, ExplanationOfBenefitAddItem, ExplanationOfBenefitAdjudication, ExplanationOfBenefitBenefitBalance, ExplanationOfBenefitCareTeam, ExplanationOfBenefitDiagnosis, ExplanationOfBenefitInsurance, ExplanationOfBenefitItem, ExplanationOfBenefitPayee, ExplanationOfBenefitPayment, ExplanationOfBenefitProcedure, ExplanationOfBenefitProcessNote, ExplanationOfBenefitRelated, ExplanationOfBenefitSupportingInfo, ExplanationOfBenefitTotal, Extension, Identifier, Meta, Narrative, Period, Reference, ResourceList, Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription } from './FhirType';
import { ExplanationOfBenefitStatus_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and
 * optionally account balance information, for informing the subscriber of the benefits provided.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ExplanationOfBenefit
 */
export class ExplanationOfBenefit {
  /**
   * This is a ExplanationOfBenefit resource
   */
     resourceType = "ExplanationOfBenefit";

  /**
   * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This
   * might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these
   * constraints.)  Ids are case-insensitive.
   * Field access restricted because there are specific valid values.
   */
  protected id?: string;

  /**
   * The metadata about a resource. This is content in the resource that is maintained by the
   * infrastructure. Changes to the content might not always be associated with version changes to the
   * resource.
   */
  @Type(() => Meta)
   meta?: Meta;

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected implicitRules?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _implicitRules?: Element;

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected language?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _language?: Element;

  /**
   * A human-readable summary of the resource conveying the essential clinical and business information
   * for the resource.
   */
  @Type(() => Narrative)
   text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the resource that contains them -
   * they cannot be identified independently, and nor can they have their own independent transaction
   * scope.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ResourceList, {
          discriminator: {
    property: 'resourceType',
    subTypes: [
      	{ value: Account, name: 'Account'},
      	{ value: ActivityDefinition, name: 'ActivityDefinition'},
      	{ value: AdverseEvent, name: 'AdverseEvent'},
      	{ value: AllergyIntolerance, name: 'AllergyIntolerance'},
      	{ value: Appointment, name: 'Appointment'},
      	{ value: AppointmentResponse, name: 'AppointmentResponse'},
      	{ value: AuditEvent, name: 'AuditEvent'},
      	{ value: Basic, name: 'Basic'},
      	{ value: Binary, name: 'Binary'},
      	{ value: BiologicallyDerivedProduct, name: 'BiologicallyDerivedProduct'},
      	{ value: BodyStructure, name: 'BodyStructure'},
      	{ value: Bundle, name: 'Bundle'},
      	{ value: CapabilityStatement, name: 'CapabilityStatement'},
      	{ value: CarePlan, name: 'CarePlan'},
      	{ value: CareTeam, name: 'CareTeam'},
      	{ value: CatalogEntry, name: 'CatalogEntry'},
      	{ value: ChargeItem, name: 'ChargeItem'},
      	{ value: ChargeItemDefinition, name: 'ChargeItemDefinition'},
      	{ value: Claim, name: 'Claim'},
      	{ value: ClaimResponse, name: 'ClaimResponse'},
      	{ value: ClinicalImpression, name: 'ClinicalImpression'},
      	{ value: CodeSystem, name: 'CodeSystem'},
      	{ value: Communication, name: 'Communication'},
      	{ value: CommunicationRequest, name: 'CommunicationRequest'},
      	{ value: CompartmentDefinition, name: 'CompartmentDefinition'},
      	{ value: Composition, name: 'Composition'},
      	{ value: ConceptMap, name: 'ConceptMap'},
      	{ value: Condition, name: 'Condition'},
      	{ value: Consent, name: 'Consent'},
      	{ value: Contract, name: 'Contract'},
      	{ value: Coverage, name: 'Coverage'},
      	{ value: CoverageEligibilityRequest, name: 'CoverageEligibilityRequest'},
      	{ value: CoverageEligibilityResponse, name: 'CoverageEligibilityResponse'},
      	{ value: DetectedIssue, name: 'DetectedIssue'},
      	{ value: Device, name: 'Device'},
      	{ value: DeviceDefinition, name: 'DeviceDefinition'},
      	{ value: DeviceMetric, name: 'DeviceMetric'},
      	{ value: DeviceRequest, name: 'DeviceRequest'},
      	{ value: DeviceUseStatement, name: 'DeviceUseStatement'},
      	{ value: DiagnosticReport, name: 'DiagnosticReport'},
      	{ value: DocumentManifest, name: 'DocumentManifest'},
      	{ value: DocumentReference, name: 'DocumentReference'},
      	{ value: EffectEvidenceSynthesis, name: 'EffectEvidenceSynthesis'},
      	{ value: Encounter, name: 'Encounter'},
      	{ value: Endpoint, name: 'Endpoint'},
      	{ value: EnrollmentRequest, name: 'EnrollmentRequest'},
      	{ value: EnrollmentResponse, name: 'EnrollmentResponse'},
      	{ value: EpisodeOfCare, name: 'EpisodeOfCare'},
      	{ value: EventDefinition, name: 'EventDefinition'},
      	{ value: Evidence, name: 'Evidence'},
      	{ value: EvidenceVariable, name: 'EvidenceVariable'},
      	{ value: ExampleScenario, name: 'ExampleScenario'},
      	{ value: ExplanationOfBenefit, name: 'ExplanationOfBenefit'},
      	{ value: FamilyMemberHistory, name: 'FamilyMemberHistory'},
      	{ value: Flag, name: 'Flag'},
      	{ value: Goal, name: 'Goal'},
      	{ value: GraphDefinition, name: 'GraphDefinition'},
      	{ value: Group, name: 'Group'},
      	{ value: GuidanceResponse, name: 'GuidanceResponse'},
      	{ value: HealthcareService, name: 'HealthcareService'},
      	{ value: ImagingStudy, name: 'ImagingStudy'},
      	{ value: Immunization, name: 'Immunization'},
      	{ value: ImmunizationEvaluation, name: 'ImmunizationEvaluation'},
      	{ value: ImmunizationRecommendation, name: 'ImmunizationRecommendation'},
      	{ value: ImplementationGuide, name: 'ImplementationGuide'},
      	{ value: InsurancePlan, name: 'InsurancePlan'},
      	{ value: Invoice, name: 'Invoice'},
      	{ value: Library, name: 'Library'},
      	{ value: Linkage, name: 'Linkage'},
      	{ value: List, name: 'List'},
      	{ value: Location, name: 'Location'},
      	{ value: Measure, name: 'Measure'},
      	{ value: MeasureReport, name: 'MeasureReport'},
      	{ value: Media, name: 'Media'},
      	{ value: Medication, name: 'Medication'},
      	{ value: MedicationAdministration, name: 'MedicationAdministration'},
      	{ value: MedicationDispense, name: 'MedicationDispense'},
      	{ value: MedicationKnowledge, name: 'MedicationKnowledge'},
      	{ value: MedicationRequest, name: 'MedicationRequest'},
      	{ value: MedicationStatement, name: 'MedicationStatement'},
      	{ value: MedicinalProduct, name: 'MedicinalProduct'},
      	{ value: MedicinalProductAuthorization, name: 'MedicinalProductAuthorization'},
      	{ value: MedicinalProductContraindication, name: 'MedicinalProductContraindication'},
      	{ value: MedicinalProductIndication, name: 'MedicinalProductIndication'},
      	{ value: MedicinalProductIngredient, name: 'MedicinalProductIngredient'},
      	{ value: MedicinalProductInteraction, name: 'MedicinalProductInteraction'},
      	{ value: MedicinalProductManufactured, name: 'MedicinalProductManufactured'},
      	{ value: MedicinalProductPackaged, name: 'MedicinalProductPackaged'},
      	{ value: MedicinalProductPharmaceutical, name: 'MedicinalProductPharmaceutical'},
      	{ value: MedicinalProductUndesirableEffect, name: 'MedicinalProductUndesirableEffect'},
      	{ value: MessageDefinition, name: 'MessageDefinition'},
      	{ value: MessageHeader, name: 'MessageHeader'},
      	{ value: MolecularSequence, name: 'MolecularSequence'},
      	{ value: NamingSystem, name: 'NamingSystem'},
      	{ value: NutritionOrder, name: 'NutritionOrder'},
      	{ value: Observation, name: 'Observation'},
      	{ value: ObservationDefinition, name: 'ObservationDefinition'},
      	{ value: OperationDefinition, name: 'OperationDefinition'},
      	{ value: OperationOutcome, name: 'OperationOutcome'},
      	{ value: Organization, name: 'Organization'},
      	{ value: OrganizationAffiliation, name: 'OrganizationAffiliation'},
      	{ value: Parameters, name: 'Parameters'},
      	{ value: Patient, name: 'Patient'},
      	{ value: PaymentNotice, name: 'PaymentNotice'},
      	{ value: PaymentReconciliation, name: 'PaymentReconciliation'},
      	{ value: Person, name: 'Person'},
      	{ value: PlanDefinition, name: 'PlanDefinition'},
      	{ value: Practitioner, name: 'Practitioner'},
      	{ value: PractitionerRole, name: 'PractitionerRole'},
      	{ value: Procedure, name: 'Procedure'},
      	{ value: Provenance, name: 'Provenance'},
      	{ value: Questionnaire, name: 'Questionnaire'},
      	{ value: QuestionnaireResponse, name: 'QuestionnaireResponse'},
      	{ value: RelatedPerson, name: 'RelatedPerson'},
      	{ value: RequestGroup, name: 'RequestGroup'},
      	{ value: ResearchDefinition, name: 'ResearchDefinition'},
      	{ value: ResearchElementDefinition, name: 'ResearchElementDefinition'},
      	{ value: ResearchStudy, name: 'ResearchStudy'},
      	{ value: ResearchSubject, name: 'ResearchSubject'},
      	{ value: RiskAssessment, name: 'RiskAssessment'},
      	{ value: RiskEvidenceSynthesis, name: 'RiskEvidenceSynthesis'},
      	{ value: Schedule, name: 'Schedule'},
      	{ value: SearchParameter, name: 'SearchParameter'},
      	{ value: ServiceRequest, name: 'ServiceRequest'},
      	{ value: Slot, name: 'Slot'},
      	{ value: Specimen, name: 'Specimen'},
      	{ value: SpecimenDefinition, name: 'SpecimenDefinition'},
      	{ value: StructureDefinition, name: 'StructureDefinition'},
      	{ value: StructureMap, name: 'StructureMap'},
      	{ value: Subscription, name: 'Subscription'},
      	{ value: Substance, name: 'Substance'},
      	{ value: SubstanceNucleicAcid, name: 'SubstanceNucleicAcid'},
      	{ value: SubstancePolymer, name: 'SubstancePolymer'},
      	{ value: SubstanceProtein, name: 'SubstanceProtein'},
      	{ value: SubstanceReferenceInformation, name: 'SubstanceReferenceInformation'},
      	{ value: SubstanceSourceMaterial, name: 'SubstanceSourceMaterial'},
      	{ value: SubstanceSpecification, name: 'SubstanceSpecification'},
      	{ value: SupplyDelivery, name: 'SupplyDelivery'},
      	{ value: SupplyRequest, name: 'SupplyRequest'},
      	{ value: Task, name: 'Task'},
      	{ value: TerminologyCapabilities, name: 'TerminologyCapabilities'},
      	{ value: TestReport, name: 'TestReport'},
      	{ value: TestScript, name: 'TestScript'},
      	{ value: ValueSet, name: 'ValueSet'},
      	{ value: VerificationResult, name: 'VerificationResult'},
      	{ value: VisionPrescription, name: 'VisionPrescription'}
      ],
    }
  })
  protected contained?: ResourceList[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the
   * resource. To make the use of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any implementer can define an extension,
   * there is a set of requirements that SHALL be met as part of the definition of the extension.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Extension)
  protected extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the
   * resource and that modifies the understanding of the element that contains it and/or the
   * understanding of the containing element's descendants. Usually modifier elements provide negation
   * or qualification. To make the use of extensions safe and manageable, there is a strict set of
   * governance applied to the definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met as part of the definition of
   * the extension. Applications processing a resource are required to check for modifier extensions.
   * 
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource
   * (including cannot change the meaning of modifierExtension itself).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Extension)
  protected modifierExtension?: Extension[];

  /**
   * A unique identifier assigned to this explanation of benefit.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Identifier)
  protected identifier?: Identifier[];

  /**
   * The status of the resource instance.
   * Field access restricted because there are specific valid values.
   */
  protected status?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _status?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   subType?: CodeableConcept;

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected use?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _use?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   patient?: Reference;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   billablePeriod?: Period;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected created?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _created?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   enterer?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   insurer?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   provider?: Reference;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   priority?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   fundsReserveRequested?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   fundsReserve?: CodeableConcept;

  /**
   * Other claims which are related to this claim such as prior submissions or claims for related
   * services or for the same event.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitRelated)
  protected related?: ExplanationOfBenefitRelated[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   prescription?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   originalPrescription?: Reference;

  /**
   * This resource provides: the claim details; adjudication details from the processing of a Claim; and
   * optionally account balance information, for informing the subscriber of the benefits provided.
   */
  @Type(() => ExplanationOfBenefitPayee)
   payee?: ExplanationOfBenefitPayee;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   referral?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   facility?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   claim?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   claimResponse?: Reference;

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected outcome?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _outcome?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected disposition?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _disposition?: Element;

  /**
   * Reference from the Insurer which is used in later communications which refers to this adjudication.
   * Field access restricted because there are specific valid values.
   */
  protected preAuthRef?: string[];

  /**
   * Extensions for preAuthRef
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _preAuthRef?: Element[];

  /**
   * The timeframe during which the supplied preauthorization reference may be quoted on claims to
   * obtain the adjudication as provided.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Period)
  protected preAuthRefPeriod?: Period[];

  /**
   * The members of the team who provided the products and services.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitCareTeam)
  protected careTeam?: ExplanationOfBenefitCareTeam[];

  /**
   * Additional information codes regarding exceptions, special considerations, the condition,
   * situation, prior or concurrent issues.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitSupportingInfo)
  protected supportingInfo?: ExplanationOfBenefitSupportingInfo[];

  /**
   * Information about diagnoses relevant to the claim items.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitDiagnosis)
  protected diagnosis?: ExplanationOfBenefitDiagnosis[];

  /**
   * Procedures performed on the patient relevant to the billing items with the claim.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitProcedure)
  protected procedure?: ExplanationOfBenefitProcedure[];

  /**
   * An integer with a value that is positive (e.g. >0)
   */
   precedence?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _precedence?: Element;

  /**
   * Financial instruments for reimbursement for the health care products and services specified on the
   * claim.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitInsurance)
  protected insurance?: ExplanationOfBenefitInsurance[];

  /**
   * This resource provides: the claim details; adjudication details from the processing of a Claim; and
   * optionally account balance information, for informing the subscriber of the benefits provided.
   */
  @Type(() => ExplanationOfBenefitAccident)
   accident?: ExplanationOfBenefitAccident;

  /**
   * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a
   * simple items or groups of sub-details.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitItem)
  protected item?: ExplanationOfBenefitItem[];

  /**
   * The first-tier service adjudications for payor added product or service lines.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitAddItem)
  protected addItem?: ExplanationOfBenefitAddItem[];

  /**
   * The adjudication results which are presented at the header level rather than at the line-item or
   * add-item levels.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitAdjudication)
  protected adjudication?: ExplanationOfBenefitAdjudication[];

  /**
   * Categorized monetary totals for the adjudication.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitTotal)
  protected total?: ExplanationOfBenefitTotal[];

  /**
   * This resource provides: the claim details; adjudication details from the processing of a Claim; and
   * optionally account balance information, for informing the subscriber of the benefits provided.
   */
  @Type(() => ExplanationOfBenefitPayment)
   payment?: ExplanationOfBenefitPayment;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   formCode?: CodeableConcept;

  /**
   * For referring to data content defined in other formats.
   */
  @Type(() => Attachment)
   form?: Attachment;

  /**
   * A note that describes or explains adjudication results in a human readable form.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitProcessNote)
  protected processNote?: ExplanationOfBenefitProcessNote[];

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   benefitPeriod?: Period;

  /**
   * Balance by Benefit Category.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitBenefitBalance)
  protected benefitBalance?: ExplanationOfBenefitBenefitBalance[];


  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.id) !== 'undefined') {
         delete this.id;
      }
      return;
    }
    
    if (REGEX_ID_000.test(newValue)) {
      this.id = newValue
    } else {
      throw new Error("Invalid value pattern for id of " + newValue);
    }
  }
  
  public getIdPattern(): string {
    return REGEX_ID_000.source;
  }
  

  public getId(): string | undefined {
      return this.id;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setImplicitRules(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.implicitRules) !== 'undefined') {
         delete this.implicitRules;
      }
      return;
    }
    
    if (REGEX_IMPLICITRULES.test(newValue)) {
      this.implicitRules = newValue
    } else {
      throw new Error("Invalid value pattern for implicitRules of " + newValue);
    }
  }
  
  public getImplicitRulesPattern(): string {
    return REGEX_IMPLICITRULES.source;
  }
  

  public getImplicitRules(): string | undefined {
      return this.implicitRules;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setLanguage(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.language) !== 'undefined') {
         delete this.language;
      }
      return;
    }
    
    if (REGEX_LANGUAGE.test(newValue)) {
      this.language = newValue
    } else {
      throw new Error("Invalid value pattern for language of " + newValue);
    }
  }
  
  public getLanguagePattern(): string {
    return REGEX_LANGUAGE.source;
  }
  

  public getLanguage(): string | undefined {
      return this.language;
  }

  public addContained(newValue: ResourceList) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.contained) !== 'undefined') {
         delete this.contained;
      }
      return;
    }
    
    if (typeof(this.contained) === 'undefined') {
      this.contained =  [];
    }
    this.contained.push(newValue);
  }

  public getContained(): ResourceList[] | undefined {
      return this.contained;
  }

  public addExtension(newValue: Extension) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.extension) !== 'undefined') {
         delete this.extension;
      }
      return;
    }
    
    if (typeof(this.extension) === 'undefined') {
      this.extension =  [];
    }
    this.extension.push(newValue);
  }

  public getExtension(): Extension[] | undefined {
      return this.extension;
  }

  public addModifierExtension(newValue: Extension) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.modifierExtension) !== 'undefined') {
         delete this.modifierExtension;
      }
      return;
    }
    
    if (typeof(this.modifierExtension) === 'undefined') {
      this.modifierExtension =  [];
    }
    this.modifierExtension.push(newValue);
  }

  public getModifierExtension(): Extension[] | undefined {
      return this.modifierExtension;
  }

  public addIdentifier(newValue: Identifier) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.identifier) !== 'undefined') {
         delete this.identifier;
      }
      return;
    }
    
    if (typeof(this.identifier) === 'undefined') {
      this.identifier =  [];
    }
    this.identifier.push(newValue);
  }

  public getIdentifier(): Identifier[] | undefined {
      return this.identifier;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setStatus(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.status) !== 'undefined') {
         delete this.status;
      }
      return;
    }
    
    const idx = getValidValueIdx(ExplanationOfBenefitStatus_list_ValidValues, newValue);
    if (idx >= 0) {
      this.status = ExplanationOfBenefitStatus_list_ValidValues[idx];
    } else {
      throw new Error("Unknown status of " + newValue);
    }
  }
  
  public getExplanationOfBenefitStatusValidValues(): string[] {
    return ExplanationOfBenefitStatus_list_ValidValues;
  }
  

  public getStatus(): string | undefined {
      return this.status;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setUse(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.use) !== 'undefined') {
         delete this.use;
      }
      return;
    }
    
    if (REGEX_USE.test(newValue)) {
      this.use = newValue
    } else {
      throw new Error("Invalid value pattern for use of " + newValue);
    }
  }
  
  public getUsePattern(): string {
    return REGEX_USE.source;
  }
  

  public getUse(): string | undefined {
      return this.use;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setCreated(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.created) !== 'undefined') {
         delete this.created;
      }
      return;
    }
    
    if (REGEX_CREATED.test(newValue)) {
      this.created = newValue
    } else {
      throw new Error("Invalid value pattern for created of " + newValue);
    }
  }
  
  public getCreatedPattern(): string {
    return REGEX_CREATED.source;
  }
  

  public getCreated(): string | undefined {
      return this.created;
  }

  public addRelated(newValue: ExplanationOfBenefitRelated) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.related) !== 'undefined') {
         delete this.related;
      }
      return;
    }
    
    if (typeof(this.related) === 'undefined') {
      this.related =  [];
    }
    this.related.push(newValue);
  }

  public getRelated(): ExplanationOfBenefitRelated[] | undefined {
      return this.related;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setOutcome(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.outcome) !== 'undefined') {
         delete this.outcome;
      }
      return;
    }
    
    if (REGEX_OUTCOME.test(newValue)) {
      this.outcome = newValue
    } else {
      throw new Error("Invalid value pattern for outcome of " + newValue);
    }
  }
  
  public getOutcomePattern(): string {
    return REGEX_OUTCOME.source;
  }
  

  public getOutcome(): string | undefined {
      return this.outcome;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDisposition(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.disposition) !== 'undefined') {
         delete this.disposition;
      }
      return;
    }
    
    if (REGEX_DISPOSITION.test(newValue)) {
      this.disposition = newValue
    } else {
      throw new Error("Invalid value pattern for disposition of " + newValue);
    }
  }
  
  public getDispositionPattern(): string {
    return REGEX_DISPOSITION.source;
  }
  

  public getDisposition(): string | undefined {
      return this.disposition;
  }

  public addPreAuthRef(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.preAuthRef) !== 'undefined') {
         delete this.preAuthRef;
      }
      return;
    }
    
    if (typeof(this.preAuthRef) === 'undefined') {
      this.preAuthRef =  [];
    }
    this.preAuthRef.push(newValue);
  }

  public getPreAuthRef(): string[] | undefined {
      return this.preAuthRef;
  }

  public add_preAuthRef(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._preAuthRef) !== 'undefined') {
         delete this._preAuthRef;
      }
      return;
    }
    
    if (typeof(this._preAuthRef) === 'undefined') {
      this._preAuthRef =  [];
    }
    this._preAuthRef.push(newValue);
  }

  public get_preAuthRef(): Element[] | undefined {
      return this._preAuthRef;
  }

  public addPreAuthRefPeriod(newValue: Period) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.preAuthRefPeriod) !== 'undefined') {
         delete this.preAuthRefPeriod;
      }
      return;
    }
    
    if (typeof(this.preAuthRefPeriod) === 'undefined') {
      this.preAuthRefPeriod =  [];
    }
    this.preAuthRefPeriod.push(newValue);
  }

  public getPreAuthRefPeriod(): Period[] | undefined {
      return this.preAuthRefPeriod;
  }

  public addCareTeam(newValue: ExplanationOfBenefitCareTeam) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.careTeam) !== 'undefined') {
         delete this.careTeam;
      }
      return;
    }
    
    if (typeof(this.careTeam) === 'undefined') {
      this.careTeam =  [];
    }
    this.careTeam.push(newValue);
  }

  public getCareTeam(): ExplanationOfBenefitCareTeam[] | undefined {
      return this.careTeam;
  }

  public addSupportingInfo(newValue: ExplanationOfBenefitSupportingInfo) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.supportingInfo) !== 'undefined') {
         delete this.supportingInfo;
      }
      return;
    }
    
    if (typeof(this.supportingInfo) === 'undefined') {
      this.supportingInfo =  [];
    }
    this.supportingInfo.push(newValue);
  }

  public getSupportingInfo(): ExplanationOfBenefitSupportingInfo[] | undefined {
      return this.supportingInfo;
  }

  public addDiagnosis(newValue: ExplanationOfBenefitDiagnosis) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.diagnosis) !== 'undefined') {
         delete this.diagnosis;
      }
      return;
    }
    
    if (typeof(this.diagnosis) === 'undefined') {
      this.diagnosis =  [];
    }
    this.diagnosis.push(newValue);
  }

  public getDiagnosis(): ExplanationOfBenefitDiagnosis[] | undefined {
      return this.diagnosis;
  }

  public addProcedure(newValue: ExplanationOfBenefitProcedure) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.procedure) !== 'undefined') {
         delete this.procedure;
      }
      return;
    }
    
    if (typeof(this.procedure) === 'undefined') {
      this.procedure =  [];
    }
    this.procedure.push(newValue);
  }

  public getProcedure(): ExplanationOfBenefitProcedure[] | undefined {
      return this.procedure;
  }

  public addInsurance(newValue: ExplanationOfBenefitInsurance) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.insurance) !== 'undefined') {
         delete this.insurance;
      }
      return;
    }
    
    if (typeof(this.insurance) === 'undefined') {
      this.insurance =  [];
    }
    this.insurance.push(newValue);
  }

  public getInsurance(): ExplanationOfBenefitInsurance[] | undefined {
      return this.insurance;
  }

  public addItemValue(newValue: ExplanationOfBenefitItem) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.item) !== 'undefined') {
         delete this.item;
      }
      return;
    }
    
    if (typeof(this.item) === 'undefined') {
      this.item =  [];
    }
    this.item.push(newValue);
  }

  public getItem(): ExplanationOfBenefitItem[] | undefined {
      return this.item;
  }

  public addAddItem(newValue: ExplanationOfBenefitAddItem) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.addItem) !== 'undefined') {
         delete this.addItem;
      }
      return;
    }
    
    if (typeof(this.addItem) === 'undefined') {
      this.addItem =  [];
    }
    this.addItem.push(newValue);
  }

  public getAddItem(): ExplanationOfBenefitAddItem[] | undefined {
      return this.addItem;
  }

  public addAdjudication(newValue: ExplanationOfBenefitAdjudication) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.adjudication) !== 'undefined') {
         delete this.adjudication;
      }
      return;
    }
    
    if (typeof(this.adjudication) === 'undefined') {
      this.adjudication =  [];
    }
    this.adjudication.push(newValue);
  }

  public getAdjudication(): ExplanationOfBenefitAdjudication[] | undefined {
      return this.adjudication;
  }

  public addTotal(newValue: ExplanationOfBenefitTotal) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.total) !== 'undefined') {
         delete this.total;
      }
      return;
    }
    
    if (typeof(this.total) === 'undefined') {
      this.total =  [];
    }
    this.total.push(newValue);
  }

  public getTotal(): ExplanationOfBenefitTotal[] | undefined {
      return this.total;
  }

  public addProcessNote(newValue: ExplanationOfBenefitProcessNote) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.processNote) !== 'undefined') {
         delete this.processNote;
      }
      return;
    }
    
    if (typeof(this.processNote) === 'undefined') {
      this.processNote =  [];
    }
    this.processNote.push(newValue);
  }

  public getProcessNote(): ExplanationOfBenefitProcessNote[] | undefined {
      return this.processNote;
  }

  public addBenefitBalance(newValue: ExplanationOfBenefitBenefitBalance) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.benefitBalance) !== 'undefined') {
         delete this.benefitBalance;
      }
      return;
    }
    
    if (typeof(this.benefitBalance) === 'undefined') {
      this.benefitBalance =  [];
    }
    this.benefitBalance.push(newValue);
  }

  public getBenefitBalance(): ExplanationOfBenefitBenefitBalance[] | undefined {
      return this.benefitBalance;
  }


}



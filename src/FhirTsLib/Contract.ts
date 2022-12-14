import { Type } from 'class-transformer';
import { REGEX_ID_000, REGEX_IMPLICITRULES, REGEX_LANGUAGE, REGEX_URL, REGEX_VERSION, REGEX_STATUS_000, REGEX_INSTANTIATESURI, REGEX_ISSUED, REGEX_NAME, REGEX_TITLE, REGEX_SUBTITLE } from '../FhirTsLibValidation/FhirRegex';
import { Attachment, CodeableConcept, ContractContentDefinition, ContractFriendly, ContractLegal, ContractRule, ContractSigner, ContractTerm, Element, Extension, Identifier, Meta, Narrative, Period, Reference, ResourceList, Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription } from './FhirType';



/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or
 * agreement.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Contract
 */
export class Contract {
  /**
   * This is a Contract resource
   */
     resourceType = "Contract";

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
   * Unique identifier for this Contract or a derivative that references a Source Contract.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Identifier)
  protected identifier?: Identifier[];

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected url?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _url?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected version?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _version?: Element;

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
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
   legalState?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   instantiatesCanonical?: Reference;

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected instantiatesUri?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _instantiatesUri?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   contentDerivative?: CodeableConcept;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected issued?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _issued?: Element;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   applies?: Period;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   expirationType?: CodeableConcept;

  /**
   * The target entity impacted by or of interest to parties to the agreement.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected subject?: Reference[];

  /**
   * A formally or informally recognized grouping of people, principals, organizations, or jurisdictions
   * formed for the purpose of achieving some form of collective action such as the promulgation,
   * administration and enforcement of contracts and policies.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected authority?: Reference[];

  /**
   * Recognized governance framework or system operating with a circumscribed scope in accordance with
   * specified principles, policies, processes or procedures for managing rights, actions, or behaviors
   * of parties or principals relative to resources.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected domain?: Reference[];

  /**
   * Sites in which the contract is complied with,  exercised, or in force.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected site?: Reference[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected name?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _name?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected title?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _title?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected subtitle?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _subtitle?: Element;

  /**
   * Alternative representation of the title for this Contract definition, derivative, or instance in
   * any legal state., e.g., a domain specific contract number related to legislation.
   * Field access restricted because there are specific valid values.
   */
  protected alias?: string[];

  /**
   * Extensions for alias
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _alias?: Element[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   author?: Reference;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   scope?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   topicCodeableConcept?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   topicReference?: Reference;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * Sub-category for the Contract that distinguishes the kinds of systems that would be interested in
   * the Contract within the context of the Contract's scope.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected subType?: CodeableConcept[];

  /**
   * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or
   * agreement.
   */
  @Type(() => ContractContentDefinition)
   contentDefinition?: ContractContentDefinition;

  /**
   * One or more Contract Provisions, which may be related and conveyed as a group, and may contain
   * nested groups.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContractTerm)
  protected term?: ContractTerm[];

  /**
   * Information that may be needed by/relevant to the performer in their execution of this term action.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected supportingInfo?: Reference[];

  /**
   * Links to Provenance records for past versions of this Contract definition, derivative, or instance,
   * which identify key state transitions or updates that are likely to be relevant to a user looking at
   * the current version of the Contract.  The Provence.entity indicates the target that was changed in
   * the update. http://build.fhir.org/provenance-definitions.html#Provenance.entity.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected relevantHistory?: Reference[];

  /**
   * Parties with legal standing in the Contract, including the principal parties, the grantor(s) and
   * grantee(s), which are any person or organization bound by the contract, and any ancillary parties,
   * which facilitate the execution of the contract such as a notary or witness.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContractSigner)
  protected signer?: ContractSigner[];

  /**
   * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly
   * language" means the representation of the Contract and Contract Provisions in a manner that is
   * readily accessible and understandable by a layperson in accordance with best practices for
   * communication styles that ensure that those agreeing to or signing the Contract understand the
   * roles, actions, obligations, responsibilities, and implication of the agreement.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContractFriendly)
  protected friendly?: ContractFriendly[];

  /**
   * List of Legal expressions or representations of this Contract.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContractLegal)
  protected legal?: ContractLegal[];

  /**
   * List of Computable Policy Rule Language Representations of this Contract.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContractRule)
  protected rule?: ContractRule[];

  /**
   * For referring to data content defined in other formats.
   */
  @Type(() => Attachment)
   legallyBindingAttachment?: Attachment;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   legallyBindingReference?: Reference;


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
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setUrl(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.url) !== 'undefined') {
         delete this.url;
      }
      return;
    }
    
    if (REGEX_URL.test(newValue)) {
      this.url = newValue
    } else {
      throw new Error("Invalid value pattern for url of " + newValue);
    }
  }
  
  public getUrlPattern(): string {
    return REGEX_URL.source;
  }
  

  public getUrl(): string | undefined {
      return this.url;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setVersion(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.version) !== 'undefined') {
         delete this.version;
      }
      return;
    }
    
    if (REGEX_VERSION.test(newValue)) {
      this.version = newValue
    } else {
      throw new Error("Invalid value pattern for version of " + newValue);
    }
  }
  
  public getVersionPattern(): string {
    return REGEX_VERSION.source;
  }
  

  public getVersion(): string | undefined {
      return this.version;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setStatus(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.status) !== 'undefined') {
         delete this.status;
      }
      return;
    }
    
    if (REGEX_STATUS_000.test(newValue)) {
      this.status = newValue
    } else {
      throw new Error("Invalid value pattern for status of " + newValue);
    }
  }
  
  public getStatusPattern(): string {
    return REGEX_STATUS_000.source;
  }
  

  public getStatus(): string | undefined {
      return this.status;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setInstantiatesUri(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.instantiatesUri) !== 'undefined') {
         delete this.instantiatesUri;
      }
      return;
    }
    
    if (REGEX_INSTANTIATESURI.test(newValue)) {
      this.instantiatesUri = newValue
    } else {
      throw new Error("Invalid value pattern for instantiatesUri of " + newValue);
    }
  }
  
  public getInstantiatesUriPattern(): string {
    return REGEX_INSTANTIATESURI.source;
  }
  

  public getInstantiatesUri(): string | undefined {
      return this.instantiatesUri;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setIssued(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.issued) !== 'undefined') {
         delete this.issued;
      }
      return;
    }
    
    if (REGEX_ISSUED.test(newValue)) {
      this.issued = newValue
    } else {
      throw new Error("Invalid value pattern for issued of " + newValue);
    }
  }
  
  public getIssuedPattern(): string {
    return REGEX_ISSUED.source;
  }
  

  public getIssued(): string | undefined {
      return this.issued;
  }

  public addSubject(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.subject) !== 'undefined') {
         delete this.subject;
      }
      return;
    }
    
    if (typeof(this.subject) === 'undefined') {
      this.subject =  [];
    }
    this.subject.push(newValue);
  }

  public getSubject(): Reference[] | undefined {
      return this.subject;
  }

  public addAuthority(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.authority) !== 'undefined') {
         delete this.authority;
      }
      return;
    }
    
    if (typeof(this.authority) === 'undefined') {
      this.authority =  [];
    }
    this.authority.push(newValue);
  }

  public getAuthority(): Reference[] | undefined {
      return this.authority;
  }

  public addDomain(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.domain) !== 'undefined') {
         delete this.domain;
      }
      return;
    }
    
    if (typeof(this.domain) === 'undefined') {
      this.domain =  [];
    }
    this.domain.push(newValue);
  }

  public getDomain(): Reference[] | undefined {
      return this.domain;
  }

  public addSite(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.site) !== 'undefined') {
         delete this.site;
      }
      return;
    }
    
    if (typeof(this.site) === 'undefined') {
      this.site =  [];
    }
    this.site.push(newValue);
  }

  public getSite(): Reference[] | undefined {
      return this.site;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setName(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.name) !== 'undefined') {
         delete this.name;
      }
      return;
    }
    
    if (REGEX_NAME.test(newValue)) {
      this.name = newValue
    } else {
      throw new Error("Invalid value pattern for name of " + newValue);
    }
  }
  
  public getNamePattern(): string {
    return REGEX_NAME.source;
  }
  

  public getName(): string | undefined {
      return this.name;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTitle(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.title) !== 'undefined') {
         delete this.title;
      }
      return;
    }
    
    if (REGEX_TITLE.test(newValue)) {
      this.title = newValue
    } else {
      throw new Error("Invalid value pattern for title of " + newValue);
    }
  }
  
  public getTitlePattern(): string {
    return REGEX_TITLE.source;
  }
  

  public getTitle(): string | undefined {
      return this.title;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSubtitle(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.subtitle) !== 'undefined') {
         delete this.subtitle;
      }
      return;
    }
    
    if (REGEX_SUBTITLE.test(newValue)) {
      this.subtitle = newValue
    } else {
      throw new Error("Invalid value pattern for subtitle of " + newValue);
    }
  }
  
  public getSubtitlePattern(): string {
    return REGEX_SUBTITLE.source;
  }
  

  public getSubtitle(): string | undefined {
      return this.subtitle;
  }

  public addAlias(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.alias) !== 'undefined') {
         delete this.alias;
      }
      return;
    }
    
    if (typeof(this.alias) === 'undefined') {
      this.alias =  [];
    }
    this.alias.push(newValue);
  }

  public getAlias(): string[] | undefined {
      return this.alias;
  }

  public add_alias(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._alias) !== 'undefined') {
         delete this._alias;
      }
      return;
    }
    
    if (typeof(this._alias) === 'undefined') {
      this._alias =  [];
    }
    this._alias.push(newValue);
  }

  public get_alias(): Element[] | undefined {
      return this._alias;
  }

  public addSubType(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.subType) !== 'undefined') {
         delete this.subType;
      }
      return;
    }
    
    if (typeof(this.subType) === 'undefined') {
      this.subType =  [];
    }
    this.subType.push(newValue);
  }

  public getSubType(): CodeableConcept[] | undefined {
      return this.subType;
  }

  public addTerm(newValue: ContractTerm) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.term) !== 'undefined') {
         delete this.term;
      }
      return;
    }
    
    if (typeof(this.term) === 'undefined') {
      this.term =  [];
    }
    this.term.push(newValue);
  }

  public getTerm(): ContractTerm[] | undefined {
      return this.term;
  }

  public addSupportingInfo(newValue: Reference) {
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

  public getSupportingInfo(): Reference[] | undefined {
      return this.supportingInfo;
  }

  public addRelevantHistory(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.relevantHistory) !== 'undefined') {
         delete this.relevantHistory;
      }
      return;
    }
    
    if (typeof(this.relevantHistory) === 'undefined') {
      this.relevantHistory =  [];
    }
    this.relevantHistory.push(newValue);
  }

  public getRelevantHistory(): Reference[] | undefined {
      return this.relevantHistory;
  }

  public addSigner(newValue: ContractSigner) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.signer) !== 'undefined') {
         delete this.signer;
      }
      return;
    }
    
    if (typeof(this.signer) === 'undefined') {
      this.signer =  [];
    }
    this.signer.push(newValue);
  }

  public getSigner(): ContractSigner[] | undefined {
      return this.signer;
  }

  public addFriendly(newValue: ContractFriendly) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.friendly) !== 'undefined') {
         delete this.friendly;
      }
      return;
    }
    
    if (typeof(this.friendly) === 'undefined') {
      this.friendly =  [];
    }
    this.friendly.push(newValue);
  }

  public getFriendly(): ContractFriendly[] | undefined {
      return this.friendly;
  }

  public addLegal(newValue: ContractLegal) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.legal) !== 'undefined') {
         delete this.legal;
      }
      return;
    }
    
    if (typeof(this.legal) === 'undefined') {
      this.legal =  [];
    }
    this.legal.push(newValue);
  }

  public getLegal(): ContractLegal[] | undefined {
      return this.legal;
  }

  public addRule(newValue: ContractRule) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.rule) !== 'undefined') {
         delete this.rule;
      }
      return;
    }
    
    if (typeof(this.rule) === 'undefined') {
      this.rule =  [];
    }
    this.rule.push(newValue);
  }

  public getRule(): ContractRule[] | undefined {
      return this.rule;
  }


}



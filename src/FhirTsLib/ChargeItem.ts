import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID_000, REGEX_IMPLICITRULES, REGEX_LANGUAGE, REGEX_OCCURRENCEDATETIME, REGEX_OVERRIDEREASON, REGEX_ENTEREDDATE } from '../FhirTsLibValidation/FhirRegex';
import { Annotation, ChargeItemPerformer, CodeableConcept, Element, Extension, Identifier, Meta, Money, Narrative, Period, Quantity, Reference, ResourceList, Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription, Timing } from './FhirType';
import { ChargeItemStatus_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain
 * patient, therefore referring not only to the product, but containing in addition details of the
 * provision, like date, time, amounts and participating organizations and persons. Main Usage of the
 * ChargeItem is to enable the billing process and internal cost allocation.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ChargeItem
 */
export class ChargeItem {
  /**
   * This is a ChargeItem resource
   */
     resourceType = "ChargeItem";

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
   * Identifiers assigned to this event performer or other systems.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Identifier)
  protected identifier?: Identifier[];

  /**
   * References the (external) source of pricing information, rules of application for the code this
   * ChargeItem uses.
   * Field access restricted because there are specific valid values.
   */
  protected definitionUri?: string[];

  /**
   * Extensions for definitionUri
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _definitionUri?: Element[];

  /**
   * References the source of pricing information, rules of application for the code this ChargeItem
   * uses.
   * Field access restricted because there are specific valid values.
   */
  protected definitionCanonical?: string[];

  /**
   * The current state of the ChargeItem.
   * Field access restricted because there are specific valid values.
   */
  protected status?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _status?: Element;

  /**
   * ChargeItems can be grouped to larger ChargeItems covering the whole set.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected partOf?: Reference[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   code?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   subject?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   context?: Reference;

  /**
   * Date/time(s) or duration when the charged service was applied.
   * Field access restricted because there are specific valid values.
   */
  protected occurrenceDateTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _occurrenceDateTime?: Element;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   occurrencePeriod?: Period;

  /**
   * Specifies an event that may occur multiple times. Timing schedules are used to record when things
   * are planned, expected or requested to occur. The most common usage is in dosage instructions for
   * medications. They are also used when planning care of various kinds, and may be used for reporting
   * the schedule to which past regular activities were carried out.
   */
  @Type(() => Timing)
   occurrenceTiming?: Timing;

  /**
   * Indicates who or what performed or participated in the charged service.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ChargeItemPerformer)
  protected performer?: ChargeItemPerformer[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   performingOrganization?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   requestingOrganization?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   costCenter?: Reference;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   quantity?: Quantity;

  /**
   * The anatomical location where the related service has been applied.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected bodysite?: CodeableConcept[];

  /**
   * A rational number with implicit precision
   */
   factorOverride?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _factorOverride?: Element;

  /**
   * An amount of economic utility in some recognized currency.
   */
  @Type(() => Money)
   priceOverride?: Money;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected overrideReason?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _overrideReason?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   enterer?: Reference;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected enteredDate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _enteredDate?: Element;

  /**
   * Describes why the event occurred in coded or textual form.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected reason?: CodeableConcept[];

  /**
   * Indicated the rendered service that caused this charge.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected service?: Reference[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   productReference?: Reference;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   productCodeableConcept?: CodeableConcept;

  /**
   * Account into which this ChargeItems belongs.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected account?: Reference[];

  /**
   * Comments made about the event by the performer, subject or other participants.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Annotation)
  protected note?: Annotation[];

  /**
   * Further information supporting this charge.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected supportingInformation?: Reference[];


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

  public addDefinitionUri(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.definitionUri) !== 'undefined') {
         delete this.definitionUri;
      }
      return;
    }
    
    if (typeof(this.definitionUri) === 'undefined') {
      this.definitionUri =  [];
    }
    this.definitionUri.push(newValue);
  }

  public getDefinitionUri(): string[] | undefined {
      return this.definitionUri;
  }

  public add_definitionUri(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._definitionUri) !== 'undefined') {
         delete this._definitionUri;
      }
      return;
    }
    
    if (typeof(this._definitionUri) === 'undefined') {
      this._definitionUri =  [];
    }
    this._definitionUri.push(newValue);
  }

  public get_definitionUri(): Element[] | undefined {
      return this._definitionUri;
  }

  public addDefinitionCanonical(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.definitionCanonical) !== 'undefined') {
         delete this.definitionCanonical;
      }
      return;
    }
    
    if (typeof(this.definitionCanonical) === 'undefined') {
      this.definitionCanonical =  [];
    }
    this.definitionCanonical.push(newValue);
  }

  public getDefinitionCanonical(): string[] | undefined {
      return this.definitionCanonical;
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
    
    const idx = getValidValueIdx(ChargeItemStatus_list_ValidValues, newValue);
    if (idx >= 0) {
      this.status = ChargeItemStatus_list_ValidValues[idx];
    } else {
      throw new Error("Unknown status of " + newValue);
    }
  }
  
  public getChargeItemStatusValidValues(): string[] {
    return ChargeItemStatus_list_ValidValues;
  }
  

  public getStatus(): string | undefined {
      return this.status;
  }

  public addPartOf(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.partOf) !== 'undefined') {
         delete this.partOf;
      }
      return;
    }
    
    if (typeof(this.partOf) === 'undefined') {
      this.partOf =  [];
    }
    this.partOf.push(newValue);
  }

  public getPartOf(): Reference[] | undefined {
      return this.partOf;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setOccurrenceDateTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.occurrenceDateTime) !== 'undefined') {
         delete this.occurrenceDateTime;
      }
      return;
    }
    
    if (REGEX_OCCURRENCEDATETIME.test(newValue)) {
      this.occurrenceDateTime = newValue
    } else {
      throw new Error("Invalid value pattern for occurrenceDateTime of " + newValue);
    }
  }
  
  public getOccurrenceDateTimePattern(): string {
    return REGEX_OCCURRENCEDATETIME.source;
  }
  

  public getOccurrenceDateTime(): string | undefined {
      return this.occurrenceDateTime;
  }

  public addPerformer(newValue: ChargeItemPerformer) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.performer) !== 'undefined') {
         delete this.performer;
      }
      return;
    }
    
    if (typeof(this.performer) === 'undefined') {
      this.performer =  [];
    }
    this.performer.push(newValue);
  }

  public getPerformer(): ChargeItemPerformer[] | undefined {
      return this.performer;
  }

  public addBodysite(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.bodysite) !== 'undefined') {
         delete this.bodysite;
      }
      return;
    }
    
    if (typeof(this.bodysite) === 'undefined') {
      this.bodysite =  [];
    }
    this.bodysite.push(newValue);
  }

  public getBodysite(): CodeableConcept[] | undefined {
      return this.bodysite;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setOverrideReason(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.overrideReason) !== 'undefined') {
         delete this.overrideReason;
      }
      return;
    }
    
    if (REGEX_OVERRIDEREASON.test(newValue)) {
      this.overrideReason = newValue
    } else {
      throw new Error("Invalid value pattern for overrideReason of " + newValue);
    }
  }
  
  public getOverrideReasonPattern(): string {
    return REGEX_OVERRIDEREASON.source;
  }
  

  public getOverrideReason(): string | undefined {
      return this.overrideReason;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setEnteredDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.enteredDate) !== 'undefined') {
         delete this.enteredDate;
      }
      return;
    }
    
    if (REGEX_ENTEREDDATE.test(newValue)) {
      this.enteredDate = newValue
    } else {
      throw new Error("Invalid value pattern for enteredDate of " + newValue);
    }
  }
  
  public getEnteredDatePattern(): string {
    return REGEX_ENTEREDDATE.source;
  }
  

  public getEnteredDate(): string | undefined {
      return this.enteredDate;
  }

  public addReason(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.reason) !== 'undefined') {
         delete this.reason;
      }
      return;
    }
    
    if (typeof(this.reason) === 'undefined') {
      this.reason =  [];
    }
    this.reason.push(newValue);
  }

  public getReason(): CodeableConcept[] | undefined {
      return this.reason;
  }

  public addService(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.service) !== 'undefined') {
         delete this.service;
      }
      return;
    }
    
    if (typeof(this.service) === 'undefined') {
      this.service =  [];
    }
    this.service.push(newValue);
  }

  public getService(): Reference[] | undefined {
      return this.service;
  }

  public addAccount(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.account) !== 'undefined') {
         delete this.account;
      }
      return;
    }
    
    if (typeof(this.account) === 'undefined') {
      this.account =  [];
    }
    this.account.push(newValue);
  }

  public getAccount(): Reference[] | undefined {
      return this.account;
  }

  public addNote(newValue: Annotation) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.note) !== 'undefined') {
         delete this.note;
      }
      return;
    }
    
    if (typeof(this.note) === 'undefined') {
      this.note =  [];
    }
    this.note.push(newValue);
  }

  public getNote(): Annotation[] | undefined {
      return this.note;
  }

  public addSupportingInformation(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.supportingInformation) !== 'undefined') {
         delete this.supportingInformation;
      }
      return;
    }
    
    if (typeof(this.supportingInformation) === 'undefined') {
      this.supportingInformation =  [];
    }
    this.supportingInformation.push(newValue);
  }

  public getSupportingInformation(): Reference[] | undefined {
      return this.supportingInformation;
  }


}


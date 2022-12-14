import { Type } from 'class-transformer';
import { REGEX_ID_000, REGEX_IMPLICITRULES, REGEX_LANGUAGE, REGEX_MANUFACTURERSTRING, REGEX_MODELNUMBER, REGEX_URL, REGEX_ONLINEINFORMATION } from '../FhirTsLibValidation/FhirRegex';
import { Annotation, CodeableConcept, ContactPoint, DeviceDefinitionCapability, DeviceDefinitionDeviceName, DeviceDefinitionMaterial, DeviceDefinitionProperty, DeviceDefinitionSpecialization, DeviceDefinitionUdiDeviceIdentifier, Element, Extension, Identifier, Meta, Narrative, ProdCharacteristic, ProductShelfLife, Quantity, Reference, ResourceList, Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription } from './FhirType';



/**
 * The characteristics, operational status and capabilities of a medical-related component of a
 * medical device.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/DeviceDefinition
 */
export class DeviceDefinition {
  /**
   * This is a DeviceDefinition resource
   */
     resourceType = "DeviceDefinition";

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
   * Unique instance identifiers assigned to a device by the software, manufacturers, other
   * organizations or owners. For example: handle ID.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Identifier)
  protected identifier?: Identifier[];

  /**
   * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may
   * include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it
   * is sold, or for multiple jurisdictions it could have been sold.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => DeviceDefinitionUdiDeviceIdentifier)
  protected udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];

  /**
   * A name of the manufacturer.
   * Field access restricted because there are specific valid values.
   */
  protected manufacturerString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _manufacturerString?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   manufacturerReference?: Reference;

  /**
   * A name given to the device to identify it.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => DeviceDefinitionDeviceName)
  protected deviceName?: DeviceDefinitionDeviceName[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected modelNumber?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _modelNumber?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a
   * particular purpose, and used for the communication.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => DeviceDefinitionSpecialization)
  protected specialization?: DeviceDefinitionSpecialization[];

  /**
   * The available versions of the device, e.g., software versions.
   * Field access restricted because there are specific valid values.
   */
  protected version?: string[];

  /**
   * Extensions for version
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _version?: Element[];

  /**
   * Safety characteristics of the device.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected safety?: CodeableConcept[];

  /**
   * Shelf Life and storage information.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ProductShelfLife)
  protected shelfLifeStorage?: ProductShelfLife[];

  /**
   * The marketing status describes the date when a medicinal product is actually put on the market or
   * the date as of which it is no longer available.
   */
  @Type(() => ProdCharacteristic)
   physicalCharacteristics?: ProdCharacteristic;

  /**
   * Language code for the human-readable text strings produced by the device (all supported).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected languageCode?: CodeableConcept[];

  /**
   * Device capabilities.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => DeviceDefinitionCapability)
  protected capability?: DeviceDefinitionCapability[];

  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status,
   * time properties.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => DeviceDefinitionProperty)
  protected property?: DeviceDefinitionProperty[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   owner?: Reference;

  /**
   * Contact details for an organization or a particular human that is responsible for the device.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContactPoint)
  protected contact?: ContactPoint[];

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
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected onlineInformation?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _onlineInformation?: Element;

  /**
   * Descriptive information, usage information or implantation information that is not captured in an
   * existing element.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Annotation)
  protected note?: Annotation[];

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   quantity?: Quantity;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   parentDevice?: Reference;

  /**
   * A substance used to create the material(s) of which the device is made.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => DeviceDefinitionMaterial)
  protected material?: DeviceDefinitionMaterial[];


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

  public addUdiDeviceIdentifier(newValue: DeviceDefinitionUdiDeviceIdentifier) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.udiDeviceIdentifier) !== 'undefined') {
         delete this.udiDeviceIdentifier;
      }
      return;
    }
    
    if (typeof(this.udiDeviceIdentifier) === 'undefined') {
      this.udiDeviceIdentifier =  [];
    }
    this.udiDeviceIdentifier.push(newValue);
  }

  public getUdiDeviceIdentifier(): DeviceDefinitionUdiDeviceIdentifier[] | undefined {
      return this.udiDeviceIdentifier;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setManufacturerString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.manufacturerString) !== 'undefined') {
         delete this.manufacturerString;
      }
      return;
    }
    
    if (REGEX_MANUFACTURERSTRING.test(newValue)) {
      this.manufacturerString = newValue
    } else {
      throw new Error("Invalid value pattern for manufacturerString of " + newValue);
    }
  }
  
  public getManufacturerStringPattern(): string {
    return REGEX_MANUFACTURERSTRING.source;
  }
  

  public getManufacturerString(): string | undefined {
      return this.manufacturerString;
  }

  public addDeviceName(newValue: DeviceDefinitionDeviceName) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.deviceName) !== 'undefined') {
         delete this.deviceName;
      }
      return;
    }
    
    if (typeof(this.deviceName) === 'undefined') {
      this.deviceName =  [];
    }
    this.deviceName.push(newValue);
  }

  public getDeviceName(): DeviceDefinitionDeviceName[] | undefined {
      return this.deviceName;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setModelNumber(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.modelNumber) !== 'undefined') {
         delete this.modelNumber;
      }
      return;
    }
    
    if (REGEX_MODELNUMBER.test(newValue)) {
      this.modelNumber = newValue
    } else {
      throw new Error("Invalid value pattern for modelNumber of " + newValue);
    }
  }
  
  public getModelNumberPattern(): string {
    return REGEX_MODELNUMBER.source;
  }
  

  public getModelNumber(): string | undefined {
      return this.modelNumber;
  }

  public addSpecialization(newValue: DeviceDefinitionSpecialization) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.specialization) !== 'undefined') {
         delete this.specialization;
      }
      return;
    }
    
    if (typeof(this.specialization) === 'undefined') {
      this.specialization =  [];
    }
    this.specialization.push(newValue);
  }

  public getSpecialization(): DeviceDefinitionSpecialization[] | undefined {
      return this.specialization;
  }

  public addVersion(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.version) !== 'undefined') {
         delete this.version;
      }
      return;
    }
    
    if (typeof(this.version) === 'undefined') {
      this.version =  [];
    }
    this.version.push(newValue);
  }

  public getVersion(): string[] | undefined {
      return this.version;
  }

  public add_version(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._version) !== 'undefined') {
         delete this._version;
      }
      return;
    }
    
    if (typeof(this._version) === 'undefined') {
      this._version =  [];
    }
    this._version.push(newValue);
  }

  public get_version(): Element[] | undefined {
      return this._version;
  }

  public addSafety(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.safety) !== 'undefined') {
         delete this.safety;
      }
      return;
    }
    
    if (typeof(this.safety) === 'undefined') {
      this.safety =  [];
    }
    this.safety.push(newValue);
  }

  public getSafety(): CodeableConcept[] | undefined {
      return this.safety;
  }

  public addShelfLifeStorage(newValue: ProductShelfLife) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.shelfLifeStorage) !== 'undefined') {
         delete this.shelfLifeStorage;
      }
      return;
    }
    
    if (typeof(this.shelfLifeStorage) === 'undefined') {
      this.shelfLifeStorage =  [];
    }
    this.shelfLifeStorage.push(newValue);
  }

  public getShelfLifeStorage(): ProductShelfLife[] | undefined {
      return this.shelfLifeStorage;
  }

  public addLanguageCode(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.languageCode) !== 'undefined') {
         delete this.languageCode;
      }
      return;
    }
    
    if (typeof(this.languageCode) === 'undefined') {
      this.languageCode =  [];
    }
    this.languageCode.push(newValue);
  }

  public getLanguageCode(): CodeableConcept[] | undefined {
      return this.languageCode;
  }

  public addCapability(newValue: DeviceDefinitionCapability) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.capability) !== 'undefined') {
         delete this.capability;
      }
      return;
    }
    
    if (typeof(this.capability) === 'undefined') {
      this.capability =  [];
    }
    this.capability.push(newValue);
  }

  public getCapability(): DeviceDefinitionCapability[] | undefined {
      return this.capability;
  }

  public addProperty(newValue: DeviceDefinitionProperty) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.property) !== 'undefined') {
         delete this.property;
      }
      return;
    }
    
    if (typeof(this.property) === 'undefined') {
      this.property =  [];
    }
    this.property.push(newValue);
  }

  public getProperty(): DeviceDefinitionProperty[] | undefined {
      return this.property;
  }

  public addContact(newValue: ContactPoint) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.contact) !== 'undefined') {
         delete this.contact;
      }
      return;
    }
    
    if (typeof(this.contact) === 'undefined') {
      this.contact =  [];
    }
    this.contact.push(newValue);
  }

  public getContact(): ContactPoint[] | undefined {
      return this.contact;
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
  public setOnlineInformation(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.onlineInformation) !== 'undefined') {
         delete this.onlineInformation;
      }
      return;
    }
    
    if (REGEX_ONLINEINFORMATION.test(newValue)) {
      this.onlineInformation = newValue
    } else {
      throw new Error("Invalid value pattern for onlineInformation of " + newValue);
    }
  }
  
  public getOnlineInformationPattern(): string {
    return REGEX_ONLINEINFORMATION.source;
  }
  

  public getOnlineInformation(): string | undefined {
      return this.onlineInformation;
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

  public addMaterial(newValue: DeviceDefinitionMaterial) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.material) !== 'undefined') {
         delete this.material;
      }
      return;
    }
    
    if (typeof(this.material) === 'undefined') {
      this.material =  [];
    }
    this.material.push(newValue);
  }

  public getMaterial(): DeviceDefinitionMaterial[] | undefined {
      return this.material;
  }


}



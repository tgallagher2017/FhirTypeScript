import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DESCRIPTION, REGEX_SERIES, REGEX_DOSENUMBERSTRING, REGEX_SERIESDOSESSTRING } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, ImmunizationRecommendationDateCriterion, Reference } from './FhirType';



/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published
 * schedule with optional supporting justification.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ImmunizationRecommendation_Recommendation
 */
export class ImmunizationRecommendationRecommendation {
  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the
   * element. To make the use of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any implementer can define an extension,
   * there is a set of requirements that SHALL be met as part of the definition of the extension.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Extension)
  protected extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the
   * element and that modifies the understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually modifier elements provide negation
   * or qualification. To make the use of extensions safe and manageable, there is a strict set of
   * governance applied to the definition and use of extensions. Though any implementer can define an
   * extension, there is a set of requirements that SHALL be met as part of the definition of the
   * extension. Applications processing a resource are required to check for modifier extensions.
   * 
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource
   * (including cannot change the meaning of modifierExtension itself).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Extension)
  protected modifierExtension?: Extension[];

  /**
   * Vaccine(s) or vaccine group that pertain to the recommendation.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected vaccineCode?: CodeableConcept[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   targetDisease?: CodeableConcept;

  /**
   * Vaccine(s) which should not be used to fulfill the recommendation.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected contraindicatedVaccineCode?: CodeableConcept[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   forecastStatus?: CodeableConcept;

  /**
   * The reason for the assigned forecast status.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected forecastReason?: CodeableConcept[];

  /**
   * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer,
   * etc.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ImmunizationRecommendationDateCriterion)
  protected dateCriterion?: ImmunizationRecommendationDateCriterion[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected description?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _description?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected series?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _series?: Element;

  /**
   * Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).
   */
   doseNumberPositiveInt?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _doseNumberPositiveInt?: Element;

  /**
   * Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).
   * Field access restricted because there are specific valid values.
   */
  protected doseNumberString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _doseNumberString?: Element;

  /**
   * The recommended number of doses to achieve immunity.
   */
   seriesDosesPositiveInt?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _seriesDosesPositiveInt?: Element;

  /**
   * The recommended number of doses to achieve immunity.
   * Field access restricted because there are specific valid values.
   */
  protected seriesDosesString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _seriesDosesString?: Element;

  /**
   * Immunization event history and/or evaluation that supports the status and recommendation.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected supportingImmunization?: Reference[];

  /**
   * Patient Information that supports the status and recommendation.  This includes patient
   * observations, adverse reactions and allergy/intolerance information.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected supportingPatientInformation?: Reference[];


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
    
    if (REGEX_ID.test(newValue)) {
      this.id = newValue
    } else {
      throw new Error("Invalid value pattern for id of " + newValue);
    }
  }
  
  public getIdPattern(): string {
    return REGEX_ID.source;
  }
  

  public getId(): string | undefined {
      return this.id;
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

  public addVaccineCode(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.vaccineCode) !== 'undefined') {
         delete this.vaccineCode;
      }
      return;
    }
    
    if (typeof(this.vaccineCode) === 'undefined') {
      this.vaccineCode =  [];
    }
    this.vaccineCode.push(newValue);
  }

  public getVaccineCode(): CodeableConcept[] | undefined {
      return this.vaccineCode;
  }

  public addContraindicatedVaccineCode(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.contraindicatedVaccineCode) !== 'undefined') {
         delete this.contraindicatedVaccineCode;
      }
      return;
    }
    
    if (typeof(this.contraindicatedVaccineCode) === 'undefined') {
      this.contraindicatedVaccineCode =  [];
    }
    this.contraindicatedVaccineCode.push(newValue);
  }

  public getContraindicatedVaccineCode(): CodeableConcept[] | undefined {
      return this.contraindicatedVaccineCode;
  }

  public addForecastReason(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.forecastReason) !== 'undefined') {
         delete this.forecastReason;
      }
      return;
    }
    
    if (typeof(this.forecastReason) === 'undefined') {
      this.forecastReason =  [];
    }
    this.forecastReason.push(newValue);
  }

  public getForecastReason(): CodeableConcept[] | undefined {
      return this.forecastReason;
  }

  public addDateCriterion(newValue: ImmunizationRecommendationDateCriterion) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.dateCriterion) !== 'undefined') {
         delete this.dateCriterion;
      }
      return;
    }
    
    if (typeof(this.dateCriterion) === 'undefined') {
      this.dateCriterion =  [];
    }
    this.dateCriterion.push(newValue);
  }

  public getDateCriterion(): ImmunizationRecommendationDateCriterion[] | undefined {
      return this.dateCriterion;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDescription(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.description) !== 'undefined') {
         delete this.description;
      }
      return;
    }
    
    if (REGEX_DESCRIPTION.test(newValue)) {
      this.description = newValue
    } else {
      throw new Error("Invalid value pattern for description of " + newValue);
    }
  }
  
  public getDescriptionPattern(): string {
    return REGEX_DESCRIPTION.source;
  }
  

  public getDescription(): string | undefined {
      return this.description;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSeries(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.series) !== 'undefined') {
         delete this.series;
      }
      return;
    }
    
    if (REGEX_SERIES.test(newValue)) {
      this.series = newValue
    } else {
      throw new Error("Invalid value pattern for series of " + newValue);
    }
  }
  
  public getSeriesPattern(): string {
    return REGEX_SERIES.source;
  }
  

  public getSeries(): string | undefined {
      return this.series;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDoseNumberString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.doseNumberString) !== 'undefined') {
         delete this.doseNumberString;
      }
      return;
    }
    
    if (REGEX_DOSENUMBERSTRING.test(newValue)) {
      this.doseNumberString = newValue
    } else {
      throw new Error("Invalid value pattern for doseNumberString of " + newValue);
    }
  }
  
  public getDoseNumberStringPattern(): string {
    return REGEX_DOSENUMBERSTRING.source;
  }
  

  public getDoseNumberString(): string | undefined {
      return this.doseNumberString;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSeriesDosesString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.seriesDosesString) !== 'undefined') {
         delete this.seriesDosesString;
      }
      return;
    }
    
    if (REGEX_SERIESDOSESSTRING.test(newValue)) {
      this.seriesDosesString = newValue
    } else {
      throw new Error("Invalid value pattern for seriesDosesString of " + newValue);
    }
  }
  
  public getSeriesDosesStringPattern(): string {
    return REGEX_SERIESDOSESSTRING.source;
  }
  

  public getSeriesDosesString(): string | undefined {
      return this.seriesDosesString;
  }

  public addSupportingImmunization(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.supportingImmunization) !== 'undefined') {
         delete this.supportingImmunization;
      }
      return;
    }
    
    if (typeof(this.supportingImmunization) === 'undefined') {
      this.supportingImmunization =  [];
    }
    this.supportingImmunization.push(newValue);
  }

  public getSupportingImmunization(): Reference[] | undefined {
      return this.supportingImmunization;
  }

  public addSupportingPatientInformation(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.supportingPatientInformation) !== 'undefined') {
         delete this.supportingPatientInformation;
      }
      return;
    }
    
    if (typeof(this.supportingPatientInformation) === 'undefined') {
      this.supportingPatientInformation =  [];
    }
    this.supportingPatientInformation.push(newValue);
  }

  public getSupportingPatientInformation(): Reference[] | undefined {
      return this.supportingPatientInformation;
  }


}



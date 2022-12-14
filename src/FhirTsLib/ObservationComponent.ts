import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_VALUESTRING, REGEX_VALUETIME, REGEX_VALUEDATETIME } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, ObservationReferenceRange, Period, Quantity, Range, Ratio, SampledData } from './FhirType';



/**
 * Measurements and simple assertions made about a patient, device or other subject.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Observation_Component
 */
export class ObservationComponent {
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
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   code?: CodeableConcept;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   valueQuantity?: Quantity;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   valueCodeableConcept?: CodeableConcept;

  /**
   * The information determined as a result of making the observation, if the information has a simple
   * value.
   * Field access restricted because there are specific valid values.
   */
  protected valueString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueString?: Element;

  /**
   * The information determined as a result of making the observation, if the information has a simple
   * value.
   */
   valueBoolean?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueBoolean?: Element;

  /**
   * The information determined as a result of making the observation, if the information has a simple
   * value.
   */
   valueInteger?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueInteger?: Element;

  /**
   * A set of ordered Quantities defined by a low and high limit.
   */
  @Type(() => Range)
   valueRange?: Range;

  /**
   * A relationship of two Quantity values - expressed as a numerator and a denominator.
   */
  @Type(() => Ratio)
   valueRatio?: Ratio;

  /**
   * A series of measurements taken by a device, with upper and lower limits. There may be more than one
   * dimension in the data.
   */
  @Type(() => SampledData)
   valueSampledData?: SampledData;

  /**
   * The information determined as a result of making the observation, if the information has a simple
   * value.
   * Field access restricted because there are specific valid values.
   */
  protected valueTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueTime?: Element;

  /**
   * The information determined as a result of making the observation, if the information has a simple
   * value.
   * Field access restricted because there are specific valid values.
   */
  protected valueDateTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueDateTime?: Element;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   valuePeriod?: Period;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   dataAbsentReason?: CodeableConcept;

  /**
   * A categorical assessment of an observation value.  For example, high, low, normal.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected interpretation?: CodeableConcept[];

  /**
   * Guidance on how to interpret the value by comparison to a normal or recommended range.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ObservationReferenceRange)
  protected referenceRange?: ObservationReferenceRange[];


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

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueString) !== 'undefined') {
         delete this.valueString;
      }
      return;
    }
    
    if (REGEX_VALUESTRING.test(newValue)) {
      this.valueString = newValue
    } else {
      throw new Error("Invalid value pattern for valueString of " + newValue);
    }
  }
  
  public getValueStringPattern(): string {
    return REGEX_VALUESTRING.source;
  }
  

  public getValueString(): string | undefined {
      return this.valueString;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueTime) !== 'undefined') {
         delete this.valueTime;
      }
      return;
    }
    
    if (REGEX_VALUETIME.test(newValue)) {
      this.valueTime = newValue
    } else {
      throw new Error("Invalid value pattern for valueTime of " + newValue);
    }
  }
  
  public getValueTimePattern(): string {
    return REGEX_VALUETIME.source;
  }
  

  public getValueTime(): string | undefined {
      return this.valueTime;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueDateTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueDateTime) !== 'undefined') {
         delete this.valueDateTime;
      }
      return;
    }
    
    if (REGEX_VALUEDATETIME.test(newValue)) {
      this.valueDateTime = newValue
    } else {
      throw new Error("Invalid value pattern for valueDateTime of " + newValue);
    }
  }
  
  public getValueDateTimePattern(): string {
    return REGEX_VALUEDATETIME.source;
  }
  

  public getValueDateTime(): string | undefined {
      return this.valueDateTime;
  }

  public addInterpretation(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.interpretation) !== 'undefined') {
         delete this.interpretation;
      }
      return;
    }
    
    if (typeof(this.interpretation) === 'undefined') {
      this.interpretation =  [];
    }
    this.interpretation.push(newValue);
  }

  public getInterpretation(): CodeableConcept[] | undefined {
      return this.interpretation;
  }

  public addReferenceRange(newValue: ObservationReferenceRange) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.referenceRange) !== 'undefined') {
         delete this.referenceRange;
      }
      return;
    }
    
    if (typeof(this.referenceRange) === 'undefined') {
      this.referenceRange =  [];
    }
    this.referenceRange.push(newValue);
  }

  public getReferenceRange(): ObservationReferenceRange[] | undefined {
      return this.referenceRange;
  }


}



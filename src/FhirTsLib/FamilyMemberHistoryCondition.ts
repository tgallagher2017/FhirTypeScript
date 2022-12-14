import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_ONSETSTRING } from '../FhirTsLibValidation/FhirRegex';
import { Age, Annotation, CodeableConcept, Element, Extension, Period, Range } from './FhirType';



/**
 * Significant health conditions for a person related to the patient relevant in the context of care
 * for the patient.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/FamilyMemberHistory_Condition
 */
export class FamilyMemberHistoryCondition {
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
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   outcome?: CodeableConcept;

  /**
   * Value of "true" or "false"
   */
   contributedToDeath?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _contributedToDeath?: Element;

  /**
   * A duration of time during which an organism (or a process) has existed.
   */
  @Type(() => Age)
   onsetAge?: Age;

  /**
   * A set of ordered Quantities defined by a low and high limit.
   */
  @Type(() => Range)
   onsetRange?: Range;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   onsetPeriod?: Period;

  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For
   * conditions with multiple occurrences, this describes the first known occurrence.
   * Field access restricted because there are specific valid values.
   */
  protected onsetString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _onsetString?: Element;

  /**
   * An area where general notes can be placed about this specific condition.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Annotation)
  protected note?: Annotation[];


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
  public setOnsetString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.onsetString) !== 'undefined') {
         delete this.onsetString;
      }
      return;
    }
    
    if (REGEX_ONSETSTRING.test(newValue)) {
      this.onsetString = newValue
    } else {
      throw new Error("Invalid value pattern for onsetString of " + newValue);
    }
  }
  
  public getOnsetStringPattern(): string {
    return REGEX_ONSETSTRING.source;
  }
  

  public getOnsetString(): string | undefined {
      return this.onsetString;
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


}



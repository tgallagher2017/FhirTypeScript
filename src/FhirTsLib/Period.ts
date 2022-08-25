import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_START, REGEX_END } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';



/**
 * A time period defined by a start and end date and optionally time.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Period
 */
export class Period {
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
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected start?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _start?: Element;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected end?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _end?: Element;


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

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setStart(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.start) !== 'undefined') {
         delete this.start;
      }
      return;
    }
    
    if (REGEX_START.test(newValue)) {
      this.start = newValue
    } else {
      throw new Error("Invalid value pattern for start of " + newValue);
    }
  }
  
  public getStartPattern(): string {
    return REGEX_START.source;
  }
  

  public getStart(): string | undefined {
      return this.start;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setEnd(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.end) !== 'undefined') {
         delete this.end;
      }
      return;
    }
    
    if (REGEX_END.test(newValue)) {
      this.end = newValue
    } else {
      throw new Error("Invalid value pattern for end of " + newValue);
    }
  }
  
  public getEndPattern(): string {
    return REGEX_END.source;
  }
  

  public getEnd(): string | undefined {
      return this.end;
  }


}



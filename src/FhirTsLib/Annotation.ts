import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_AUTHORSTRING, REGEX_TIME, REGEX_TEXT } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, Reference } from './FhirType';



/**
 * A  text note which also  contains information about who made the statement and when.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Annotation
 */
export class Annotation {
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
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   authorReference?: Reference;

  /**
   * The individual responsible for making the annotation.
   * Field access restricted because there are specific valid values.
   */
  protected authorString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _authorString?: Element;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected time?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _time?: Element;

  /**
   * A string that may contain Github Flavored Markdown syntax for optional processing by a mark down
   * presentation engine
   * Field access restricted because there are specific valid values.
   */
  protected text?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _text?: Element;


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
  public setAuthorString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.authorString) !== 'undefined') {
         delete this.authorString;
      }
      return;
    }
    
    if (REGEX_AUTHORSTRING.test(newValue)) {
      this.authorString = newValue
    } else {
      throw new Error("Invalid value pattern for authorString of " + newValue);
    }
  }
  
  public getAuthorStringPattern(): string {
    return REGEX_AUTHORSTRING.source;
  }
  

  public getAuthorString(): string | undefined {
      return this.authorString;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.time) !== 'undefined') {
         delete this.time;
      }
      return;
    }
    
    if (REGEX_TIME.test(newValue)) {
      this.time = newValue
    } else {
      throw new Error("Invalid value pattern for time of " + newValue);
    }
  }
  
  public getTimePattern(): string {
    return REGEX_TIME.source;
  }
  

  public getTime(): string | undefined {
      return this.time;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setText(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.text) !== 'undefined') {
         delete this.text;
      }
      return;
    }
    
    if (REGEX_TEXT.test(newValue)) {
      this.text = newValue
    } else {
      throw new Error("Invalid value pattern for text of " + newValue);
    }
  }
  
  public getTextPattern(): string {
    return REGEX_TEXT.source;
  }
  

  public getText(): string | undefined {
      return this.text;
  }


}



import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_LOTNUMBER, REGEX_EXPIRATIONDATE } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';



/**
 * This resource is primarily used for the identification and definition of a medication for the
 * purposes of prescribing, dispensing, and administering a medication as well as for making
 * statements about medication use.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Medication_Batch
 */
export class MedicationBatch {
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
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected lotNumber?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _lotNumber?: Element;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected expirationDate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _expirationDate?: Element;


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
  public setLotNumber(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.lotNumber) !== 'undefined') {
         delete this.lotNumber;
      }
      return;
    }
    
    if (REGEX_LOTNUMBER.test(newValue)) {
      this.lotNumber = newValue
    } else {
      throw new Error("Invalid value pattern for lotNumber of " + newValue);
    }
  }
  
  public getLotNumberPattern(): string {
    return REGEX_LOTNUMBER.source;
  }
  

  public getLotNumber(): string | undefined {
      return this.lotNumber;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setExpirationDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.expirationDate) !== 'undefined') {
         delete this.expirationDate;
      }
      return;
    }
    
    if (REGEX_EXPIRATIONDATE.test(newValue)) {
      this.expirationDate = newValue
    } else {
      throw new Error("Invalid value pattern for expirationDate of " + newValue);
    }
  }
  
  public getExpirationDatePattern(): string {
    return REGEX_EXPIRATIONDATE.source;
  }
  

  public getExpirationDate(): string | undefined {
      return this.expirationDate;
  }


}



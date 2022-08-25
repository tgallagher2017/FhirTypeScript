import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DATEDATETIME } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Identifier, Period } from './FhirType';



/**
 * The regulatory authorization of a medicinal product.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MedicinalProductAuthorization_Procedure
 */
export class MedicinalProductAuthorizationProcedure {
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
   * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for
   * business identifiers.
   */
  @Type(() => Identifier)
   identifier?: Identifier;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   datePeriod?: Period;

  /**
   * Date of procedure.
   * Field access restricted because there are specific valid values.
   */
  protected dateDateTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _dateDateTime?: Element;

  /**
   * Applcations submitted to obtain a marketing authorization.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MedicinalProductAuthorizationProcedure)
  protected application?: MedicinalProductAuthorizationProcedure[];


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
  public setDateDateTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.dateDateTime) !== 'undefined') {
         delete this.dateDateTime;
      }
      return;
    }
    
    if (REGEX_DATEDATETIME.test(newValue)) {
      this.dateDateTime = newValue
    } else {
      throw new Error("Invalid value pattern for dateDateTime of " + newValue);
    }
  }
  
  public getDateDateTimePattern(): string {
    return REGEX_DATEDATETIME.source;
  }
  

  public getDateDateTime(): string | undefined {
      return this.dateDateTime;
  }

  public addApplication(newValue: MedicinalProductAuthorizationProcedure) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.application) !== 'undefined') {
         delete this.application;
      }
      return;
    }
    
    if (typeof(this.application) === 'undefined') {
      this.application =  [];
    }
    this.application.push(newValue);
  }

  public getApplication(): MedicinalProductAuthorizationProcedure[] | undefined {
      return this.application;
  }


}



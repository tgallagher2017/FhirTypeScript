import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_REQUIREMENT } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, InsurancePlanLimit } from './FhirType';



/**
 * Details of a Health Insurance product/plan provided by an organization.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/InsurancePlan_Benefit
 */
export class InsurancePlanBenefit {
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
   type?: CodeableConcept;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected requirement?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _requirement?: Element;

  /**
   * The specific limits on the benefit.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => InsurancePlanLimit)
  protected limit?: InsurancePlanLimit[];


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
  public setRequirement(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.requirement) !== 'undefined') {
         delete this.requirement;
      }
      return;
    }
    
    if (REGEX_REQUIREMENT.test(newValue)) {
      this.requirement = newValue
    } else {
      throw new Error("Invalid value pattern for requirement of " + newValue);
    }
  }
  
  public getRequirementPattern(): string {
    return REGEX_REQUIREMENT.source;
  }
  

  public getRequirement(): string | undefined {
      return this.requirement;
  }

  public addLimit(newValue: InsurancePlanLimit) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.limit) !== 'undefined') {
         delete this.limit;
      }
      return;
    }
    
    if (typeof(this.limit) === 'undefined') {
      this.limit =  [];
    }
    this.limit.push(newValue);
  }

  public getLimit(): InsurancePlanLimit[] | undefined {
      return this.limit;
  }


}



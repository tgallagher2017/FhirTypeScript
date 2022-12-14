import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_VALUESET } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';
import { OperationDefinitionBindingStrength_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using
 * the search interaction).
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/OperationDefinition_Binding
 */
export class OperationDefinitionBinding {
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
   * Indicates the degree of conformance expectations associated with this binding - that is, the degree
   * to which the provided value set must be adhered to in the instances.
   * Field access restricted because there are specific valid values.
   */
  protected strength?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _strength?: Element;

  /**
   * A URI that is a reference to a canonical URL on a FHIR resource
   * Field access restricted because there are specific valid values.
   */
  protected valueSet?: string;


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
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setStrength(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.strength) !== 'undefined') {
         delete this.strength;
      }
      return;
    }
    
    const idx = getValidValueIdx(OperationDefinitionBindingStrength_list_ValidValues, newValue);
    if (idx >= 0) {
      this.strength = OperationDefinitionBindingStrength_list_ValidValues[idx];
    } else {
      throw new Error("Unknown strength of " + newValue);
    }
  }
  
  public getOperationDefinitionBindingStrengthValidValues(): string[] {
    return OperationDefinitionBindingStrength_list_ValidValues;
  }
  

  public getStrength(): string | undefined {
      return this.strength;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueSet(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueSet) !== 'undefined') {
         delete this.valueSet;
      }
      return;
    }
    
    if (REGEX_VALUESET.test(newValue)) {
      this.valueSet = newValue
    } else {
      throw new Error("Invalid value pattern for valueSet of " + newValue);
    }
  }
  
  public getValueSetPattern(): string {
    return REGEX_VALUESET.source;
  }
  

  public getValueSet(): string | undefined {
      return this.valueSet;
  }


}



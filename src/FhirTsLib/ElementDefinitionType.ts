import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_CODE_000 } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';
import { ElementDefinitionTypeVersioning_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * Captures constraints on each element within the resource, profile, or extension.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ElementDefinition_Type
 */
export class ElementDefinitionType {
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
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected code?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _code?: Element;

  /**
   * Identifies a profile structure or implementation Guide that applies to the datatype this element
   * refers to. If any profiles are specified, then the content must conform to at least one of them.
   * The URL can be a local reference - to a contained StructureDefinition, or a reference to another
   * StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is
   * specified, the type SHALL conform to at least one profile defined in the implementation guide.
   * Field access restricted because there are specific valid values.
   */
  protected profile?: string[];

  /**
   * Used when the type is "Reference" or "canonical", and identifies a profile structure or
   * implementation Guide that applies to the target of the reference this element refers to. If any
   * profiles are specified, then the content must conform to at least one of them. The URL can be a
   * local reference - to a contained StructureDefinition, or a reference to another
   * StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is
   * specified, the target resource SHALL conform to at least one profile defined in the implementation
   * guide.
   * Field access restricted because there are specific valid values.
   */
  protected targetProfile?: string[];

  /**
   * If the type is a reference to another resource, how the resource is or can be aggregated - is it a
   * contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
   * Field access restricted because there are specific valid values.
   */
  protected aggregation?: string[];

  /**
   * Extensions for aggregation
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _aggregation?: Element[];

  /**
   * Whether this reference needs to be version specific or version independent, or whether either can
   * be used.
   * Field access restricted because there are specific valid values.
   */
  protected versioning?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _versioning?: Element;


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
  public setCode(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.code) !== 'undefined') {
         delete this.code;
      }
      return;
    }
    
    if (REGEX_CODE_000.test(newValue)) {
      this.code = newValue
    } else {
      throw new Error("Invalid value pattern for code of " + newValue);
    }
  }
  
  public getCodePattern(): string {
    return REGEX_CODE_000.source;
  }
  

  public getCode(): string | undefined {
      return this.code;
  }

  public addProfile(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.profile) !== 'undefined') {
         delete this.profile;
      }
      return;
    }
    
    if (typeof(this.profile) === 'undefined') {
      this.profile =  [];
    }
    this.profile.push(newValue);
  }

  public getProfile(): string[] | undefined {
      return this.profile;
  }

  public addTargetProfile(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.targetProfile) !== 'undefined') {
         delete this.targetProfile;
      }
      return;
    }
    
    if (typeof(this.targetProfile) === 'undefined') {
      this.targetProfile =  [];
    }
    this.targetProfile.push(newValue);
  }

  public getTargetProfile(): string[] | undefined {
      return this.targetProfile;
  }

  public addAggregation(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.aggregation) !== 'undefined') {
         delete this.aggregation;
      }
      return;
    }
    
    if (typeof(this.aggregation) === 'undefined') {
      this.aggregation =  [];
    }
    this.aggregation.push(newValue);
  }

  public getAggregation(): string[] | undefined {
      return this.aggregation;
  }

  public add_aggregation(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._aggregation) !== 'undefined') {
         delete this._aggregation;
      }
      return;
    }
    
    if (typeof(this._aggregation) === 'undefined') {
      this._aggregation =  [];
    }
    this._aggregation.push(newValue);
  }

  public get_aggregation(): Element[] | undefined {
      return this._aggregation;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setVersioning(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.versioning) !== 'undefined') {
         delete this.versioning;
      }
      return;
    }
    
    const idx = getValidValueIdx(ElementDefinitionTypeVersioning_list_ValidValues, newValue);
    if (idx >= 0) {
      this.versioning = ElementDefinitionTypeVersioning_list_ValidValues[idx];
    } else {
      throw new Error("Unknown versioning of " + newValue);
    }
  }
  
  public getElementDefinitionTypeVersioningValidValues(): string[] {
    return ElementDefinitionTypeVersioning_list_ValidValues;
  }
  

  public getVersioning(): string | undefined {
      return this.versioning;
  }


}


import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_NAME_001, REGEX_USE, REGEX_MAX, REGEX_DOCUMENTATION, REGEX_TYPE, REGEX_PROFILE } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';



/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input
 * parameters are provided by the caller as part of the $evaluate operation. Output parameters are
 * included in the GuidanceResponse.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ParameterDefinition
 */
export class ParameterDefinition {
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
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected name?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _name?: Element;

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected use?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _use?: Element;

  /**
   * A whole number
   */
   min?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _min?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected max?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _max?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected documentation?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _documentation?: Element;

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected type?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _type?: Element;

  /**
   * A URI that is a reference to a canonical URL on a FHIR resource
   * Field access restricted because there are specific valid values.
   */
  protected profile?: string;


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
  public setName(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.name) !== 'undefined') {
         delete this.name;
      }
      return;
    }
    
    if (REGEX_NAME_001.test(newValue)) {
      this.name = newValue
    } else {
      throw new Error("Invalid value pattern for name of " + newValue);
    }
  }
  
  public getNamePattern(): string {
    return REGEX_NAME_001.source;
  }
  

  public getName(): string | undefined {
      return this.name;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setUse(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.use) !== 'undefined') {
         delete this.use;
      }
      return;
    }
    
    if (REGEX_USE.test(newValue)) {
      this.use = newValue
    } else {
      throw new Error("Invalid value pattern for use of " + newValue);
    }
  }
  
  public getUsePattern(): string {
    return REGEX_USE.source;
  }
  

  public getUse(): string | undefined {
      return this.use;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setMax(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.max) !== 'undefined') {
         delete this.max;
      }
      return;
    }
    
    if (REGEX_MAX.test(newValue)) {
      this.max = newValue
    } else {
      throw new Error("Invalid value pattern for max of " + newValue);
    }
  }
  
  public getMaxPattern(): string {
    return REGEX_MAX.source;
  }
  

  public getMax(): string | undefined {
      return this.max;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDocumentation(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.documentation) !== 'undefined') {
         delete this.documentation;
      }
      return;
    }
    
    if (REGEX_DOCUMENTATION.test(newValue)) {
      this.documentation = newValue
    } else {
      throw new Error("Invalid value pattern for documentation of " + newValue);
    }
  }
  
  public getDocumentationPattern(): string {
    return REGEX_DOCUMENTATION.source;
  }
  

  public getDocumentation(): string | undefined {
      return this.documentation;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setType(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.type) !== 'undefined') {
         delete this.type;
      }
      return;
    }
    
    if (REGEX_TYPE.test(newValue)) {
      this.type = newValue
    } else {
      throw new Error("Invalid value pattern for type of " + newValue);
    }
  }
  
  public getTypePattern(): string {
    return REGEX_TYPE.source;
  }
  

  public getType(): string | undefined {
      return this.type;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setProfile(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.profile) !== 'undefined') {
         delete this.profile;
      }
      return;
    }
    
    if (REGEX_PROFILE.test(newValue)) {
      this.profile = newValue
    } else {
      throw new Error("Invalid value pattern for profile of " + newValue);
    }
  }
  
  public getProfilePattern(): string {
    return REGEX_PROFILE.source;
  }
  

  public getProfile(): string | undefined {
      return this.profile;
  }


}



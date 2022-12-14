import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_URL, REGEX_IFNONEMATCH, REGEX_IFMODIFIEDSINCE, REGEX_IFMATCH, REGEX_IFNONEEXIST } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';
import { BundleRequestMethod_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A container for a collection of resources.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Bundle_Request
 */
export class BundleRequest {
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
   * In a transaction or batch, this is the HTTP action to be executed for this entry. In a history
   * bundle, this indicates the HTTP action that occurred.
   * Field access restricted because there are specific valid values.
   */
  protected method?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _method?: Element;

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected url?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _url?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected ifNoneMatch?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _ifNoneMatch?: Element;

  /**
   * An instant in time - known at least to the second
   * Field access restricted because there are specific valid values.
   */
  protected ifModifiedSince?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _ifModifiedSince?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected ifMatch?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _ifMatch?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected ifNoneExist?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _ifNoneExist?: Element;


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
  public setMethod(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.method) !== 'undefined') {
         delete this.method;
      }
      return;
    }
    
    const idx = getValidValueIdx(BundleRequestMethod_list_ValidValues, newValue);
    if (idx >= 0) {
      this.method = BundleRequestMethod_list_ValidValues[idx];
    } else {
      throw new Error("Unknown method of " + newValue);
    }
  }
  
  public getBundleRequestMethodValidValues(): string[] {
    return BundleRequestMethod_list_ValidValues;
  }
  

  public getMethod(): string | undefined {
      return this.method;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setUrl(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.url) !== 'undefined') {
         delete this.url;
      }
      return;
    }
    
    if (REGEX_URL.test(newValue)) {
      this.url = newValue
    } else {
      throw new Error("Invalid value pattern for url of " + newValue);
    }
  }
  
  public getUrlPattern(): string {
    return REGEX_URL.source;
  }
  

  public getUrl(): string | undefined {
      return this.url;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setIfNoneMatch(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.ifNoneMatch) !== 'undefined') {
         delete this.ifNoneMatch;
      }
      return;
    }
    
    if (REGEX_IFNONEMATCH.test(newValue)) {
      this.ifNoneMatch = newValue
    } else {
      throw new Error("Invalid value pattern for ifNoneMatch of " + newValue);
    }
  }
  
  public getIfNoneMatchPattern(): string {
    return REGEX_IFNONEMATCH.source;
  }
  

  public getIfNoneMatch(): string | undefined {
      return this.ifNoneMatch;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setIfModifiedSince(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.ifModifiedSince) !== 'undefined') {
         delete this.ifModifiedSince;
      }
      return;
    }
    
    if (REGEX_IFMODIFIEDSINCE.test(newValue)) {
      this.ifModifiedSince = newValue
    } else {
      throw new Error("Invalid value pattern for ifModifiedSince of " + newValue);
    }
  }
  
  public getIfModifiedSincePattern(): string {
    return REGEX_IFMODIFIEDSINCE.source;
  }
  

  public getIfModifiedSince(): string | undefined {
      return this.ifModifiedSince;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setIfMatch(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.ifMatch) !== 'undefined') {
         delete this.ifMatch;
      }
      return;
    }
    
    if (REGEX_IFMATCH.test(newValue)) {
      this.ifMatch = newValue
    } else {
      throw new Error("Invalid value pattern for ifMatch of " + newValue);
    }
  }
  
  public getIfMatchPattern(): string {
    return REGEX_IFMATCH.source;
  }
  

  public getIfMatch(): string | undefined {
      return this.ifMatch;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setIfNoneExist(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.ifNoneExist) !== 'undefined') {
         delete this.ifNoneExist;
      }
      return;
    }
    
    if (REGEX_IFNONEEXIST.test(newValue)) {
      this.ifNoneExist = newValue
    } else {
      throw new Error("Invalid value pattern for ifNoneExist of " + newValue);
    }
  }
  
  public getIfNoneExistPattern(): string {
    return REGEX_IFNONEEXIST.source;
  }
  

  public getIfNoneExist(): string | undefined {
      return this.ifNoneExist;
  }


}



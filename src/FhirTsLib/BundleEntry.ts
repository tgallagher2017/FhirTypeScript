import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_FULLURL } from '../FhirTsLibValidation/FhirRegex';
import { BundleLink, BundleRequest, BundleResponse, BundleSearch, Element, Extension } from './FhirType';



/**
 * A container for a collection of resources.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Bundle_Entry
 */
export class BundleEntry {
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
   * A series of links that provide context to this entry.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => BundleLink)
  protected link?: BundleLink[];

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected fullUrl?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _fullUrl?: Element;


  /**
   * A container for a collection of resources.
   */
  @Type(() => BundleSearch)
   search?: BundleSearch;

  /**
   * A container for a collection of resources.
   */
  @Type(() => BundleRequest)
   request?: BundleRequest;

  /**
   * A container for a collection of resources.
   */
  @Type(() => BundleResponse)
   response?: BundleResponse;


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

  public addLink(newValue: BundleLink) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.link) !== 'undefined') {
         delete this.link;
      }
      return;
    }
    
    if (typeof(this.link) === 'undefined') {
      this.link =  [];
    }
    this.link.push(newValue);
  }

  public getLink(): BundleLink[] | undefined {
      return this.link;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setFullUrl(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.fullUrl) !== 'undefined') {
         delete this.fullUrl;
      }
      return;
    }
    
    if (REGEX_FULLURL.test(newValue)) {
      this.fullUrl = newValue
    } else {
      throw new Error("Invalid value pattern for fullUrl of " + newValue);
    }
  }
  
  public getFullUrlPattern(): string {
    return REGEX_FULLURL.source;
  }
  

  public getFullUrl(): string | undefined {
      return this.fullUrl;
  }


}


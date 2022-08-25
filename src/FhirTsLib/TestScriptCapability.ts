import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DESCRIPTION, REGEX_CAPABILITIES } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';



/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance
 * against the FHIR specification.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/TestScript_Capability
 */
export class TestScriptCapability {
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
   * Value of "true" or "false"
   */
   required?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _required?: Element;

  /**
   * Value of "true" or "false"
   */
   validated?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _validated?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected description?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _description?: Element;

  /**
   * Which origin server these requirements apply to.
   * Field access restricted because there are specific valid values.
   */
  protected origin?: number[];

  /**
   * Extensions for origin
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _origin?: Element[];

  /**
   * A whole number
   */
   destination?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _destination?: Element;

  /**
   * Links to the FHIR specification that describes this interaction and the resources involved in more
   * detail.
   * Field access restricted because there are specific valid values.
   */
  protected link?: string[];

  /**
   * Extensions for link
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _link?: Element[];

  /**
   * A URI that is a reference to a canonical URL on a FHIR resource
   * Field access restricted because there are specific valid values.
   */
  protected capabilities?: string;


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
  public setDescription(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.description) !== 'undefined') {
         delete this.description;
      }
      return;
    }
    
    if (REGEX_DESCRIPTION.test(newValue)) {
      this.description = newValue
    } else {
      throw new Error("Invalid value pattern for description of " + newValue);
    }
  }
  
  public getDescriptionPattern(): string {
    return REGEX_DESCRIPTION.source;
  }
  

  public getDescription(): string | undefined {
      return this.description;
  }

  public addOrigin(newValue: number) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.origin) !== 'undefined') {
         delete this.origin;
      }
      return;
    }
    
    if (typeof(this.origin) === 'undefined') {
      this.origin =  [];
    }
    this.origin.push(newValue);
  }

  public getOrigin(): number[] | undefined {
      return this.origin;
  }

  public add_origin(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._origin) !== 'undefined') {
         delete this._origin;
      }
      return;
    }
    
    if (typeof(this._origin) === 'undefined') {
      this._origin =  [];
    }
    this._origin.push(newValue);
  }

  public get_origin(): Element[] | undefined {
      return this._origin;
  }

  public addLink(newValue: string) {
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

  public getLink(): string[] | undefined {
      return this.link;
  }

  public add_link(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._link) !== 'undefined') {
         delete this._link;
      }
      return;
    }
    
    if (typeof(this._link) === 'undefined') {
      this._link =  [];
    }
    this._link.push(newValue);
  }

  public get_link(): Element[] | undefined {
      return this._link;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setCapabilities(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.capabilities) !== 'undefined') {
         delete this.capabilities;
      }
      return;
    }
    
    if (REGEX_CAPABILITIES.test(newValue)) {
      this.capabilities = newValue
    } else {
      throw new Error("Invalid value pattern for capabilities of " + newValue);
    }
  }
  
  public getCapabilitiesPattern(): string {
    return REGEX_CAPABILITIES.source;
  }
  

  public getCapabilities(): string | undefined {
      return this.capabilities;
  }


}


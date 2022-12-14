import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DEVICEIDENTIFIER, REGEX_ISSUER, REGEX_JURISDICTION } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';



/**
 * The characteristics, operational status and capabilities of a medical-related component of a
 * medical device.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/DeviceDefinition_UdiDeviceIdentifier
 */
export class DeviceDefinitionUdiDeviceIdentifier {
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
  protected deviceIdentifier?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _deviceIdentifier?: Element;

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected issuer?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _issuer?: Element;

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected jurisdiction?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _jurisdiction?: Element;


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
  public setDeviceIdentifier(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.deviceIdentifier) !== 'undefined') {
         delete this.deviceIdentifier;
      }
      return;
    }
    
    if (REGEX_DEVICEIDENTIFIER.test(newValue)) {
      this.deviceIdentifier = newValue
    } else {
      throw new Error("Invalid value pattern for deviceIdentifier of " + newValue);
    }
  }
  
  public getDeviceIdentifierPattern(): string {
    return REGEX_DEVICEIDENTIFIER.source;
  }
  

  public getDeviceIdentifier(): string | undefined {
      return this.deviceIdentifier;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setIssuer(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.issuer) !== 'undefined') {
         delete this.issuer;
      }
      return;
    }
    
    if (REGEX_ISSUER.test(newValue)) {
      this.issuer = newValue
    } else {
      throw new Error("Invalid value pattern for issuer of " + newValue);
    }
  }
  
  public getIssuerPattern(): string {
    return REGEX_ISSUER.source;
  }
  

  public getIssuer(): string | undefined {
      return this.issuer;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setJurisdiction(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.jurisdiction) !== 'undefined') {
         delete this.jurisdiction;
      }
      return;
    }
    
    if (REGEX_JURISDICTION.test(newValue)) {
      this.jurisdiction = newValue
    } else {
      throw new Error("Invalid value pattern for jurisdiction of " + newValue);
    }
  }
  
  public getJurisdictionPattern(): string {
    return REGEX_JURISDICTION.source;
  }
  

  public getJurisdiction(): string | undefined {
      return this.jurisdiction;
  }


}



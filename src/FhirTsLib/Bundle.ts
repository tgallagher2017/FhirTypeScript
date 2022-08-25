import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID_000, REGEX_IMPLICITRULES, REGEX_LANGUAGE, REGEX_TIMESTAMP } from '../FhirTsLibValidation/FhirRegex';
import { BundleEntry, BundleLink, Element, Identifier, Meta, Signature } from './FhirType';
import { BundleType_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A container for a collection of resources.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Bundle
 */
export class Bundle {
  /**
   * This is a Bundle resource
   */
     resourceType = "Bundle";

  /**
   * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This
   * might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these
   * constraints.)  Ids are case-insensitive.
   * Field access restricted because there are specific valid values.
   */
  protected id?: string;

  /**
   * The metadata about a resource. This is content in the resource that is maintained by the
   * infrastructure. Changes to the content might not always be associated with version changes to the
   * resource.
   */
  @Type(() => Meta)
   meta?: Meta;

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected implicitRules?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _implicitRules?: Element;

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected language?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _language?: Element;

  /**
   * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for
   * business identifiers.
   */
  @Type(() => Identifier)
   identifier?: Identifier;

  /**
   * Indicates the purpose of this bundle - how it is intended to be used.
   * Field access restricted because there are specific valid values.
   */
  protected type?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _type?: Element;

  /**
   * An instant in time - known at least to the second
   * Field access restricted because there are specific valid values.
   */
  protected timestamp?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _timestamp?: Element;

  /**
   * An integer with a value that is not negative (e.g. >= 0)
   */
   total?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _total?: Element;

  /**
   * A series of links that provide context to this bundle.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => BundleLink)
  protected link?: BundleLink[];

  /**
   * An entry in a bundle resource - will either contain a resource or information about a resource
   * (transactions and history only).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => BundleEntry)
  protected entry?: BundleEntry[];

  /**
   * A signature along with supporting context. The signature may be a digital signature that is
   * cryptographic in nature, or some other signature acceptable to the domain. This other signature
   * may be as simple as a graphical image representing a hand-written signature, or a signature
   * ceremony Different signature approaches have different utilities.
   */
  @Type(() => Signature)
   signature?: Signature;


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
    
    if (REGEX_ID_000.test(newValue)) {
      this.id = newValue
    } else {
      throw new Error("Invalid value pattern for id of " + newValue);
    }
  }
  
  public getIdPattern(): string {
    return REGEX_ID_000.source;
  }
  

  public getId(): string | undefined {
      return this.id;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setImplicitRules(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.implicitRules) !== 'undefined') {
         delete this.implicitRules;
      }
      return;
    }
    
    if (REGEX_IMPLICITRULES.test(newValue)) {
      this.implicitRules = newValue
    } else {
      throw new Error("Invalid value pattern for implicitRules of " + newValue);
    }
  }
  
  public getImplicitRulesPattern(): string {
    return REGEX_IMPLICITRULES.source;
  }
  

  public getImplicitRules(): string | undefined {
      return this.implicitRules;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setLanguage(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.language) !== 'undefined') {
         delete this.language;
      }
      return;
    }
    
    if (REGEX_LANGUAGE.test(newValue)) {
      this.language = newValue
    } else {
      throw new Error("Invalid value pattern for language of " + newValue);
    }
  }
  
  public getLanguagePattern(): string {
    return REGEX_LANGUAGE.source;
  }
  

  public getLanguage(): string | undefined {
      return this.language;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setType(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.type) !== 'undefined') {
         delete this.type;
      }
      return;
    }
    
    const idx = getValidValueIdx(BundleType_list_ValidValues, newValue);
    if (idx >= 0) {
      this.type = BundleType_list_ValidValues[idx];
    } else {
      throw new Error("Unknown type of " + newValue);
    }
  }
  
  public getBundleTypeValidValues(): string[] {
    return BundleType_list_ValidValues;
  }
  

  public getType(): string | undefined {
      return this.type;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTimestamp(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.timestamp) !== 'undefined') {
         delete this.timestamp;
      }
      return;
    }
    
    if (REGEX_TIMESTAMP.test(newValue)) {
      this.timestamp = newValue
    } else {
      throw new Error("Invalid value pattern for timestamp of " + newValue);
    }
  }
  
  public getTimestampPattern(): string {
    return REGEX_TIMESTAMP.source;
  }
  

  public getTimestamp(): string | undefined {
      return this.timestamp;
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

  public addEntry(newValue: BundleEntry) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.entry) !== 'undefined') {
         delete this.entry;
      }
      return;
    }
    
    if (typeof(this.entry) === 'undefined') {
      this.entry =  [];
    }
    this.entry.push(newValue);
  }

  public getEntry(): BundleEntry[] | undefined {
      return this.entry;
  }


}


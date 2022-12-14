import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_COMMENT } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';



/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using
 * the search interaction).
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/OperationDefinition_Overload
 */
export class OperationDefinitionOverload {
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
   * Name of parameter to include in overload.
   * Field access restricted because there are specific valid values.
   */
  protected parameterName?: string[];

  /**
   * Extensions for parameterName
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _parameterName?: Element[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected comment?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _comment?: Element;


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

  public addParameterName(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.parameterName) !== 'undefined') {
         delete this.parameterName;
      }
      return;
    }
    
    if (typeof(this.parameterName) === 'undefined') {
      this.parameterName =  [];
    }
    this.parameterName.push(newValue);
  }

  public getParameterName(): string[] | undefined {
      return this.parameterName;
  }

  public add_parameterName(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._parameterName) !== 'undefined') {
         delete this._parameterName;
      }
      return;
    }
    
    if (typeof(this._parameterName) === 'undefined') {
      this._parameterName =  [];
    }
    this._parameterName.push(newValue);
  }

  public get_parameterName(): Element[] | undefined {
      return this._parameterName;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setComment(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.comment) !== 'undefined') {
         delete this.comment;
      }
      return;
    }
    
    if (REGEX_COMMENT.test(newValue)) {
      this.comment = newValue
    } else {
      throw new Error("Invalid value pattern for comment of " + newValue);
    }
  }
  
  public getCommentPattern(): string {
    return REGEX_COMMENT.source;
  }
  

  public getComment(): string | undefined {
      return this.comment;
  }


}



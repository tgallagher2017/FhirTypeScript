import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { Annotation, CodeableConcept, EffectEvidenceSynthesisCertaintySubcomponent, Extension } from './FhirType';



/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures
 * states in a population where the effect estimate is derived from a combination of research studies.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/EffectEvidenceSynthesis_Certainty
 */
export class EffectEvidenceSynthesisCertainty {
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
   * A rating of the certainty of the effect estimate.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected rating?: CodeableConcept[];

  /**
   * A human-readable string to clarify or explain concepts about the resource.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Annotation)
  protected note?: Annotation[];

  /**
   * A description of a component of the overall certainty.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => EffectEvidenceSynthesisCertaintySubcomponent)
  protected certaintySubcomponent?: EffectEvidenceSynthesisCertaintySubcomponent[];


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

  public addRating(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.rating) !== 'undefined') {
         delete this.rating;
      }
      return;
    }
    
    if (typeof(this.rating) === 'undefined') {
      this.rating =  [];
    }
    this.rating.push(newValue);
  }

  public getRating(): CodeableConcept[] | undefined {
      return this.rating;
  }

  public addNote(newValue: Annotation) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.note) !== 'undefined') {
         delete this.note;
      }
      return;
    }
    
    if (typeof(this.note) === 'undefined') {
      this.note =  [];
    }
    this.note.push(newValue);
  }

  public getNote(): Annotation[] | undefined {
      return this.note;
  }

  public addCertaintySubcomponent(newValue: EffectEvidenceSynthesisCertaintySubcomponent) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.certaintySubcomponent) !== 'undefined') {
         delete this.certaintySubcomponent;
      }
      return;
    }
    
    if (typeof(this.certaintySubcomponent) === 'undefined') {
      this.certaintySubcomponent =  [];
    }
    this.certaintySubcomponent.push(newValue);
  }

  public getCertaintySubcomponent(): EffectEvidenceSynthesisCertaintySubcomponent[] | undefined {
      return this.certaintySubcomponent;
  }


}



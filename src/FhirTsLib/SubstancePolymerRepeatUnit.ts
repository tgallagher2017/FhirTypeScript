import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_REPEATUNIT } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, SubstanceAmount, SubstancePolymerDegreeOfPolymerisation, SubstancePolymerStructuralRepresentation } from './FhirType';



/**
 * Todo.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/SubstancePolymer_RepeatUnit
 */
export class SubstancePolymerRepeatUnit {
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
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   orientationOfPolymerisation?: CodeableConcept;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected repeatUnit?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _repeatUnit?: Element;

  /**
   * Chemical substances are a single substance type whose primary defining element is the molecular
   * structure. Chemical substances shall be defined on the basis of their complete covalent molecular
   * structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also
   * captured. Purity, grade, physical form or particle size are not taken into account in the
   * definition of a chemical substance or in the assignment of a Substance ID.
   */
  @Type(() => SubstanceAmount)
   amount?: SubstanceAmount;

  /**
   * Todo.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstancePolymerDegreeOfPolymerisation)
  protected degreeOfPolymerisation?: SubstancePolymerDegreeOfPolymerisation[];

  /**
   * Todo.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstancePolymerStructuralRepresentation)
  protected structuralRepresentation?: SubstancePolymerStructuralRepresentation[];


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
  public setRepeatUnit(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.repeatUnit) !== 'undefined') {
         delete this.repeatUnit;
      }
      return;
    }
    
    if (REGEX_REPEATUNIT.test(newValue)) {
      this.repeatUnit = newValue
    } else {
      throw new Error("Invalid value pattern for repeatUnit of " + newValue);
    }
  }
  
  public getRepeatUnitPattern(): string {
    return REGEX_REPEATUNIT.source;
  }
  

  public getRepeatUnit(): string | undefined {
      return this.repeatUnit;
  }

  public addDegreeOfPolymerisation(newValue: SubstancePolymerDegreeOfPolymerisation) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.degreeOfPolymerisation) !== 'undefined') {
         delete this.degreeOfPolymerisation;
      }
      return;
    }
    
    if (typeof(this.degreeOfPolymerisation) === 'undefined') {
      this.degreeOfPolymerisation =  [];
    }
    this.degreeOfPolymerisation.push(newValue);
  }

  public getDegreeOfPolymerisation(): SubstancePolymerDegreeOfPolymerisation[] | undefined {
      return this.degreeOfPolymerisation;
  }

  public addStructuralRepresentation(newValue: SubstancePolymerStructuralRepresentation) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.structuralRepresentation) !== 'undefined') {
         delete this.structuralRepresentation;
      }
      return;
    }
    
    if (typeof(this.structuralRepresentation) === 'undefined') {
      this.structuralRepresentation =  [];
    }
    this.structuralRepresentation.push(newValue);
  }

  public getStructuralRepresentation(): SubstancePolymerStructuralRepresentation[] | undefined {
      return this.structuralRepresentation;
  }


}



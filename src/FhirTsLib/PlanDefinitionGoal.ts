import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Extension, PlanDefinitionTarget, RelatedArtifact } from './FhirType';



/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and
 * executable artifact. The resource is general enough to support the description of a broad range of
 * clinical artifacts such as clinical decision support rules, order sets and protocols.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/PlanDefinition_Goal
 */
export class PlanDefinitionGoal {
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
   category?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   description?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   priority?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   start?: CodeableConcept;

  /**
   * Identifies problems, conditions, issues, or concerns the goal is intended to address.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected addresses?: CodeableConcept[];

  /**
   * Didactic or other informational resources associated with the goal that provide further supporting
   * information about the goal. Information resources can include inline text commentary and links to
   * web resources.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => RelatedArtifact)
  protected documentation?: RelatedArtifact[];

  /**
   * Indicates what should be done and within what timeframe.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => PlanDefinitionTarget)
  protected target?: PlanDefinitionTarget[];


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

  public addAddresses(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.addresses) !== 'undefined') {
         delete this.addresses;
      }
      return;
    }
    
    if (typeof(this.addresses) === 'undefined') {
      this.addresses =  [];
    }
    this.addresses.push(newValue);
  }

  public getAddresses(): CodeableConcept[] | undefined {
      return this.addresses;
  }

  public addDocumentation(newValue: RelatedArtifact) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.documentation) !== 'undefined') {
         delete this.documentation;
      }
      return;
    }
    
    if (typeof(this.documentation) === 'undefined') {
      this.documentation =  [];
    }
    this.documentation.push(newValue);
  }

  public getDocumentation(): RelatedArtifact[] | undefined {
      return this.documentation;
  }

  public addTarget(newValue: PlanDefinitionTarget) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.target) !== 'undefined') {
         delete this.target;
      }
      return;
    }
    
    if (typeof(this.target) === 'undefined') {
      this.target =  [];
    }
    this.target.push(newValue);
  }

  public getTarget(): PlanDefinitionTarget[] | undefined {
      return this.target;
  }


}


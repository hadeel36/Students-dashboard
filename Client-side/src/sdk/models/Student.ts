/* tslint:disable */

declare var Object: any;
export interface StudentInterface {
  "first_name": string;
  "last_name": string;
  "birth_date": Date;
  "hobbies"?: string;
  "photo"?: string;
  "id"?: any;
}

export class Student implements StudentInterface {
  "first_name": string;
  "last_name": string;
  "birth_date": Date;
  "hobbies": string;
  "photo": string;
  "id": any;
  constructor(data?: StudentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Student`.
   */
  public static getModelName() {
    return "Student";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Student for dynamic purposes.
  **/
  public static factory(data: StudentInterface): Student{
    return new Student(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Student',
      plural: 'Students',
      path: 'Students',
      idName: 'id',
      properties: {
        "first_name": {
          name: 'first_name',
          type: 'string'
        },
        "last_name": {
          name: 'last_name',
          type: 'string'
        },
        "birth_date": {
          name: 'birth_date',
          type: 'Date'
        },
        "hobbies": {
          name: 'hobbies',
          type: 'string'
        },
        "photo": {
          name: 'photo',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}

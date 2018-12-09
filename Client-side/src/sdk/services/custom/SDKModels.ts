/* tslint:disable */
import { Injectable } from '@angular/core';
import { Student } from '../../models/Student';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Student: Student,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}

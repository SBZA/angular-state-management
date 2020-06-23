import {Action} from '@ngrx/store';

export enum EmployeeActionsType {
  Add = '[Employee Component] Add',
  Remove = '[Employee Component] Remove'
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class EmployeeAdd implements ActionEx {
  readonly type = EmployeeActionsType.Add;

  constructor(public payload: any){}
}

export class EmployeeRemove implements ActionEx {
  readonly type = EmployeeActionsType.Remove;

  constructor(public payload: any){}
}

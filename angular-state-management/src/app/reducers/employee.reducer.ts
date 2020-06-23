import {ActionEx, EmployeeActionsType} from 'src/app/actions/employee.actions';

export const initialState = [];

export function EmployeeReducer(state = initialState, action: ActionEx){
  switch(action.type) {
    case EmployeeActionsType.Add:
      return [...state, action.payload];

      case EmployeeActionsType.Remove:
        return [
          ...state.slice(0, action.payload),
          ...state.slice(action.payload + 1)
        ];

        default:
          return state;
  }
}

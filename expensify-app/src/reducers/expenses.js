// Expenses Reducer
/*
    Define default state for expenses reducer, in case we need to pass default values, so we can make code more readable
*/
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id != action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id == action.id) {
					return {
						...expense,
						...action.updates,
					};
				} else {
					return;
				}
			});
		default:
			return state;
	}
};

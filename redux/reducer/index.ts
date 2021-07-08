export interface IStoreState {
	maintenance: boolean;
}

export const reducer = (state: any, action: { type: any; }) => {
	switch (action.type) {
		case 'MAINTENANCE':
			return {
				...state,
				maintenance: true
			}
		case 'NORMAL':
			return {
				...state,
				maintenance: false,
			}
		default:
			return state
	}
}
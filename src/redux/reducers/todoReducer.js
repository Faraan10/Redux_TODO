const initialState = {
	list: [],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const { id, data } = action.payload;

			return {
				list: [
					...state.list,
					{
						id: id,
						data: data,
					},
				],
			};

		case "DELETE_TODO":
			const newList = state.list.filter((element) => element.id !== action.payload);

			return {
				...state,
				list: newList,
			};

		case "REMOVE_TODO":
			return {
				list: [],
			};

		default:
			return state;
	}
};

export default todoReducer;

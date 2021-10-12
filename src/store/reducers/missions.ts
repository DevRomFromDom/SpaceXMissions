const initialState = [] as any;

interface IAction {
    type: string;
    payload?: any;
}

export default function missions(state = initialState, action: IAction) {
    switch (action.type) {
        case "SET_MISSIONS":
            const newMissions = action.payload;
            return [...state, newMissions];
        case "REVERSE_MISSIONS":
            const newState = [...state.flat().reverse()];
            return [...newState];
        default:
            return state;
    }
}

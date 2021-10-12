const initialState = [] as any;

interface IAction {
    type: string;
    payload?: any;
}

export default function missions(state = initialState, action: IAction) {
    switch (action.type) {
        case "SET_MISSIONS":
            const newMissions = action.payload;
            return  newMissions;
        case "REVERSE_MISSIONS":
            return state.flat().reverse();
        default:
            return state;
    }
}

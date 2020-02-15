import produce from 'immer';
export default function createReducer(initialState, handlers) {
    return (state = initialState, action) => {
        const handler = handlers[action.type];
        if (!handler) {
            return state;
        }
        return produce(state, (draft) => handler(draft, action));
    };
}
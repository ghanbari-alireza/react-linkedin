export type Cart = Record<string, number>;



type ActionEnum = {
    "ADD": "ADD"
    "DECREASE": "DECREASE"
    "REMOVE": "REMOVE"
    "CLEAR": "CLEAR"
}

export type CartAction =
    | { type: "ADD"; title: string }
    | { type: "DECREASE"; title: string }
    | { type: "REMOVE"; title: string }
    | { type: "CLEAR" };



export const cartReducer = (
    state: Cart,
    action: CartAction
): Cart => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                [action.title]: (state[action.title] ?? 0) + 1
            };

        case "DECREASE": {
            const quantity = state[action.title] ?? 0;

            if (quantity <= 1) {
                const { [action.title]: _, ...rest } = state;
                return rest;
            }

            return {
                ...state,
                [action.title]: quantity - 1
            };
        }

        case "REMOVE": {
            const { [action.title]: _, ...rest } = state;
            return rest;
        }

        case "CLEAR":
            return {};

        default:
            return state;
    }
};
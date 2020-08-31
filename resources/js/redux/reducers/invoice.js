import {
    ADVANCE_INVOICE_STEP,
    INVOICE_ERROR,
    CLEAN_ERROR,
    CLEAN_INVOICE,
} from "../actions";

const initState = {
    address: "",
    username: "",
    activeStep: 0,
    error: null,
    deliveryCost: 2.38,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADVANCE_INVOICE_STEP:
            return {
                ...state,
                address: action.address || state.address,
                username: action.username || state.username,
                activeStep: action.activeStep || state.activeStep + 1,
            };

        case INVOICE_ERROR:
            return {
                ...state,
                error: action.error,
            };

        case CLEAN_ERROR:
            return {
                ...state,
                error: null,
            };

        case CLEAN_INVOICE:
            return {
                ...state,
                address: "",
                username: "",
                activeStep: 0,
            };

        default:
            return {
                ...state,
            };
    }
};

export default reducer;

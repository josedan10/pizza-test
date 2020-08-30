import { ADVANCE_INVOICE_STEP, INVOICE_ERROR, CLEAN_ERROR } from "../actions";

const initState = {
    address: "",
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

        default:
            return {
                ...state,
            };
    }
};

export default reducer;

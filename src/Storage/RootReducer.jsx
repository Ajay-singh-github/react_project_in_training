const initialState = { productData: {} };

export default function RootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_PRODUCT": {
            return {productData: {...state.productData,[action.payload[0]]: action.payload[1],},};
        }

        case "DEL_PRODUCT": {
            const newData = { ...state.productData };
            delete newData[action.payload[0]];
            return { productData: newData };
        }

        case "EDIT_PRODUCT": {
            return {productData: {...state.productData,[action.payload[0]]: action.payload[1],},};
        }

        default:
            return state;
    }
}

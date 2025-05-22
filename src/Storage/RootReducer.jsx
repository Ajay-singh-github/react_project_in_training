const initialState = { productData: {} }

export default function RootReducer(state = initialState , action)
{
    switch(action.type)
    {
        case "ADD_PRODUCT":
                state.productData[action.payload[0]] = action.payload[1]
                console.log(state.productData)
                return {productData:state.productData}
    
        case "DEL_PRODUCT":
             delete state.productData[action.payload[0]]
             return {productData:state.productData}
                // delete state.employeeData.action.payload[0]
             break

        case "EDIT_PRODUCT":
             state.productData[action.payload[0]] = action.payload[1]
             return {productData:state.productData}
        default:
            return {productData:state.productData}
    }
}

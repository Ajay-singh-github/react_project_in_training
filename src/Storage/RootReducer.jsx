const initialState = { employeeData: {} }

export default function RootReducer(state = initialState , action)
{
    switch(action.type)
    {
        case "ADD_EMPLOYEE":
                state.employeeData[action.payload[0]] = action.payload[1]
                console.log(state.employeeData)
                return {employeeData:state.employeeData}
    
        case "DEL_EMPLOYEE":
             delete state.employeeData[action.payload[0]]
             return {employeeData:state.employeeData}
                // delete state.employeeData.action.payload[0]
             break

        case "EDIT_EMPLOYEE":
             state.employeeData[action.payload[0]] = action.payload[1]
             return {employeeData:state.employeeData}
        default:
            return {employeeData:state.employeeData}
    }
}

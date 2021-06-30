

const initialState = {
    startupData: []
};
const UPDATE_STARTUP_DATA = 'UPDATE_STARTUP_DATA';
const func =(state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STARTUP_DATA: {
            return {
                ...state,startupData: action.startupData
            }
        }
        default: return state
    }
}
export default func

export const startupData = (data) => {
    return (dispatch) => {
       dispatch({type:UPDATE_STARTUP_DATA,startupData:data})         
    }
};

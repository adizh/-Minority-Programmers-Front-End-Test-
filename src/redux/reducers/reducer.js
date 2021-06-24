import axios from "axios";

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
export const updateStartupData = () => {
    return (dispatch) => {
        axios('http://localhost:8090/api/v1/startup',
        {headers:{ "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        mode: "cors"   }})
            .then(({data}) => {
                    dispatch({type: UPDATE_STARTUP_DATA, startupData: data})
                }
            )
            .catch((err)=>{
                console.log(err)
            })
            
    }
};
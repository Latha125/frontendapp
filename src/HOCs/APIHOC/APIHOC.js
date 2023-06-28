
import axios from 'axios';
const APIHOC =(Component, data) =>{

    const HOCfn=()=>{
        const postRequest =(apiURL, body) =>{

            axios.post(apiURL, body);
        }
        return <Component postRequest= {postRequest}/>
    }
    return HOCfn;
}
export default APIHOC;
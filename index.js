import axios from "axios";
import 'dotenv/config';


let baseUrl = process.env.SN_BASE

async function getCars(){
    try {

        let config = {
            url: baseUrl+"x_522943_gregslist_car?sysparm_limit=1",
            method: "get",
            headers: {
                "Accept": "application/json",
                "Content-Type":"application/json",
                "Authorization": "Basic YWRtaW46OFptITB6WExAaVVt"
            }
        }

        const response = await axios(config);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getCars();
import axios from "axios"
import Error from './../Components/Error';

export async function productApi() {
        let data=await axios.get('https://fakestoreapi.com/products')
        return data

}

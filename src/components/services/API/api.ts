import axios from 'axios';
import { config } from '../../utils/API/config'
const BASE_URL = "https://project-55919f.apibrew.io:8443";
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: config.headers
});


interface IGetMeal {
    id: string,
    category: string,
    description: string,
    imageUrl: string,
    name: string,
    price: number,
    type: string,
    version: number
}
interface IGetMealIds {
    content: Array<IGetMeal>;
}



export const getMealIds = async () => {
    return (await axiosInstance.get<IGetMealIds>('/meals'))
    .data
    .content
    .map((meal: IGetMeal) => meal.id)
}

export const getMealIdsSlice = async (limit: number, offset: number) => {
    const response = await axiosInstance.get<IGetMealIds>('/meals', {
        params: {
            limit,
            offset
        }
    });
    return response.data.content.map((meal: IGetMeal) => meal.id);
}
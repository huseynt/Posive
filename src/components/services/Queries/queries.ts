import { useQuery } from '@tanstack/react-query';
import { getMealIds } from '../API/api';
import { getMealIdsSlice } from '../API/api';

const fetchMealIds = async () => {
    return getMealIds();
};

export function useGetMealIds() { 
    return useQuery({
        queryKey: ['mealIds'],
        queryFn: fetchMealIds,
    }) 
}

// export const getMealIdsS = async () => {
//     return getMealIdsSlice();
// };

export function useGetMealIdsSlice(limit: number, offset: number) { 
    return useQuery({
        queryKey: ['mealIdsSlice', limit, offset],
        queryFn: () => getMealIdsSlice(limit, offset),
        // keepPreviousData: true 
    });
}
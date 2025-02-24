import {useQuery} from "react-query";
import {useParams } from 'react-router-dom';

import {SportItem} from "./sport-item.jsx";
import {apiRequest} from "../common/api/index.js";


const hours = (hours) =>
    parseInt(
        new Date(new Date().setHours(new Date().getHours() + hours)).setSeconds(0) / 1000
    );

const allTo = () =>
    new Date(
        new Date(new Date().setFullYear(new Date().getFullYear() + 1)).setSeconds(0)
    );

const branchConfig = {
    1: {
        label: 'All',
        to: () => Math.floor(allTo().setDate(allTo().getDate() - 1) / 1000),
    },
    2: {
        label: 'Today',
        to: () => parseInt(new Date().setHours(23, 59, 59, 999) / 1000),
    },
    3: {
        label: '12 Hour',
        to: () => hours(12),
    },
    4: {
        label: '3 Hour',
        to: () => hours(3),
    },
    5: {
        label: '1 Hour',
        to: () => hours(1),
    },
};


export const QueryWrp = () => {
    let {branchId} = useParams();

    const {data: sports, isLoading} = useQuery({
        queryKey: ['sports', branchId],
        queryFn: async () => {
            const res = await apiRequest({
                    url: 'sportMenu',
                    method: 'post',
                    body: {
                        to: branchConfig[branchId]?.to(),
                    }
                }
            );
            if (!res || res.error) {
                console.error(res?.error ?? 'error')
            }
            return res.data;
        },
        staleTime: Infinity,
        enabled: branchId !== undefined,
    });

    if (branchId === undefined) return <div>Choose brunch</div>

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            {sports?.length ?
                sports.map(sport => <SportItem key={sport.i} sport={sport}/>)
                : null
            }
        </div>
    );
};
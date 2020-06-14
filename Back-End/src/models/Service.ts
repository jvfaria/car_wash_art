interface Service {
    id: number;
    value: number;
    date: Date;
    enter_time: string;
    out_time: string;
    finished: boolean;
    description: string;
    vehicle_id: number;
    client_id: number;
}

export default Service;
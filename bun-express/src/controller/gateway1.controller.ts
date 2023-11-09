import axios from "axios";

const service1Url = 'https://641aa1a3f398d7d95d5ab3ad.mockapi.io/'

export class Gateway1Service {
    static getService1 = async (path: string) => {
        return await axios.get(service1Url + path);
    }
}
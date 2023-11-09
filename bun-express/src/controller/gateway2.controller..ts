import axios from "axios";

const service2Url = 'https://641aa1a3f398d7d95d5ab3ad.mockapi.io/post'

export class Gateway2Service {
    static getService1 = async () => {
        return await axios.get(service2Url);
    }
}
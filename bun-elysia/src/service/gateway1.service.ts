const service1Url = 'https://641aa1a3f398d7d95d5ab3ad.mockapi.io/'

class Gateway1Service {
    static getService1 = async (path: string) => {
        return await fetch(service1Url + path);
    }
}

export default Gateway1Service;
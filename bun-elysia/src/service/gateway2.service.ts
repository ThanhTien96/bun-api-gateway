const service2Url = 'https://provinces.open-api.vn/api/?depth=3'

class Gateway2Service {
    static getService2 = async () => {
        return await fetch(service2Url);
    } 
}

export default Gateway2Service;
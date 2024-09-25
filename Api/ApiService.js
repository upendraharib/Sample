

export class ApiService{
    static BASE_URL = 'http://192.168.2.55:8083'
    static TM_API = "/tm-api/"
    static API = "/api"
    static APP = "/app"

    static async makeRequest(enpoint,method,body = null,headers={}){
        const url =  `${this.BASE_URL}${enpoint}`;
        try{
            console.log("url-----> ",url+"   "+JSON.stringify(body));
            const response = await fetch(url,{
                method:method,
                headers:{
                    'Content-Type': 'application/json',
                    headers,
                },
                body:JSON.stringify(body),
            });
            console.log(response);
            if (!response.ok){
                throw new Error(response.text || 'Api request failed');
            }
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;


        }catch(error){
            console.error('API request error :',error);
        }
    }
    //login api
    static async login(userName,mobileNumber){
        const body = {
            username :userName,
            password:mobileNumber, 
            ldap_sso:1
        };
        return await this.makeRequest(`${this.TM_API}user/login`,'POST',body);
    }
    //register
    static async register(userName,mobileNumber){
        const body = {
            username :userName,
            mobile:mobileNumber, 
        };
        return await this.makeRequest(`${this.TM_API}user/register`,'POST',body);
    }
    static async logout(token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
    
        return await this.makeRequest(`${this.TM_API}user/logout`, 'POST', null, headers);
     }
     static async syncContacts(token){
        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
          return await this.makeRequest(`${this.API}get-messenger-contacts`, 'POST', null, headers);
     }

}
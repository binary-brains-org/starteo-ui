import { IdeaType } from "./Ideas"
import fetcher from "./fetcher"

interface createFunds {
    "userId": string,
    "value": number
}

interface fundsResponse {
    "id": string,
    "idea": IdeaType,
    "user": {
      "id": "string",
      "firstname": "string",
      "lastname": "string",
      "email": "string"
    },
    "value": 10000
  }

export class fundProvider{
    static async createFunds(idea_id:string,user_id:string, value:number):Promise<fundsResponse> {
        return fetcher.put(`/funds/${idea_id}?user_id=${user_id}&value=${value}`).then((res)=>{
            return res.data;
        }).catch((e)=>{
            throw e;
        })
    }
}
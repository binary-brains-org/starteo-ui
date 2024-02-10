import { IdeaType } from "./Ideas"
import fetcher from "./fetcher"

interface createFunds {
    "userId": string,
    "value": number
}
export class fundProvider{
    static async createFunds(idea_id:string,user_id:string, value:number,token:string):Promise<any> {
        return fetcher.put(`/funds/${idea_id}`,{
            user_id:user_id,
            value:value
        },{
            headers:{
                Authorization:"Bearer "+token
            }
        }).then((res)=>{
            return res.data;
        }).catch((e)=>{
            throw e;
        })
    }
}
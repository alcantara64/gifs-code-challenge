import { HttpService } from "./httpService/httpService";


export class GiphyService{
   private httpService:HttpService;
    constructor(){
      this.httpService = new HttpService();
    }
   getTrending(offset:number, limit: number = 20){
    const trendsQuerryParams = {
        offset,
        limit,
    }
    return this.httpService.get('/gifs/trending',trendsQuerryParams);
   } 
   search(text:string, limit:number = 20, offset?:number){
       const queryStringPayload = {
           q: text,
           limit,
           offset,
       }
       return this.httpService.get(`gifs/search`,queryStringPayload);
   }

}
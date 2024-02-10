import fetcher from "./fetcher";

interface createIdeaType  {
    "id": "string",
    "name": "string",
    "status": "OPEN",
    "description": "string",
    "founder": "person@gmail.com",
    "image": "string"
}

interface createCommentsIdea {
    "id": "string",
    "userId": "string",
    "content": "string"
}

export class Ideas{
  static async createIdea(idea:createIdeaType) {
    fetcher.put("/ideas",idea).then((value)=>{
        return value.data
    }).catch((e)=>{
        throw e;
    })
  }

  static async getIdeas(page:number, page_size:number) {
    fetcher.get(`/ideas?page=${page}&page_size=${page_size}`).then((value) => {
        return value.data;
    }).catch((e) => {
        return e;
    })
  }

  static async getIdeaByIdeaId(idea_id:string) {
    fetcher.get(`/ideas/${idea_id}`).then((value) => {
        return value.data;
    }).catch((e) => {
        return e;
    })
  }

  static async getCommentsIdeaByIdeaId(page:number, page_size:number, idea_id:string) {
    fetcher.get(`/ideas/${idea_id}/comments?page=${page}&page_size=${page_size}`).then((value) => {
        return value.data;
    }).catch((e) => {
        return e;
    })
  }

  static async createCommentsIdeaByIdeaId(idea_id:string) {
    fetcher.get(`/ideas/${idea_id}/comments`).then((value) => {
        return value.data;
    }).catch((e) => {
        return e;
    })
  }
  
}
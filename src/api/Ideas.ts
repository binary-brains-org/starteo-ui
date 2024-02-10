import fetcher from "./fetcher";

type donationStatus = "OPEN" | "CLOSE"

export interface createIdeaType {
    "name": string,
    "status": donationStatus,
    "description": string,
    "founder": string,
    "image":File | null 
}

export interface CommentsIdeaType {
    "id": string,
    "idea": IdeaType
    "content": string,
    "user": {
        "id": string,
        "firstname": string,
        "lastname": string,
        "email": string
    }
}

export interface IdeaType {
    "id": string,
    "name": string,
    "status": donationStatus,
    "description": string,
    "founder": string,
    "image": string,
    "creationDatetime": string,
    "updatedDatetime": string,
    "currentFunds": number
}

export interface createCommentsIdea {
    "userId": string,
    "content": string 
}

export class IdeasProvider {
    static async createIdea(idea: createIdeaType): Promise<IdeaType> {
        return fetcher.put("/ideas", idea).then((value) => {
            return value.data
        }).catch((e) => {
            throw e;
        })
    }

    static async getIdeas(page: number, page_size: number): Promise<[IdeaType]> {
        return fetcher.get(`/ideas?page=${page}&page_size=${page_size}`).then((value) => {
            return value.data;
        }).catch((e) => {
            return e;
        })
    }

    static async getIdeaByIdeaId(idea_id: string): Promise<IdeaType> {
        return fetcher.get(`/ideas/${idea_id}`).then((value) => {
            return value.data;
        }).catch((e) => {
            return e;
        })
    }

    static async getCommentsIdeaByIdeaId(page: number, page_size: number, idea_id: string): Promise<CommentsIdeaType> {
        return fetcher.get(`/ideas/${idea_id}/comments?page=${page}&page_size=${page_size}`).then((value) => {
            return value.data;
        }).catch((e) => {
            return e;
        })
    }

    static async createCommentsIdeaByIdeaId(idea_id: string, user_id: string, content: string) : Promise<CommentsIdeaType>{
        return fetcher.put(`/ideas/${idea_id}/comments`,{
            "userId": user_id,
            "content": content
        }).then((value) => {
            return value.data;
        }).catch((e) => {
            return e;
        })
    }

}
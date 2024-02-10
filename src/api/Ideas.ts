import fetcher from "./fetcher";

export interface createIdeaType {
    "name": "string",
    "status": "OPEN",
    "description": "string",
    "founder": "person@gmail.com",
    "image": "string"
}

export interface CommentsIdeaType {
    "id": "string",
    "idea": {
        "id": "string",
        "name": "string",
        "status": "OPEN",
        "description": "string",
        "founder": "person@gmail.com",
        "image": "string",
        "creationDatetime": "2024-02-10T06:59:13.696Z",
        "updatedDatetime": "2024-02-10T06:59:13.696Z",
        "currentFunds": 0
    },
    "content": "string",
    "user": {
        "id": "string",
        "firstname": "string",
        "lastname": "string",
        "email": "string"
    }
}

export interface IdeaType {
    "id": "string",
    "name": "string",
    "status": "OPEN",
    "description": "string",
    "founder": "person@gmail.com",
    "image": "string",
    "creationDatetime": "2024-02-10T06:54:37.287Z",
    "updatedDatetime": "2024-02-10T06:54:37.287Z",
    "currentFunds": 0
}

export interface createCommentsIdea {
    "userId": "string",
    "content": "string"
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
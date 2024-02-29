import { CreateIdea, fetcher } from '@/api';
import { Token } from '@/utils';

class IdeaProvider {
  public static async getIdeas(
    page: number,
    pageSize: number,
    ideaName?: string,
  ) {
    const search = new URLSearchParams();
    search.set('page', page.toString());
    search.set('page_size', pageSize.toString());
    if (ideaName) search.set('idea_name', ideaName);
    return (
      await fetcher.get(`/ideas?${search.toString()}`, {
        headers: { Authorization: Token.get() },
      })
    ).data;
  }

  public static async getById(id: string) {
    return (
      await fetcher.get(`/ideas/${encodeURIComponent(id)}`, {
        headers: { Authorization: Token.get() },
      })
    ).data;
  }

  public static async getWeekly(page: number, pageSize: number) {
    const search = new URLSearchParams();
    search.set('page', page.toString());
    search.set('page_size', pageSize.toString());
    return (await fetcher.get(`/lastIdeas?${search.toString()}`, {
      headers: { Authorization: Token.get() },
    })).data;
  }

  public static async createOrUpdate(...data: CreateIdea[]) {
    return (await fetcher.put('/ideas', data, {
      headers: { Authorization: Token.get() },
    })).data;
  }

  public static async getCommentsIdea(ideaId: string) {
    return (await fetcher.get(`/ideas/${encodeURIComponent(ideaId)}/comments`, {
      headers: { Authorization: Token.get() },
    })).data;
  }

  public static async setCommentOnIdea(ideaId: string){
    return (await fetcher.put(`/ideas/${encodeURIComponent(ideaId)}/comments`, {}, {headers: {Authorization: Token.get()}}))
  }
}

export { IdeaProvider };

import { useParams } from 'react-router-dom';
import BannerUser from './bannerUser';
import PostContainer from '@/pages/ViewIdea/PostContainer';
import { useEffect, useState } from "react";
import { IdeasProvider, IdeaType } from "@/api/Ideas";

type UrlParam = 'user_id' | 'idea_id';

const ViewIdea = () => {
  const { user_id, idea_id } = useParams<Record<UrlParam, string>>();
  const [errorNode, setErrorNode] = useState();

  const [idea, setIdea] = useState<IdeaType | null>(null);

  useEffect(() => {
    if(idea_id){
      IdeasProvider.getIdeaByIdeaId(idea_id)
        .then((idea) => {
          setIdea(idea);
        })
        .catch(setErrorNode)
    }
  }, []);

  return (
    <div>
      <BannerUser userId={user_id} />
      <div className="center-flex flex-col py-4">
        <PostContainer idea={idea} />
      </div>
      {errorNode}
    </div>
  );
};

export default ViewIdea;

import { useParams } from 'react-router-dom';
import BannerUser from './bannerUser';
import PostContainer from '@/pages/ViewIdea/PostContainer';

type UrlParam = 'user_id' | 'idea_id';

const ViewIdea = () => {
  const { user_id, idea_id } = useParams<Record<UrlParam, string>>();
  
  return (
    <div>
      <BannerUser userId={user_id} />
      <div className="center-flex flex-col py-4">
        <PostContainer />
      </div>
    </div>
  );
};

export default ViewIdea;

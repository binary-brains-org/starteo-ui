import IdeaPost from '@/pages/ViewIdea/IdeaPost';
import { AppUses } from '@/components';

const PostContainer = () => {
  return (
    <div className="flex flex-col gap-10">
      <IdeaPost />
      <AppUses />
    </div>
  );
};

export default PostContainer;

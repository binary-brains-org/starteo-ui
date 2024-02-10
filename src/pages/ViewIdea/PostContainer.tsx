import IdeaPost from '@/pages/ViewIdea/IdeaPost';
import { AppUses } from '@/components';
import { IdeaType } from "@/api/Ideas";

interface Props {
  idea: IdeaType | null;
}

const PostContainer = ({idea}: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <IdeaPost idea={idea} />
      <AppUses />
    </div>
  );
};

export default PostContainer;

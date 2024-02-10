import Header from '@/pages/Profile/Header';
import Aside from '@/pages/Profile/Aside';
import IdeaPost from "@/pages/Profile/Post/IdeaPost";

const Profile = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="flex w-full gap-1 h-full">
        <Aside />
        <div className="flex w-full flex-col gap-4">
          <IdeaPost />
          <IdeaPost />
          <IdeaPost />
        </div>
      </div>
    </div>
  );
};

export default Profile;

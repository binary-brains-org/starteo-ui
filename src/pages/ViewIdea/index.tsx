import { useParams } from 'react-router-dom';
import BannerUser from './bannerUser';
import PostContainer from '@/pages/ViewIdea/PostContainer';
import { useEffect, useState } from 'react';
import auth from '@/services/auth';
import { User } from '@/types';
import { fundProvider } from '@/api/fund';
import Token from '@/core/token';
import { Input } from '@mui/material';
import { ThemeContext } from '@emotion/react';
import { IdeasProvider } from '@/api/Ideas';

type UrlParam = 'user_id' | 'idea_id';

const ViewIdea = () => {
  const { user_id, idea_id } = useParams<Record<UrlParam, string>>();
  const [state, setState] = useState<User | null>(null);
  const [fund, setFund] = useState(0);
  const [idea,setIdea] = useState<any>(null);

  useEffect(()=>{
    auth.getCurrentUser().then((user)=>{
      setState(user)
      IdeasProvider.getIdeaByIdeaId(idea_id ||"" ).then((funds)=>{
        setIdea(funds);
      })
    }).catch((e)=>{
      useNavigate()("/login");
    })
  },[])
  const handleSendFunds = async (value:number) => {
    const token = Token.get();
    fundProvider.createFunds(idea_id, user_id,value,token).then((value)=>{
      console.log(value);
    }).catch((e)=>{
      throw e;
    });
  }
  return (
    <div>
      <BannerUser userId={user_id} />
      <div className="center-flex flex-col py-4">
        <PostContainer />
      </div>
      <div>
        <input className='border-2 border-gray-300' type="text" onChange={(e) => {setFund(e.target.value)}}/>
        <button onClick={() => {handleSendFunds(fund)}}>send funds</button>
        {idea ? <>{idea.currentFunds}</> : <>not fetched yet</>}
      </div>
    </div>
  );
};

export default ViewIdea;

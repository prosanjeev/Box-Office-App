import { useState } from 'react';
import { searchForShows, searchForPeople} from '../API/tvmaze';
import SearchOption from '../components/SearchOption';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';

const Home = () => {
 
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
   
    try {
      setApiDataError(null);
      if(searchOption==='shows'){
          const result = await searchForShows(q);
          setApiData(result);
      }else{
        const result = await searchForPeople(q);
          setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured: {apiDataError.message}</div>;
    }

    if(apiData?.length===0){
        return <div>No Result</div>
    }

    if (apiData) {
      return apiData[0].show? <ShowGrid shows={apiData} />:<ActorGrid actors={apiData} />
    }
  };

  return (
    <div>
      <SearchOption onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;

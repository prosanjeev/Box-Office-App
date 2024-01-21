import { useState } from 'react';
import { searchForShows, searchForPeople} from '../API/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

    console.log(searchOption)

  const onSearchInputChange = e => {
    setSearchStr(e.target.value);
  };
  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };

  const onSearch = async event => {
    event.preventDefault();
    try {
      setApiDataError(null);
      if(searchOption==='shows'){
          const result = await searchForShows(searchStr);
          setApiData(result);
      }else{
        const result = await searchForPeople(searchStr);
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
    if (apiData) {
      return apiData[0].show? apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      )):apiData.map(data => (
        <div key={data.person.id}>{data.person.name}</div>
      ));
    }
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />

        <label>
            Shows
            <input type='radio' name='search-option' value="shows" checked={searchOption==='shows'} onChange={onRadioChange} />
        </label>
        <label>
            Actors
            <input type='radio' name='search-option' value="actors" checked={searchOption==='actors'} onChange={onRadioChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;

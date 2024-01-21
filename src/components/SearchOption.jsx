import { useState } from 'react';

const SearchOption = ({ onSearch }) => {
    const [searchStr, setSearchStr] = useState('');
    const [searchOption, setSearchOption] = useState('shows');

    const onSearchInputChange = e => {
        setSearchStr(e.target.value);
      };
      const onRadioChange = e => {
        setSearchOption(e.target.value);
      };

      const onSubmit = ev => {
        ev.preventDefault();
    
        const options = {
          q: searchStr,
          searchOption,
        };
    
        onSearch(options);
      };


  return (
    <form onSubmit={onSubmit}>
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
  )
}

export default SearchOption
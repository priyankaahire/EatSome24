// SearchContext.js
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');

  const updateSearchText = (text) => {
    setSearchText(text);
  };

  return (
    <SearchContext.Provider value={{ searchText, updateSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
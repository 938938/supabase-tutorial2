'use client';

import { useState } from 'react';
import Logo from './components/logo';
import SearchComponent from './components/search-component';
import FileDragDropZone from './components/file-dragdropzone';
import DropboxImageList from './components/dropbox-image-list';

const UI = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <main className='w-full p-2 flex flex-col gap-4'>
      <Logo />
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <FileDragDropZone />
      <DropboxImageList />
    </main>
  );
};

export default UI;

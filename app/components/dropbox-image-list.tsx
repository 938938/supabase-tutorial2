'use client';

import DropboxImage from './dropbox-image';

const DropboxImageList = () => {
  return (
    <section className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2'>
      <DropboxImage />
      <DropboxImage />
      <DropboxImage />
      <DropboxImage />
    </section>
  );
};

export default DropboxImageList;

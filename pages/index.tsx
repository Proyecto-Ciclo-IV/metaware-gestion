import React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='bg-indigo-500'>
      <p>Página Index</p>
      <Link href='/admin/usuarios'>
      <a className='cursor-pointer'>Ir a Admin/usuarios</a>
      </Link>
    </div>
  );
};

export default Home;

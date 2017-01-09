import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div>
      <Link href='/'><a>Home</a></Link> - <Link href='/about'><a>About me</a></Link>
    </div>
  );
};

export default Navigation;

import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Search } from 'lucide-react';
import Link from 'next/link'; // Import Link from next/link
import React, { useState } from 'react';

function Hero() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-7'>
      <h2 className='font-bold text-[46px] text-center'>
        Find Home 
        <span className='text-primary'> Service/Repair</span>
        <br></br> Near You</h2>
      <h2 className='text-xl text-gray-400'>Explore Best Home Service & Repair near you</h2>
      <div className='mt-4 flex gap-4 items-center'>
        <Input
          placeholder='Search'
          className="rounded-full md:w-[350px]"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Link href={`/search/${searchInput}`}>
          <Button
            className="rounded-full h-[46px]"
            onClick={() => {
              console.log(`Searching for: ${searchInput}`);
              // Perform search logic here, e.g., make an API call or filter a list
            }}
          >
            <Search className='h-4 w-4'/>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
import ServerError from '@/components/error/ServerError';
import VerticalCards from '@/components/shared/VerticalCards';
import React from 'react'
const getTrendingAnime = async () => {
  try {
    const response = await fetch("https://animetrix-api.vercel.app/meta/anilist/movie?perPage=20");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending anime:", error);
    return [];
  }
};
export default async function page () {
  const trending = await getTrendingAnime()
  return (
    <div>
      {trending.length>0?(
      <VerticalCards title={"Movies"} data = {trending}/>
      ):(
        <ServerError/>
      )}
    </div>
  )
}
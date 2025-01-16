import React from 'react';

async function fetchHomeData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/home`,
    { cache: 'no-store' } // Опція для завжди актуальних даних
  );

  if (!response.ok) {
    throw new Error('Failed to fetch home data');
  }

  const homeData = await response.json();
  return homeData;
}

const LandingPage = async () => {
  const homeData = await fetchHomeData();

  return (
    <div>
      <h1>{homeData.title}</h1>
      <p>{homeData.content}</p>
      {homeData.image && <img src={homeData.image.url} alt={homeData.title} />}
    </div>
  );
};

export default LandingPage;

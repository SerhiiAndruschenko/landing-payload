import React from 'react';
import { getPayload } from 'payload';
import config from '@payload-config';

// Initialize Payload CMS
const payload = await getPayload({ config });

const LandingPage = async () => {
  let homeData;

  try {
    // Fetch fresh data without caching
    const result = await payload.findGlobal({
      slug: 'home',
      depth: 1,
      locale: 'en',
      fallbackLocale: false,
      overrideAccess: false,
      showHiddenFields: true,
    });

    homeData = result;
  } catch (error) {
    console.error('Failed to fetch home data:', error);
    homeData = { title: 'Error', content: 'Unable to load content.' };
  }

  return (
    <div>
      <h1>{homeData.title}</h1>
      <p>{homeData.content}</p>
      {homeData.image && <img src={homeData.image.url} alt={homeData.title} />}
    </div>
  );
};

export const dynamic = 'force-dynamic'; // Disable caching in the App Router

export default LandingPage;

import React from 'react';
import '@/styles/base.scss';
import { getPayload } from 'payload';
import config from '@payload-config';

// Initialize Payload CMS
const payload = await getPayload({ config });

const LandingPage = async () => {
  let homeData;

  try {
    // Fetch fresh data
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
    homeData = {
      hero: {
        title: 'Error',
        subtitle: '',
        content: 'Unable to load content.',
        image: null,
        advantages: [],
      },
      services: {
        title: '',
        subtitle: '',
        ourServices: [],
      },
      why: {
        why_title: '',
        why_subtitle: '',
        why_content: '',
        why_reasones: [],
      },
    };
  }

  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className="_container">
          <h1>{homeData.hero.title}</h1>
          <h2>{homeData.hero.subtitle}</h2>
          <p>{homeData.hero.content}</p>
          {homeData.hero.image && (
            <img src={homeData.hero.image.url} alt={homeData.hero.title} />
          )}
          <div className="advantages">
            {homeData.hero.advantages?.map((advantage, index) => (
              <div key={index} className="advantage">
                <h3>{advantage.value}</h3>
                <p>{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className="_container">
          <h1>{homeData.services.title}</h1>
          <h2>{homeData.services.subtitle}</h2>
          <div className="our-services">
            {homeData.services.ourServices?.map((service, index) => (
              <div key={index} className="service-item">
                {service.image && (
                  <img src={service.image.url} alt={service.title} />
                )}
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section>
        <div className="_container">
          <h2>{homeData.why.why_subtitle}</h2>
          <h1>{homeData.why.why_title}</h1>
          <p>{homeData.why.why_content}</p>
          <div className="reasons">
            {homeData.why.why_reasones?.map((reason, index) => (
              <div key={index} className="reason">
                {reason.reasone_icon && (
                  <img
                    src={reason.reasone_icon.url}
                    alt={reason.reasone_value}
                  />
                )}
                <h3>{reason.reasone_value}</h3>
                <p>{reason.reasone_text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const dynamic = 'force-dynamic'; // Disable caching in the App Router

export default LandingPage;

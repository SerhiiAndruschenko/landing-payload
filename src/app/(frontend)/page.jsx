import React from 'react';
import '@/styles/base.scss';
import { getPayload } from 'payload';
import config from '@payload-config';
import HeroSection from "@/app/(frontend)/components/HeroSection";
import Image from 'next/image';

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
      <HeroSection data={homeData.hero} />
      

      {/* Services Section */}
      <section>
        <div className="_container">
          <h1 className='fadeInUp'>{homeData.services.title}</h1>
          <h2 className='fadeInUp'>{homeData.services.subtitle}</h2>
          <div className="our-services">
            {homeData.services.ourServices?.map((service, index) => (
              <div key={index} className="service-item fadeInUp">
                {service.image && (
                  <Image src={service.image.url} alt={service.title} width={186} height={186} />
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
                  <Image src={reason.reasone_icon.url} alt={reason.reasone_value} width={44} height={44} />
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

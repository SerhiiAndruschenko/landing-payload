import Image from 'next/image'
import React from 'react'

const HeroSection = ({ data }) => {
  return (
    <section>
      <div className="_container">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <p>{data.content}</p>
        {data.image && (
            <Image src={data.image.url} alt={data.title} width={420} height={420} />
        )}
        <div className="advantages">
          {data.advantages?.map((advantage, index) => (
            <div key={index} className="advantage">
              <h3>{advantage.value}</h3>
              <p>{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

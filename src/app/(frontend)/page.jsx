export async function getStaticProps() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/home`
    );
    const homeData = await response.json();
  
    return {
      props: {
        homeData,
      },
      revalidate: 60, // Оновлення кешу кожні 60 секунд
    };
  }
  
  const LandingPage = ({ homeData }) => {
    return (
      <div>
        <h1>{homeData.title}</h1>
        <p>{homeData.content}</p>
        {homeData.image && <img src={homeData.image.url} alt={homeData.title} />}
      </div>
    );
  };
  
  export default LandingPage;
  
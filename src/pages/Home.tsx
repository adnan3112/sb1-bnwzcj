import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Groww Digitally: Empowering Digital Transformation</title>
        <meta name="description" content="Groww Digitally provides innovative IT solutions and digital transformation strategies for businesses." />
        <meta name="keywords" content="IT solutions, digital transformation, software development" />
        <meta name="author" content="Groww Digitally" />
        <link rel="canonical" href="https://growwdigitally.com" />
      </Helmet>
      
      {/* Your home page content */}
      <section>
        <h1>Welcome to Groww Digitally</h1>
        <p>Your partner in digital transformation and IT solutions.</p>
      </section>
    </div>
  );
};

export default Home;

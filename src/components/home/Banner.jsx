

const Banner = () => {
    return (
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://thumbs.dreamstime.com/z/toy-shop-vector-flat-design-style-banner-toy-shop-vector-flat-design-style-banner-white-background-copy-space-text-200060636.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-4 text-7xl font-extrabold text-red-800">ToyStore</h1>
      <p className="mb-5 text-3xl font-bold text-red-500">Where the fun is</p>
      <p className="mb-5">We are the world’s largest toy company.We inspire and develop the builders of tomorrow.We shape your imagination.Here you can be anything.</p>
      <button className="btn btn-primary">Explore Toys</button>
    </div>
  </div>
</div>
    );
};

export default Banner;
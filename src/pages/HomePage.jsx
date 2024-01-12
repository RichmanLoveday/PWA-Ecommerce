import Categories from "../features/home/Categories";
import Collection from "../features/home/Collection";
import FeaturedProducts from "../features/home/FeaturedProducts";
import HomeTop from "../features/home/HomeTop";
import NewArrival from "../features/home/NewArrival";

function HomePage() {
  return (
    <>
      <HomeTop />
      <FeaturedProducts />
      <NewArrival />
      <Collection />
      <Categories />
    </>
  );
}

export default HomePage;

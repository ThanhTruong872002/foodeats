import Header from "../Header";
import Filter from "../Filter";
import Category from "../Category";
import Footer from "../Footer";

export default function SearchResult() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="search mt-[55px]">
        <div className="container">
          <div className="flex gap-[36px]">
            <Filter />
            <Category />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

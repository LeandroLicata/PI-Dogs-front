import CardContainer from "../../components/CardsContainer/CardsContainer";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDogs } from "../../redux/actions";
import Paging from "../../components/Paging/Paging";
import Sort from "../../components/Sort/Sort";
import Filter from "../../components/Filter/Filter";
import Navbar from "../../components/NavBar/NavBar";

const Home = () => {
  const allDogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  // eslint-disable-next-line
  const [order, setOrder] = useState("");

  const paging = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="home_container">
      <Navbar />
      <div className="sort_filter_container">
        <div className="sort_filter">
          <Sort setCurrentPage={setCurrentPage} setOrder={setOrder} />
          <Filter />
        </div>
      </div>
      <Paging
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paging={paging}
      />
      <CardContainer currentDogs={currentDogs} />
    </div>
  );
};

export default Home;

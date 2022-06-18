import { useEffect, useState } from "react";
import "./index.css";
import { APPCard } from "../../components/card";
import { GiphyService } from "../../services/giphyService";
import { GIF } from "../../types";
import "./index.css";
import Loading from "../../components/loading";
import { AppModal } from "../../components/modal";
import { SearchBar } from "../searchBar";

function Home() {
  const [gifs, setGifs] = useState<Array<GIF>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isNextPageAvailable, setIsNextPageAvailable] = useState(true);
  const [isInSearchMode, setIsInSearchMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentGif, setCurrentGif] = useState<GIF | null>(null);

  useEffect(() => {
    setIsLoading(true);
    if (!isInSearchMode) {
      fetchTrendingGif();
    }
  }, [currentPage, isInSearchMode]);

  const fetchTrendingGif = () => {
    const giphyService = new GiphyService();
    giphyService
      .getTrending(currentPage)
      .then((response) => {
        if (response.data?.data) {
        
          setIsNextPageAvailable(
            response.data.pagination.total_count -
              response.data.pagination.offset >
              0
          );
          
        } else {
          setIsNextPageAvailable(false);
        }
      })
      .catch((error) => {
        console.log("error ==>", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

 const onClearText = () => {
   console.log('cleartext is called')
  fetchTrendingGif();
 }
  const onSearchSubmit = (searchText: string) => {
    const giphyService = new GiphyService();
    setIsLoading(true);
    if (searchText) {
      setIsInSearchMode(true);
    } else {
      setIsInSearchMode(false);
    }
    giphyService
      .search(searchText)
      .then((response) => {
        if (response.data?.data) {
          setGifs(response.data.data);
        }
      })
      .catch((error) => {
        console.log("onSearchSubmit ==>", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 20);
  };

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 20);
  };

  const handleShowModal = (gif: GIF) => {
    setCurrentGif(gif);
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };
  return (
    <div className="page-container">
      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={onClearText} />
      {!isLoading && (
        <div className="card-container">
          {gifs.map((gif) => (
            <div className="gif-item" key={gif.id}>
              <APPCard gif={gif} handleView={handleShowModal} />
            </div>
          ))}
        </div>
      )}
      {!isInSearchMode && !isLoading && (
        <div className="pagination container center">
          {currentPage > 19 && (
            <div
              onClick={onPreviousPage}
              className="pagination-item btn previous"
            >
              Previous
            </div>
          )}
          {isNextPageAvailable && (
            <div onClick={onNextPage} className="pagination-item btn next">
              Next
            </div>
          )}
        </div>
      )}
      {isLoading && <Loading />}
      <AppModal
        gif={currentGif}
        show={showModal}
        handleClose={handleHideModal}
      />
    </div>
  );
}

export default Home;

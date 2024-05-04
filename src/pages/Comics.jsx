/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import BookmarkContext from "../context/bookmarkProvider"

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const comicsPerPage = 100;

  const {
    dispatch,
  } = useContext(BookmarkContext);

  const setBookmark = (comic) => {
    let bookmark = {
      title: comic.title,
      thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      description: comic.description }
    return bookmark
  }

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(`https://site--marvel--gpvxp89pqghq.code.run/comics?page=${currentPage}`);
        const filteredComics = response.data.results.filter(comic => {
          return comic.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
                 comic.thumbnail.extension !== "gif";
        });
        setComics(filteredComics);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComics();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return isLoading ? (
    <div role="status" className="flex flex-col w-full h-screen justify-center items-center bg-black">
    <svg aria-hidden="true" class="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-[#128D3C]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
  ) : (
    <div className="bg-black flex flex-col">
       <p className="flex w-full justify-center my-10 text-[40px] font-bold">All Comics</p>
      <div className="flex flex-wrap justify-center gap-3 w-full p-10 pt-0">
        {comics.map((comic, index) => {
          let bookmark = setBookmark(comic)
          bookmark.id = index;
          console.log(bookmark);

          return (
            <div key={comic._id} className="mt-1 flex flex-col bg-white w-[30%] card-border transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-[99999]">
              <Link to={`/comic/${comic._id}`} state= {{ comic: comic }}>
                  <div className="w-full h-[250px] overflow-hidden relative"
                    onClick={() =>
                      dispatch({
                      type: 'ADD_TO_BOOKMARK',
                      payload: { bookmark },
                      })
                    }>
                    <div className="bg-black absolute">
                      <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >

                      <path
                        d="M14.65 8.93274L12.4852 4.30901C12.2923 3.89699 11.7077 3.897 11.5148 4.30902L9.35002 8.93274L4.45559 9.68243C4.02435 9.74848 3.84827 10.2758 4.15292 10.5888L7.71225 14.2461L6.87774 19.3749C6.80571 19.8176 7.27445 20.1487 7.66601 19.9317L12 17.5299L16.334 19.9317C16.7256 20.1487 17.1943 19.8176 17.1223 19.3749L16.2878 14.2461L19.8471 10.5888C20.1517 10.2758 19.9756 9.74848 19.5444 9.68243L14.65 8.93274Z"
                        stroke="#464455"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                    <img
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt={comic.name}
                      className="w-full h-full object-cover !rounded-lg !rounded-b-none"
                    />
                  </div>
                  <h1 className="text-lg p-5 !text-[#128D3C]">{comic.name}</h1>
                  <div className="text-gray-700 p-5 pt-0">
                    {comic.description ?
                    <div className="flex gap-1 items-start text-justify">
                      <p className="w-[90%]">
                      {comic.description}
                      </p>
                      </div> :
                    <p className="flex gap-3 items-center w-full justify-center !text-gray-500 !text-lg pt-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                      </svg>
                      No description available
                    </p>
                    }
              </div>
              </Link>
            </div>
        )
      }
        )}
      </div>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={comicsPerPage}
        totalItemsCount={1493}
        onChange={handlePageChange}
        itemClass="flex mr-3 !text-[#128D3C] font-bold text-[30px] transition-transform duration-300 ease-in-out transform hover:scale-110"
        linkClass="pagi-item p-3 mb-10 bg-gray-50"
        activeLinkClass="bg-[#128D3C]/10"
      />
    </div>
  );
};

export default Comics;

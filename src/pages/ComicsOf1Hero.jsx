import { useEffect, useState, useContext } from "react";
import axios from "axios";
import BookmarkContext from "../context/bookmarkProvider"
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const ComicsOf1Hero = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get('name');

  // Decode the URI component
  const decodedName = decodeURIComponent(name);
  console.log("==============",decodedName )
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams()

  const {
    state: { bookmarks },
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
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel--gpvxp89pqghq.code.run/comics/${id.characterId}`
        );

        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log({ message: error.message });
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <p> Chargement </p>
    // trouver une icone de chargement react a mettre ici
  ) : (
    <div className="bg-black flex flex-col">
      <p className="flex w-full justify-center my-10 text-[40px] font-bold">Comics of {decodedName}</p>
      <div className="flex flex-wrap justify-center gap-3 w-full p-10 pt-0">
        {data.comics.map((comic, index) => {
          let bookmark = setBookmark(comic)
          bookmark.id = index;

          return (
            <div key={comic._id} className="mt-1 flex flex-col bg-white w-[23%] card-border transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-[99999]">
              <div className=" overflow-hidden relative"
                onClick={() =>
                  dispatch({
                  type: 'ADD_TO_BOOKMARK',
                  payload: { bookmark },
                  })
                }
              >
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
                    alt={comic.title}
                    className="w-full h-full object-cover !rounded-lg !rounded-b-none"
                  />
              </div>
              <h1 className="text-lg p-5 !text-[#128D3C]">{comic.title}</h1>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComicsOf1Hero;

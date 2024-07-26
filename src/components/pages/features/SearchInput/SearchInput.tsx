import style from "./searchInput.module.scss";
import { useEffect, useState } from "react";
import { IMeal } from "../../../utils/interface/Meal";
import SearchItem from "../SearchItem/SearchItem";

interface ISearchInput {
  meals: IMeal[];
  setMealsFiltered: (meals: IMeal[]) => void;
}

const Searchİnput: React.FC<ISearchInput> = (props) => {
  const { meals, setMealsFiltered } = props;

  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<IMeal[]>([]);

  // ---------------------- search -----------------------------
  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (search.length > 0) {
      setSearchResult(
        meals.filter((meal) =>
          meal.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setSearchResult([]);
    }
    console.log(searchResult);
  };

  const searchHandle = () => {
    if (searchResult.length > 0) {
      setMealsFiltered(searchResult);
    }
    console.log(searchResult);
    setSearch("");
    setSearchResult([]);
  };

  const findHandle = (name: string) => {
    setMealsFiltered(meals.filter((meal) => meal.name === name));
    setSearch("");
    setSearchResult([]);
  };

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchHandle();
    }
  }

  // ---------------------- --- -----------------------------
  useEffect(() => {
    if (search.length === 0) {
      setSearchResult([]);
    }
  }, [search.length]);


  return (
    <div className={style.search}>
      <input
        type="text"
        placeholder="Search"
        id="search"
        autoComplete="off"
        onChange={searchChange}
        onKeyDown={keyPress}
        value={search}
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={searchHandle}
      >
        <path
          d="M7.66659 14.0002C11.1644 14.0002 13.9999 11.1646 13.9999 7.66683C13.9999 4.16903 11.1644 1.3335 7.66659 1.3335C4.16878 1.3335 1.33325 4.16903 1.33325 7.66683C1.33325 11.1646 4.16878 14.0002 7.66659 14.0002Z"
          stroke="#1A1C1E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6666 14.6668L13.3333 13.3335"
          stroke="#1A1C1E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div
        className={style.search_estimated}
        style={{
          display:
            search.length && searchResult.length > 0
              ? "block !important"
              : "none",
          borderBottom: search.length && searchResult.length > 0 ? "" : "none",
        }}
      >
        <div>
          {searchResult.map((meal) => (
            <SearchItem
              key={meal.id}
              name={meal.name}
              findHandle={findHandle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchİnput;

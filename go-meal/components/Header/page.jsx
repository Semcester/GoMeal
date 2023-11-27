import styles from "./search.module.css";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "@/redux/slices/searchSlice";
import Image from "next/image";
import { SearchService } from "@/services/searchService";
import { filterByInput } from "@/redux/slices/foodSlice";

export default function Header() {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const searchedFood = useSelector((state) => state.foods.filterByInput);
  const searchInput = useSelector((state) => state.searchInput);
  const [userName, setUserName] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (session) {
      const userName = session.session.user?.firstName;
      setUserName(userName);
    }
  }, [session]);

  useEffect(() => {
    if (searchInput) {
      setTimeout(() => {
        SearchService(searchInput).then((response) => {
          dispatch(filterByInput(response.data));
        });
      }, 300);
    }
  }, [searchInput]);

  const handleSearchInput = (input) => {
    dispatch(setSearchTerm(input));
  };
  const imgUrl = "https://static.smartlimon.com/";

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello, {userName}</h1>
      <div>
        <input
          type="search"
          placeholder={"What do you want eat today..."}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => handleSearchInput(e.target.value)}
        />
        {isFocused && (
          <div className={styles.seachFood}>
            {!searchedFood?.data && (
              <span className={styles.noFood}>Founded foods will be here</span>
            )}
            {searchedFood && (
              <div>
                {searchedFood.data.map((food) => {
                  return (
                    <div className={styles.suggestionContainer}>
                      <ul>
                        <li>
                          <Image
                            width={60}
                            height={50}
                            src={imgUrl + food.thumbnail}
                            alt={food.name}
                          />
                          <span>{food.name}</span>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

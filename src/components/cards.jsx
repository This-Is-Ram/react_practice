import { price } from "../App";
import seriesData from "../api/data.json";
import { ListCards } from "./list";
import styles from "../components/App.module.css";
import styled from "styled-components";

console.log(seriesData);
const Card = () => {
  // const Ram = styled.button({
  //   padding: "0.5rem",
  //   borderRadius: "0.5rem",
  //   marginTop: "1rem",
  //   outline: "none",
  //   border: "none",
  //   backgroundColor: `${(props) =>
  //     props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "black",
  //   "&:hover": {
  //     outline: "1px solid black",
  //     transform: "scale(1.019)",
  //   },
  // });

  const Ram = styled.button((props) => ({
    padding: "0.5rem",
    borderRadius: "0.5rem",
    marginTop: "1rem",
    outline: "none",
    border: "none",
    backgroundColor: props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f",
    color: "black",
    "&:hover": {
      outline: "1px solid black",
      transform: "scale(1.019)", // Use 'transform' for scaling
    },
  }));

  return (
    <>
      <h1 className={styles["margin-for-heading"]}>Top Playlist</h1>
      <ul className="grid grid-three-cols">
        {seriesData.map((curElem) => {
          const ratingClass =
            curElem.rating >= 8.5 ? styles.super_hit : styles.avarage;

          return (
            <li key={curElem.id} className={styles.card}>
              <div>
                <img width="200px" src={curElem.img_url} alt={curElem.name} />
              </div>
              <div className={styles.cardContent}>
                <h1 style={{ fontSize: "1.5rem" }}>{curElem.name}</h1>
                <p>
                  Rating :
                  <span className={`${styles.rating} ${ratingClass}`}>
                    {curElem.rating}
                  </span>
                </p>
                <p className="text-sm font-bold underline">
                  {curElem.description}
                </p>
                <a href={curElem.watch_url}>
                  <Ram rating={curElem.rating}>Watch Now</Ram>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Card;

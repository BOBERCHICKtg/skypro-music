"use client";

import classnames from "classnames";
import styles from "./centerblock.module.css";
import Search from "../Search/Search";
import { data } from "@/data";
import { getUniqueValuesByKey } from "../utils/helper";
import Track from "../Track/Track";
import { useState } from "react";

export default function CenterBlock() {
  const [filter, setFilter] = useState("");

  if (!data || data.length === 0) {
    return <div>Нет доступных треков</div>;
  }

  return (
    <div className={styles.centerblock}>
      <Search title="" />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <div className={styles.centerblock__filter}>
        <div className={styles.filter__title}>Искать по:</div>
        <div
          className={styles.filter__button}
          onClick={() => setFilter("artist")}
        >
          исполнителю
        </div>
        <div
          className={styles.filter__button}
          onClick={() => setFilter("year")}
        >
          году выпуска
        </div>
        <div
          className={styles.filter__button}
          onClick={() => setFilter("genre")}
        >
          жанру
        </div>
      </div>
      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div className={classnames(styles.playlistTitle__col, styles.col01)}>
            Трек
          </div>
          <div className={classnames(styles.playlistTitle__col, styles.col02)}>
            Исполнитель
          </div>
          <div className={classnames(styles.playlistTitle__col, styles.col03)}>
            Альбом
          </div>
          <div className={classnames(styles.playlistTitle__col, styles.col04)}>
            <svg className={styles.playlistTitle__svg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className={styles.content__playlist}>
          {data.map((track) => (
            <Track key={track._id} track={track} />
          ))}
        </div>
      </div>
    </div>
  );
}

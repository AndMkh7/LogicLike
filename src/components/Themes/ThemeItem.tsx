import React, { memo } from "react";
import { Theme } from "../../../types";
import styles from "./Themes.module.scss";
import SkeletonThemeItem from "./SkeletonThemeItem";
import { useThemeContext } from "../../context/context";
interface ThemeItemProps {
  item: Theme;
}

const ThemeItem: React.FC<ThemeItemProps> = ({ item }) => {
  const { isLoading } = useThemeContext();
  return isLoading ? (
    <SkeletonThemeItem />
  ) : (
    <div
      className={styles.themeItemContainer}
      style={{ backgroundColor: item.bgColor }}
    >
      <div className={styles.themeItemContent}>
        <img
          alt="chessItem"
          src={item.image}
          className={styles.themeItemImage}
        />
      </div>
      <div className={styles.themeItemFooter}>
        <div className={styles.themeItemNameContainer}>
          <span className={styles.themeItemName}>{item.name}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(ThemeItem);

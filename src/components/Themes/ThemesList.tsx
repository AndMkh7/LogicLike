import { memo, useEffect, useState } from "react";
import { useThemeContext } from "../../context/context";
import { useFetchFilteredThemesData } from "../../utils/fetchData";
import { Theme } from "../../../types";
import chunkArray from "../../utils/arrayUtils";
import styles from "./Themes.module.scss";
import ThemeItem from "./ThemeItem";

const ThemesList = () => {
  const { activeTag, setIsLoading } = useThemeContext();
  const [filteredData, setFilteredData] = useState<Theme[]>([]);
  const fetchFilteredThemesData = useFetchFilteredThemesData();
  useEffect(() => {
    const fetchDataAndSetState = async () => {
      setIsLoading(true);
      try {
        const filteredThemesData = await fetchFilteredThemesData(activeTag);
        setFilteredData(filteredThemesData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataAndSetState();
  }, [activeTag]);

  if (!filteredData) {
    return null;
  }
  return (
    <div className={styles.themesContainer}>
      <div className={styles.column}>
        {chunkArray(filteredData, 3).map((row, rowIndex) => (
          <div key={rowIndex} className={styles.themesListContainer}>
            {row.map((item) => (
              <ThemeItem key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ThemesList);

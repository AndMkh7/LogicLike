import { memo, useEffect, useMemo, useState } from "react";
import { useThemeContext } from "../../context/context";
import { useFetchAllThemes } from "../../utils/fetchData";
import { Theme } from "../../../types";
import chunkArray from "../../utils/arrayUtils";
import styles from "./Themes.module.scss";
import ThemeItem from "./ThemeItem";

const ThemesList = () => {
  const { activeTag, setIsLoading } = useThemeContext();
  const [allThemes, setAllThemes] = useState<Theme[]>([]);
  const fetchAllThemesNames = useFetchAllThemes();

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      setIsLoading(true);
      try {
        const themesData = await fetchAllThemesNames();
        setAllThemes(themesData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    };
    fetchDataAndSetState();
  }, [fetchAllThemesNames, setIsLoading]);

  const filteredData = useMemo(() => {
    if (!allThemes.length) return [];
    if (activeTag === "Все темы") return allThemes;
    return allThemes.filter((theme) => theme.tags.includes(activeTag));
  }, [allThemes, activeTag]);

  if (!filteredData.length) {
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

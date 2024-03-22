import { useEffect, useState, useCallback } from "react";
import styles from "./Sidebar.module.scss";
import { useThemeContext } from "../../context/context";
import SidebarItem from "./SidebarItem";
import { useFetchAllThemesNames } from "../../utils/fetchData";

const SidebarList = () => {
  const [themesNames, setThemesNames] = useState<string[]>([]);
  const { setIsLoading, handleOnTagClick } = useThemeContext();
  const fetchAllThemesNames = useFetchAllThemesNames();
  const memoizedHandleOnTagClick = useCallback(
    (themeName: string) => {
      handleOnTagClick(themeName);
    },
    [handleOnTagClick]
  );

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      setIsLoading(true);
      try {
        const allThemesNames = await fetchAllThemesNames();
        setThemesNames(allThemesNames);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndSetState();
  }, []);

  return (
    <div className={styles.sidebarList}>
      {themesNames.map((themeName) => (
        <SidebarItem
          key={themeName}
          themeName={themeName}
          handleOnTagClick={memoizedHandleOnTagClick}
        />
      ))}
    </div>
  );
};

export default SidebarList;

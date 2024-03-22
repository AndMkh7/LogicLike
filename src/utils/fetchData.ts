import { useCallback } from "react";
import { Theme } from "../../types";
import { URL } from "../constants/url";

export const useFetchAllThemesNames = () => {
  const fetchAllThemesNames = useCallback(async (): Promise<string[]> => {
    try {
      const response = await fetch(URL);
      const themesData: Theme[] = await response.json();
      const allTags = themesData.flatMap((theme) => theme.tags);
      const uniqueTags = Array.from(new Set(allTags));
      const allThemesNames = ["Все темы", ...uniqueTags];
      return allThemesNames;
    } catch (error) {
      console.error("Error loading data:", error);
      return [];
    }
  }, []);

  return fetchAllThemesNames;
};

export const useFetchFilteredThemesData = () => {
  const fetchFilteredThemesData = useCallback(
    async (activeTag: string): Promise<Theme[]> => {
      try {
        const response = await fetch(URL);
        const themesData: Theme[] = await response.json();
        const filteredThemesData = themesData.filter((theme) => {
          if (activeTag === "Все темы") {
            return true;
          }
          return theme.tags.includes(activeTag);
        });
        return filteredThemesData;
      } catch (error) {
        console.error("Error loading data:", error);
        return [];
      }
    },
    []
  );

  return fetchFilteredThemesData;
};

import {useCallback} from "react";
import {Theme} from "../../types";
import {URL} from "../constants/url";

export const useFetchAllThemes = () => {
  return useCallback(async (): Promise<Theme[]> => {
    try {
      const response = await fetch(URL);
      return await response.json();
    } catch (error) {
      console.error("Error loading data:", error);
      return [];
    }
  }, []);
};

export const useFetchAllThemesNames = () => {
  return useCallback(async (): Promise<string[]> => {
    try {
      const response = await fetch(URL);
      const themesData: Theme[] = await response.json();
      const allTags = themesData.flatMap((theme) => theme.tags);
      const uniqueTags = Array.from(new Set(allTags));
      return ["Все темы", ...uniqueTags];
    } catch (error) {
      console.error("Error loading data:", error);
      return [];
    }
  }, []);
};
import React, { memo } from "react";
import styles from "./Sidebar.module.scss";
import { useThemeContext } from "../../context/context";
import SkeletonSidebarItem from "./SkeletonSidebarItem";

interface SidebarItemProps {
  themeName: string;
  handleOnTagClick: (themeName: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  themeName,
  handleOnTagClick,
}) => {
  const { activeTag, isLoading } = useThemeContext();
  return isLoading ? (
    <SkeletonSidebarItem />
  ) : (
    <div
      className={`${styles.sidebarListItem} ${
        themeName === activeTag ? styles.active : ""
      }`}
      onClick={() => {
        handleOnTagClick(themeName);
      }}
    >
      <p className={styles.sidebarListItemText}>{themeName}</p>
    </div>
  );
};

export default memo(SidebarItem);

import React, { memo, useCallback, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p
        className={styles.sidebarListItemText}
        style={{ color: isHovered ? "#5FBF77" : "" }}
      >
        {themeName}
      </p>
    </div>
  );
};

export default memo(SidebarItem);

import { useCallback, useState } from "react";
import Category from "../category";
import SubCategory from "../sub-category";
import { ExpandableContainer, ItemList, SidebarContainer } from "./components";
import { useCategories } from "../../hooks/useCategories";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { categories, category, onSelectCategory } = useCategories();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const onSidebarItemClick = useCallback((id) => {
    onSelectCategory(id);
    setIsSidebarOpen(true);
  }, []);

  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <ItemList
        items={categories}
        onClick={onSidebarItemClick}
        selectedItem={category?.id}
      />
      <ExpandableContainer isOpen={isSidebarOpen} onClick={toggleSidebar}>
        <Category categoryId={category?.id} />
      </ExpandableContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

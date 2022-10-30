import { useState } from "react";
import { Container, TopActions, BottomActions, MobileMenu } from "./components";
import Category from "../category";
import { useCategories } from "../../hooks/useCategories";

const Content = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { categories, category, onSelectCategory } = useCategories();

  const onSelectTopActionCategory = (id) => {
    setIsMenuOpen(true);
    onSelectCategory(id);
  };
  return (
    <Container>
      <TopActions
        categories={categories}
        onSelectCategory={onSelectTopActionCategory}
      />
      <BottomActions />
      {isMenuOpen && (
        <MobileMenu>
          <Category
            categoryId={category?.id}
            withCloseIcon
            onCloseIconClick={() => setIsMenuOpen(false)}
          />
        </MobileMenu>
      )}
    </Container>
  );
};

export default Content;

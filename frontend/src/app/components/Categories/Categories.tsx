import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/categoriesSlice";
import { RootState, AppDispatch } from "../../store/index";
import Link from "next/link";

const Categories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, isLoading } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  if (isLoading) {
    return <p>Carregando categorias...</p>;
  }

  return (
    <nav>
      <ul className="flex gap-12">
        {categories.map((category) => (
          <li key={category.id} className="hover:cursor-pointer text-base hover:font-bold duration-300 ease-in-out">
            <Link href={`/categoria/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
import { useEffect, useState } from "react";
import Link from "next/link";

type Category = {
    id: number,
    name: string,
    slug: string
}

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const res = await fetch("http://localhost:3000/categories");
          const data = await res.json();
          setCategories(data.sort((a: Category, b: Category) => a.id - b.id));
        } catch (error) {
          console.error("Erro ao buscar categorias:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchCategories();
    }, []);
  
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
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Category = {
  id: number;
  name: string;
  slug: string;
};

type CategoriesState = {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
};

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { getState }) => {
    const state = getState() as { categories: CategoriesState };
    if (state.categories.categories.length > 0) {
      return state.categories.categories;
    }
    
    const response = await fetch("http://localhost:3000/categories");
    return await response.json();
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload.sort((a: Category, b: Category) => a.id - b.id);
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Erro ao carregar categorias";
      });
  },
});

export default categoriesSlice.reducer;

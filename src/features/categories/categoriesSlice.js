import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../../redux/status";

// Create an entity adapter for categories
const categoriesAdapter = createEntityAdapter({
    selectId: (category) => category._id, // Assuming categories have a unique '_id' field
});

// Initial state using the adapter's getInitialState
const initialState = categoriesAdapter.getInitialState({
    status: INITIAL_STATE, // Initial status (could be 'idle', 'loading', etc.)
});

// Category slice
export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        // Reducer to update the status
        categoriesStatus(state, action) {
            state.status = action.payload;
        },
        // Add many categories at once
        categoriesAddMany: categoriesAdapter.addMany,
        // Add one category
        categoriesAddOne: categoriesAdapter.addOne,
        categoriesDeleteOne: categoriesAdapter.removeOne,
    },
});

// Export the actions
export const {
    categoriesAddMany,
    categoriesAddOne,
    categoriesStatus,
    categoriesDeleteOne,
} = categoriesSlice.actions;

// Export the reducer
export default categoriesSlice.reducer;

// Export the selectors using the adapter's getSelectors
export const {
    selectAll: selectCategories,
    selectById: selectCategoryById,
} = categoriesAdapter.getSelectors((state) => state.categories);

// Custom selector to get all category IDs
export const selectCategoriesIds = createSelector(
    selectCategories,
    (categories) => categories.map((category) => category._id)
);

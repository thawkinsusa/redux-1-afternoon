import { createStore } from "redux";

const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
};


export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_A_FIRST = 'UPDATE_A_FIRST'
export const UPDATE_A_LAST = 'UPDATE_A_LAST'
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";

export const UPDATE_RECIPE = 'UPDATE_RECIPE'

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_NAME:
            return { ...state, name: payload };
        case UPDATE_CATEGORY:
            return { ...state, category: payload };
        case UPDATE_A_FIRST:
            return { ...state, authorFirst: payload };
        case UPDATE_A_LAST:
            return { ...state, authorLast: payload };
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, payload];
            return { ...state, ingredients: newIngredients };
        case ADD_INSTRUCTION:
            const newInstructions = [...state.instructions, payload];
            return { ...state, instructions: newInstructions };
        case UPDATE_RECIPE:
            const {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            } = state;
            const recipe = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            };
            const newRecipes = [...state.recipes, recipe];
            return { ...state, recipes: newRecipes };
        default:
            return state;
    }
}


export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

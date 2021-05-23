export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories,
  };
}

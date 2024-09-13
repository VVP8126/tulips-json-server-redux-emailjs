import axios from 'axios';

// Tulip requests
export const fetchAllTulips = async () => {
  const tulips = await axios.get('http://localhost:3001/tulips/');
  return tulips;
};
export const fetchTulipById = async (id) => {
  const tulips = await axios.get(`http://localhost:3001/tulips/${id}`);
  return tulips;
};

// Block 'Cart requests' - not used
/** 
export const fetchCart = async () => {
  const cart = await axios.get('http://localhost:3001/cart/');
  return cart;
};
export const addCart = async (tulip) => {
  const cart = await axios.post('http://localhost:3001/cart/', tulip);
  return cart;
};
export const deleteCart = async (id) => {
  const cart = await axios.delete(`http://localhost:3001/cart/${id}`);
  return cart;
};
export const updateCart = async (id) => {
  const cart = await axios.delete(`http://localhost:3001/cart/${id}`);
  return cart;
};
*/
// End of Block 'Cart requests'

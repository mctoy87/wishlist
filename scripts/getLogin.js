import { API_URL } from "./const.js";

export const getLogin = async (token) => {
  try {
    const response = await fetch(`${API_URL}/getLogin`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,        
      },
    });

    const data = await response.json();
    console.log('data: ', data);
    
    return data;
  } catch (err) {
    console.err(err);
  };
};
import axios from 'axios';

const BASE_URL = 'YOUR_API_BASE_URL';

export const postBookSchedule = async (scheduleData) => {
  try {
    const response = await axios.post(`${BASE_URL}/book-schedule`, scheduleData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getBinLevel = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/bin-level`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };
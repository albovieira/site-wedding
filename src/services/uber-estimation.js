import axios from 'axios';
import config from '@/config/settings';
import { buildQuery } from './util';

async function getUberEstimation(start, end) {
  const query = buildQuery({
    start_latitude: start.lat,
    start_longitude: start.lng,
    end_latitude: end.lat,
    end_longitude: end.lng
  });
  const url = `${config.uber.endpoint}?${query}`;
  const uber = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${config.uber.token}`
    }
  });

  const res = await uber.get();
  return res.data.prices;
}
export default getUberEstimation;

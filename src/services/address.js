import axios from 'axios';
import config from '@/config/settings';

const apis = {
  geocode: 'geocode',
  directions: 'directions'
};
const baseUrl = api => `${config.google.maps}${api}/json`;

async function getCoordinates(type, value) {
  const url = `${baseUrl(apis['geocode'])}?key=${
    config.google.key
  }&${type}=${value}`;
  const mapsApi = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });
  const response = await mapsApi.get();
  return response.data.results[0];
}

function decode(t, e) {
  for (
    let n,
      o,
      u = 0,
      l = 0,
      r = 0,
      d = [],
      h = 0,
      i = 0,
      a = null,
      c = Math.pow(10, e || 5); u < t.length;

  ) {
    (a = null), (h = 0), (i = 0);
    do(a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
    do(a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (o = 1 & i ? ~(i >> 1) : i >> 1),
    (l += n),
    (r += o),
    d.push([l / c, r / c]);
  }
  return (d = d.map(function (t) {
    return {
      latitude: t[0],
      longitude: t[1]
    };
  }));
}

async function getCoordinatesFromAddress(address) {
  const result = await getCoordinates('address', address);
  return result.geometry.location;
}

async function drawRoute(origin, destination) {
  const url = `${baseUrl(apis['directions'])}?key=${
    config.google.key
  }&mode=driving&origin=${origin.lat},${origin.lng}&destination=${
    destination.lat
  },${destination.lng}`;

  const mapsApi = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
  const response = (await mapsApi.get()).data;
  const coords = decode(response.routes[0].overview_polyline.points);
  return coords;
}

export {
  drawRoute,
  getCoordinatesFromAddress
};

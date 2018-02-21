import _ from 'lodash';

function buildQuery(filters) {
  let query = '';
  _.each(filters, (value, key) => {
    query += `&${key}=${value}`;
  });
  return query;
}

function removeSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '').trim();
}

export { buildQuery, removeSpecialChars };

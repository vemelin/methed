export const getData = async () => await(await fetch('./js/date.json')).json();

export const fetchRequest = async (url, {
  method = 'get',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    };
    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      if(callback) callback(null, data);
      return;
    }
    throw new Error(`Error: ${response.statusText}`);
  } catch (error) {
    callback(error);
  }
};
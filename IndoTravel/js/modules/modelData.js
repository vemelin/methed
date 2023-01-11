export const getData = async () => await(await fetch('./js/date.json')).json();

// Modal Trip Styles
const styles = new Map();

export const modalTripStyles = (url) => {
  if (styles.has(url)) {
    return styles.get(url);
  }
  const getStyle = new Promise (resolve => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.addEventListener('load', () => {
      resolve();
    });
    document.head.append(link);
  });
  styles.set(url, getStyle);
  return getStyle;
};

// Get data
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
      console.log(data);
      return;
    }
    throw new Error(`Error: ${response.statusText}`);
  } catch (error) {
    callback(error);
  }
};
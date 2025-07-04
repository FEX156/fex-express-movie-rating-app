const pick = (obj, keys) =>
  keys.reduce((res, key) => {
    if (key in obj) res[key] = obj[key];
    return res;
  }, {});

export { pick };

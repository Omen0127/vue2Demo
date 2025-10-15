const storageType = "sessionStorage";
const storageInstanceMap = {
  localStorage,
  sessionStorage,
};
const storage = {
  getItem: (key, type = storageType) => {
    console.log(storageInstanceMap[type]);
    return storageInstanceMap[type].getItem(key);
  },
  setItem: (key, value, type = storageType) => {
    return storageInstanceMap[type].setItem(key, value);
  },
  removeItem: (key, type = storageType) => {
    return storageInstanceMap[type].removeItem(key);
  },
};
export default storage;

export const SELECTED_THEME_ID = "SELECTED_THEME_ID";
export const LEVEL_MODIFIER = "LEVEL_MODIFIER";

export const WRITE_JSON = (key, data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  }
};

export const READ_JSON = (key, defaultData) => {
  if (typeof window !== "undefined") {
    let data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return defaultData;
    }
  }
};

export class LocalStorageManager {
  static saveTulips(tulips, key) {
    const tulipsString = JSON.stringify(tulips);
    localStorage.setItem(key, tulipsString);
  }

  static loadTulips(key) {
    const jsonData = localStorage.getItem(key);
    if (jsonData) {
      return JSON.parse(jsonData);
    }
    return [];
  }

  static saveNumber(num, key) {
    localStorage.setItem(key, num);
  }

  static loadNumber(key) {
    const data = localStorage.getItem(key);
    if (data) {
      return Number(data);
    }
    return 0;
  }
}

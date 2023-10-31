export default class Utils {
  static getBaseUrl() {
    switch (process.env.NODE_ENV) {
      case "DEV":
        return "https://serverest.dev";
        break;
      case "LOCAL":
          return "http://localhost:8080";
        break;
      default:
        return "http://localhost:8080";
    }
  }
}

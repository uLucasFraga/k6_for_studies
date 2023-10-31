export default class Utils {
  static getBaseUrl() {
    switch (process.env.NODE_ENV) {
      case "DEV":
        return "https://serverest.dev";
      case "LOCAL":
        return "http://localhost:3000";
      default:
        return "http://localhost:3000";
    }
  }
}

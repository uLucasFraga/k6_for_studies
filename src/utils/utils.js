export default class Utils {
  static getBaseUrl() {
    switch (process.env.NODE_ENV) {
      case "DEV":
        return "https://serverest.dev";
      case "LOCAL":
        return "http://localhost:3200";
      default:
        return "http://serverest:3000";
    }
  }
}

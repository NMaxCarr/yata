type DataStorageService = Storage;

// TODO should return a polymorph class which abstract the service it calls
// TODO shouldn't use localstorage to store object data
function getDataService(): DataStorageService {
  //   if (
  //     typeof window.localStorage !== "undefined" &&
  //     window.localStorage != null
  //   ) {
  return localStorage;
  //   }
}

export default getDataService;

import ConfigLoaderService from "../../config/ConfigLoaderService";
import { ConfigTestData } from './ConfigTestData';


describe("/config/ConfigLoaderService", () => {
  let fetchMock, localStorageMock, errorMock;
  

  beforeEach(() => {
    fetchMock = jest.spyOn(global, ConfigTestData.FETCH);
    fetchMock.mockReset();

    localStorageMock = jest.spyOn(window.localStorage.__proto__, ConfigTestData.SET_ITEM);
    localStorageMock.mockReset();
    errorMock = jest.spyOn(console, ConfigTestData.ERROR);
    errorMock.mockReset();
  });

  it("fetches the config.json file", async () => {
    fetchMock.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve({ BACKEND_URL: ConfigTestData.MY_BACKEND }),
      })
    );
    await ConfigLoaderService();
    expect(fetchMock).toHaveBeenCalledWith(ConfigTestData.CONFIG_JSON);
  });

  it("sets BACKEND_URL in localStorage", async () => {
    fetchMock.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve({ BACKEND_URL: ConfigTestData.MY_BACKEND }),
      })
    );

    await ConfigLoaderService();
    expect(localStorageMock).toHaveBeenCalledWith(ConfigTestData.BACKEND_URL, ConfigTestData.MY_BACKEND);
  });

  it("sets BACKEND_URL in localStorage", async () => {
    fetchMock.mockReturnValue(Promise.reject({}));

    await ConfigLoaderService();
    expect(errorMock).toHaveBeenCalledWith(ConfigTestData.CONFIG_CANT_BE_LOADED);
  });
});

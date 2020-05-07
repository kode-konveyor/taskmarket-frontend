import ConfigLoaderService from "../../config/ConfigLoaderService";

describe("/config/ConfigLoaderService", () => {
  let fetchMock, localStorageMock, errorMock;
  const MY_BACKEND = "http://market.kodekonveyor.com";

  beforeEach(() => {
    fetchMock = jest.spyOn(global, "fetch");

    localStorageMock = jest.spyOn(window.localStorage.__proto__, "setItem");
    errorMock = jest.spyOn(console, "error");
  });

  it("fetches the config.json file", async () => {
    fetchMock.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve({ BACKEND_URL: MY_BACKEND }),
      })
    );
    await ConfigLoaderService();
    expect(fetchMock).toHaveBeenCalledWith("/config.json");
  });

  it("sets BACKEND_URL in localStorage", async () => {
    fetchMock.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve({ BACKEND_URL: MY_BACKEND }),
      })
    );

    await ConfigLoaderService();
    expect(localStorageMock).toHaveBeenCalled();
  });

  it("sets BACKEND_URL in localStorage", async () => {
    fetchMock.mockReturnValue(Promise.reject({}));

    await ConfigLoaderService();
    expect(errorMock).toHaveBeenCalledWith("Config can't be loaded");
  });
});

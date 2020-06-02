import ConfigLoaderService from "../../config/ConfigLoaderService";

describe("/config/ConfigLoaderService", () => {
  let fetchMock, localStorageMock, errorMock;
  const MY_BACKEND = "http://market.kodekonveyor.com";

  beforeEach(() => {
    fetchMock = jest.spyOn(global, "fetch");
    fetchMock.mockReset();

    localStorageMock = jest.spyOn(window.localStorage.__proto__, "setItem");
    localStorageMock.mockReset();
    errorMock = jest.spyOn(console, "error");
    errorMock.mockReset();
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
    expect(localStorageMock).toHaveBeenCalledWith("BACKEND_URL", MY_BACKEND);
  });

  it("sets BACKEND_URL in localStorage", async () => {
    fetchMock.mockReturnValue(Promise.reject({}));

    await ConfigLoaderService();
    expect(errorMock).toHaveBeenCalledWith("Config can't be loaded");
  });
});

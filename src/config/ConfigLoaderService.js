export default async function ConfigLoaderService() {
  await fetch("/config.json")
    .then((response) => {
      response.json().then((json) => {
        for (const key in json) {
          localStorage.setItem(key, json[key]);
        }
      });
    })
    .catch(() => console.error("Config can't be loaded"));
}

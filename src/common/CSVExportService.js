export default function CSVExportService(data, order) {
  const createMapper = (order) => (element) =>
    order.map((field) => element[field]).join(",");
  return data.map(createMapper(order)).join("\r\n");
}

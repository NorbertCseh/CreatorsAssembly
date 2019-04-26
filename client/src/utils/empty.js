const Empty = input =>
  input === undefined ||
  input === null ||
  (typeof input === "object" && Object.keys(input).length === 0) ||
  (typeof input === "string" && input.length === 0);

export default Empty;

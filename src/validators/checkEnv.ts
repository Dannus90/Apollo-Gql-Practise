const { BASE_URL } = process.env;

if (!BASE_URL) {
  throw new Error("Env for base url missing")
}

export {
  BASE_URL
}
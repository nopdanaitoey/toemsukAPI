import * as crypto from "crypto";

export default function signRequest(
  parameters: Record<string, string>,
  body: string | null,
  appSecret: string,
  signMethod: string,
  apiName: string
) {
  const sortedParams = Object.keys(parameters).sort();

  // Second: Concatenate all params with key order
  let query = apiName;
  for (const key of sortedParams) {
    if (parameters[key]) {
      query += key + parameters[key];
    }
  }

  // Third: Add the body to the end
  if (body) {
    query += body;
  }

  // Next: Sign the string
  let bytes;
  if (signMethod === "sha256") {
    const hmac = crypto.createHmac("sha256", appSecret);
    bytes = hmac.update(query, "utf8").digest();
  }

  // Finally: Transfer binary bytes to hex string
  let result: string = "";
  if (bytes) {
    // Finally: Transfer binary bytes to hex string
    for (let i = 0; i < bytes.length; i++) {
      result += bytes[i].toString();
    }
    return result;
  } else {
    // Handle the case where bytes is undefined or null
    throw new Error("Failed to compute HMAC");
  }
}

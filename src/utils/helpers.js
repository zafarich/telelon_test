export function getServerError({ response }, field = "errorCode") {
  if (!response) return "";
  return response?.data?.error?.[field] || "Server bo'sh xabar qaytardi";
}

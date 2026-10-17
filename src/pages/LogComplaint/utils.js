import { FIELD_ALIASES, CATEGORY_OPTIONS } from "./constants";

export const pad = (n) => String(n).padStart(2, "0");

export const normalizeKey = (key) =>
  String(key)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

export const isEmpty = (v) =>
  v === null || v === undefined || (typeof v === "string" && v.trim() === "");

export function collectFields(node, out = {}, depth = 0) {
  if (!node || typeof node !== "object" || Array.isArray(node) || depth > 3) return out;
  Object.entries(node).forEach(([k, v]) => {
    if (v && typeof v === "object" && !Array.isArray(v)) {
      collectFields(v, out, depth + 1);
    } else {
      const nk = normalizeKey(k);
      if (isEmpty(out[nk]) && !isEmpty(v)) out[nk] = v;
    }
  });
  return out;
}

export function toInputDate(value) {
  const s = String(value).trim();
  let m = s.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (m) return `${m[1]}-${pad(m[2])}-${pad(m[3])}`;
  m = s.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
  if (m) return `${m[3]}-${pad(m[2])}-${pad(m[1])}`;
  const d = new Date(s);
  if (!isNaN(d.getTime())) {
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }
  return "";
}

export function toCategory(value) {
  const s = String(value).trim().toLowerCase();
  const exact = CATEGORY_OPTIONS.find((o) => o.toLowerCase() === s);
  if (exact) return exact;
  const partial = CATEGORY_OPTIONS.find((o) => s.includes(o.toLowerCase()));
  return partial || "Other";
}

export function coerce(field, value) {
  if (Array.isArray(value)) value = value.join(", ");
  switch (field) {
    case "manufacturing_date":
    case "expiry_date":
      return toInputDate(value);
    case "affected_quantity":
      return String(value).replace(/[^\d.]/g, "");
    case "complaint_category":
      return toCategory(value);
    default:
      return String(value);
  }
}

export function mapResponseToForm(data) {
  const flat = collectFields(data);
  const updates = {};
  Object.entries(FIELD_ALIASES).forEach(([field, aliases]) => {
    for (const alias of aliases) {
      if (!isEmpty(flat[alias])) {
        const v = coerce(field, flat[alias]);
        if (v !== "") {
          updates[field] = v;
          break;
        }
      }
    }
  });
  return updates;
}
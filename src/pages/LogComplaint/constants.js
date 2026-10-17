
export const EMPTY_FORM = {
  complaint_source: "",
  customer_name: "",
  product_name: "",
  product_strength: "",
  batch_lot_number: "",
  affected_quantity: "",
  manufacturing_date: "",
  expiry_date: "",
  origination_site_block: "",
  impacted_non_product_materials: "",
  complaint_category: "",
  complaint_description: "",
  severity: "",
  suggested_next_action: "",
  initial_risk_assessment: "",
};

export const FIELD_ALIASES = {
  complaint_source: ["complaint_source", "source"],
  customer_name: ["customer_name", "customer"],
  product_name: ["product_name", "product", "product_name_api_fdf"],
  product_strength: ["product_strength", "strength"],
  batch_lot_number: ["batch_lot_number", "batch_number", "lot_number", "batch_lot", "batch", "lot"],
  affected_quantity: ["affected_quantity", "quantity"],
  manufacturing_date: ["manufacturing_date", "manufacture_date", "mfg_date", "mfg"],
  expiry_date: ["expiry_date", "expiration_date", "exp_date", "expiry"],
  origination_site_block: ["origination_site_block", "origination_site", "site_block", "site"],
  impacted_non_product_materials: ["impacted_non_product_materials", "impacted_npm", "non_product_materials", "npm"],
  complaint_category: ["complaint_category", "category"],
  complaint_description: ["complaint_description", "description"],
  severity: ["severity", "suggested_severity"],
  suggested_next_action: ["suggested_next_action", "next_action", "suggested_action"],
  initial_risk_assessment: ["initial_risk_assessment", "risk_assessment"],
};

export const CATEGORY_OPTIONS = ["Packaging", "Quality", "Delivery", "Other"];
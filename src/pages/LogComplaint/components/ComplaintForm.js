import React from "react";

export default function ComplaintForm({ formData, onChange, onSubmit }) {
  return (
    <div className="col-lg-8 col-md-7 col-sm-12 d-flex flex-column lc-left">
      <div className="card lc-card lc-form-card">
        <div className="card-header lc-card-header">
          <h4>Log Customer Complaint</h4>
        </div>
        <div className="card-body lc-card-body">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Complaint Source</label>
                <input
                  type="text"
                  name="complaint_source"
                  value={formData.complaint_source}
                  onChange={onChange}
                  className="form-control lc-input"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Customer Name</label>
                <input
                  type="text"
                  name="customer_name"
                  value={formData.customer_name}
                  onChange={onChange}
                  className="form-control lc-input"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Product Name (API/FDF)</label>
                <input
                  type="text"
                  name="product_name"
                  value={formData.product_name}
                  onChange={onChange}
                  className="form-control lc-input"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Product Strength</label>
                <input
                  type="text"
                  name="product_strength"
                  value={formData.product_strength}
                  onChange={onChange}
                  className="form-control lc-input"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Batch / Lot Number</label>
                <input
                  type="text"
                  name="batch_lot_number"
                  value={formData.batch_lot_number}
                  onChange={onChange}
                  className="form-control lc-input"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Affected Quantity</label>
                <input
                  type="number"
                  name="affected_quantity"
                  value={formData.affected_quantity}
                  onChange={onChange}
                  className="form-control lc-input"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Manufacturing Date</label>
                <input
                  type="date"
                  name="manufacturing_date"
                  value={formData.manufacturing_date}
                  onChange={onChange}
                  className="form-control lc-input"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Expiry Date</label>
                <input
                  type="date"
                  name="expiry_date"
                  value={formData.expiry_date}
                  onChange={onChange}
                  className="form-control lc-input"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Origination Site Block</label>
                <input
                  type="text"
                  name="origination_site_block"
                  value={formData.origination_site_block}
                  onChange={onChange}
                  className="form-control lc-input"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Impacted Non-Product Materials (NPM)</label>
                <input
                  type="text"
                  name="impacted_non_product_materials"
                  value={formData.impacted_non_product_materials}
                  onChange={onChange}
                  className="form-control lc-input"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Complaint Category</label>
                <select
                  name="complaint_category"
                  value={formData.complaint_category}
                  onChange={onChange}
                  className="form-select lc-input"
                >
                  <option value="">Select Category</option>
                  <option value="Packaging">Packaging</option>
                  <option value="Quality">Quality</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Complaint Description</label>
                <textarea
                  name="complaint_description"
                  value={formData.complaint_description}
                  onChange={onChange}
                  className="form-control lc-input"
                  rows="3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action summary card */}
      <div className="card lc-card lc-actions-card mt-3">
        <div className="card-body lc-card-body">
          <div className="row">
            <div className="col-md-5 mb-3">
              <label className="form-label">Severity (suggested)</label>
              <input
                type="text"
                name="severity"
                value={formData.severity}
                onChange={onChange}
                className="form-control lc-input"
                placeholder="Critical / Major / Minor"
              />
            </div>
            <div className="col-md-7 mb-3">
              <label className="form-label">Suggested Next Action</label>
              <input
                type="text"
                name="suggested_next_action"
                value={formData.suggested_next_action}
                onChange={onChange}
                className="form-control lc-input"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Initial Risk Assessment</label>
            <textarea
              name="initial_risk_assessment"
              value={formData.initial_risk_assessment}
              onChange={onChange}
              className="form-control lc-input"
              rows="2"
            />
          </div>
          <button className="btn lc-btn w-100" onClick={onSubmit}>
            Store Complaint
          </button>
        </div>
      </div>
    </div>
  );
}
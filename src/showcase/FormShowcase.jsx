import { Grid } from "@mui/material";
import { MpCard, MpForm } from "../components";

export default function FormShowcase() {
  return (
    <Grid item xs={12} md={6}>
      <MpCard title="Form (react-hook-form)">
        <MpForm
          defaultValues={{ fullName: "", email: "", country: "", agree: false }}
          fields={[
            {
              name: "fullName",
              label: "Full Name",
              type: "text",
              placeholder: "John Doe",
              rules: { required: "Name is required" },
            },
            {
              name: "email",
              label: "Email",
              type: "email",
              placeholder: "john@example.com",
              rules: {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              },
            },
            {
              name: "country",
              label: "Country",
              type: "select",
              placeholder: "Select a country",
              options: [
                { value: "us", label: "United States" },
                { value: "uk", label: "United Kingdom" },
                { value: "ca", label: "Canada" },
              ],
              rules: {
                required: "Country is required",
              },
            },
            {
              name: "agree",
              label: "I agree to the terms and conditions",
              type: "checkbox",
              rules: { required: "You must agree to continue" },
            },
          ]}
          onSubmit={(data) => {
            alert(JSON.stringify(data, null, 2));
          }}
          submitLabel="Submit Form"
        />
      </MpCard>
    </Grid>
  );
}

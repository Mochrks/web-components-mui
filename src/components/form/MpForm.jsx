"use client";

import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { Stack } from "@mui/material";
import MpInput from "../ui/MpInput";
import MpSelect from "../ui/MpSelect";
import MpCheckbox from "../ui/MpCheckbox";
import MpButton from "../ui/MpButton";

export default function MpForm({ fields, onSubmit, defaultValues = {}, submitLabel = "Submit" }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        {fields.map((field) => (
          <Controller
            key={field.name}
            name={field.name}
            control={control}
            rules={field.rules}
            render={({ field: { onChange, value } }) => {
              if (field.type === "select" && field.options) {
                return (
                  <MpSelect
                    label={field.label}
                    value={value || ""}
                    onChange={onChange}
                    options={field.options}
                    error={!!errors[field.name]}
                    helperText={errors[field.name]?.message}
                    required={!!field.rules?.required}
                  />
                );
              }

              if (field.type === "checkbox") {
                return (
                  <MpCheckbox
                    label={field.label}
                    checked={!!value}
                    onChange={onChange}
                    error={!!errors[field.name]}
                    helperText={errors[field.name]?.message}
                    required={!!field.rules?.required}
                  />
                );
              }

              return (
                <MpInput
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={value || ""}
                  onChange={onChange}
                  error={!!errors[field.name]}
                  helperText={errors[field.name]?.message}
                  required={!!field.rules?.required}
                />
              );
            }}
          />
        ))}
        <MpButton type="submit" fullWidth disabled={!isValid || !isDirty}>
          {submitLabel}
        </MpButton>
      </Stack>
    </form>
  );
}

MpForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["text", "email", "password", "number", "select", "checkbox"])
        .isRequired,
      placeholder: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
      rules: PropTypes.object,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
  submitLabel: PropTypes.string,
};

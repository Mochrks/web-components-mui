import { useState } from "react";
import { Grid } from "@mui/material";
import { MpCard, MpAutocomplete } from "../components";

const autocompleteOptions = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

export default function AutocompleteShowcase() {
  const [autocompleteValue, setAutocompleteValue] = useState("");

  return (
    <Grid item xs={12} md={6}>
      <MpCard title="Autocomplete">
        <MpAutocomplete
          label="Select Fruit"
          placeholder="Type to search..."
          options={autocompleteOptions}
          value={autocompleteValue}
          onChange={(_, newValue) => setAutocompleteValue(newValue)}
        />
      </MpCard>
    </Grid>
  );
}

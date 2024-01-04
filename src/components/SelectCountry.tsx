import { Autocomplete, Grid, Skeleton, TextField } from "@mui/material";

export const SelectCountry = ({
  selectLabel,
  options,
  value,
  setValue,
  loaded,
}: {
  selectLabel: string;
  options: Array<string>;
  value: string;
  setValue: any;
  loaded: boolean;
}) => {
  if (loaded) {
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant="rounded" height={60} />
      </Grid>
    );
  }

  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={value}
        disableClearable
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={options}
        renderInput={(params) => <TextField {...params} label={selectLabel} />}
      />
    </Grid>
  );
};

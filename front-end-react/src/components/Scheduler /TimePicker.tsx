import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticTimePicker from "@mui/lab/StaticTimePicker";

export default function TimePicker(props: any) {
  // const [value, setValue] = useState<Date | null>(new Date());
  const { state, handleTime } = props;
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticTimePicker
          ampm
          orientation="landscape"
          openTo="minutes"
          value={"Sun Nov 21 2021 11:56:56 GMT-0600"}
          onChange={(newTime) => {
            handleTime(newTime);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

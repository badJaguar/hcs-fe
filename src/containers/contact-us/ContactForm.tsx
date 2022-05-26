import { useForm } from "react-hook-form";

import { FormControl, Grid, Typography } from "@mui/material";

import ReactHookFormTextFieldOutlined from "common/react-hook-forms/ReactHookFormTextFieldOutlined";

import { EmailFieldValues } from "./types";
import { getKeyOf } from "../../../utility/helpers";

const ContactForm = () => {
  const formValues = useForm<EmailFieldValues>({ mode: 'onChange', criteriaMode: 'all' });

  const handleSaveProject = (values: EmailFieldValues): void => {
    console.log(values);
  };

  return (
    <Grid
      item
      xs={5}
      component="form"
      onSubmit={formValues.handleSubmit(handleSaveProject)}
    >
      <Typography variant="body1">Name</Typography>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <ReactHookFormTextFieldOutlined
          control={formValues.control}
          placeholder="Enter your name"
          name={getKeyOf<EmailFieldValues>('name')}
          type="text"
          variant="outlined"
          required
        />
      </FormControl>
      <Typography variant="body1" sx={{ mt: 6 }}>Email</Typography>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <ReactHookFormTextFieldOutlined
          control={formValues.control}
          placeholder="your@email.com"
          name={getKeyOf<EmailFieldValues>('email')}
          type="email"
          variant="outlined"
          required
        />
      </FormControl>
      <Typography variant="body1" sx={{ mt: 6 }}>Phone number</Typography>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <ReactHookFormTextFieldOutlined
          control={formValues.control}
          placeholder="your@email.com"
          name={getKeyOf<EmailFieldValues>('phoneNumber')}
          type="text"
          variant="outlined"
          required
        />
      </FormControl>
    </Grid>
  );
};

export default ContactForm;

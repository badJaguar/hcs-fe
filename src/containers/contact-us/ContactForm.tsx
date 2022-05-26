import { useForm } from "react-hook-form";

import { Button, FormControl, Grid, Typography } from "@mui/material";

import ReactHookFormTextFieldOutlined from "common/react-hook-forms/ReactHookFormTextFieldOutlined";

import { EmailFieldValues } from "./types";
import { getKeyOf } from "../../../utility/helpers";
import ReactHookFormPhoneInput from "common/react-hook-forms/ReactHookFormPhoneInput";

import 'react-phone-number-input/style.css';

const ContactForm = () => {
  const formValues = useForm<EmailFieldValues>({ mode: 'onChange', criteriaMode: 'all' });

  const handleSaveProject = (values: EmailFieldValues): void => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then((res) => {
      if (res.status === 200) {
        formValues.reset({
          email: '',
          name: '',
          phoneNumber: '',
          question: ''
        });
        // TODO: Add notification
      }
    });
  };

  return (
    <Grid
      item
      xs={5}
      component="form"
      onSubmit={formValues.handleSubmit(handleSaveProject)}
      sx={{ width: '100%', pt: { xxs: 8, xs: 0 } }}
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
      <FormControl fullWidth sx={{ mt: 2, '.PhoneInputCountry': { display: 'none' } }}>
        <ReactHookFormPhoneInput
          control={formValues.control}
          name={getKeyOf<EmailFieldValues>('phoneNumber')}
          variant="outlined"
          type="tel"
        />
      </FormControl>
      <Typography variant="body1" sx={{ mt: 6 }}>How can we help?</Typography>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <ReactHookFormTextFieldOutlined
          control={formValues.control}
          name={getKeyOf<EmailFieldValues>('question')}
          placeholder="Message"
          variant="outlined"
          type="text"
          required
          multiline
          rows={4}
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 8 }}
      >Send</Button>
    </Grid>
  );
};

export default ContactForm;

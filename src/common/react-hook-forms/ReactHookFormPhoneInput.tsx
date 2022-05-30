import { Control, Controller, Path } from 'react-hook-form';
import PhoneInputWithCountrySelect from 'react-phone-number-input';

import { OutlinedTextFieldProps } from '@mui/material';

import { FieldValues } from 'common/react-hook-forms/utils/types';

import PhoneInput from './PhoneInput';

interface ReactHookFormPhoneInput<T extends FieldValues> extends OutlinedTextFieldProps {
  control: Control<T>;
  type: React.InputHTMLAttributes<unknown>['type'];
  name: Path<T>;
}

const ReactHookFormPhoneInput = function <T extends FieldValues>({
  name,
  control
}: ReactHookFormPhoneInput<T>): JSX.Element {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <PhoneInputWithCountrySelect
          value={value as string}
          defaultCountry="US"
          countries={["US"]}
          onChange={onChange}
          inputComponent={PhoneInput}
          international={false}
          placeholder="(555) 000-0000"
        />
      )
      }
    />
  );
};

export default ReactHookFormPhoneInput;

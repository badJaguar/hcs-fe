/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, SelectProps } from '@mui/material';
import { forwardRef } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface ReactHookFormSelectProps<T extends FieldValues> extends SelectProps {
  name: string;
  control: Control<T>;
  children: React.ReactNode;
}

const ReactHookFormSelect = forwardRef(function <T extends FieldValues>({
  name, control, children, ...props
}: ReactHookFormSelectProps<T | any>, ref: any): JSX.Element {
  return (
    <Controller<T | FieldValues>
      render={({ field }) => (
        <Select
          {...ref}
          {...field}
          {...props}
          sx={{ display: 'flex' }}
        >
          {children}
        </Select>
      )}
      name={name}
      control={control}
      defaultValue=""
    />
  );
});

ReactHookFormSelect.displayName = 'ReactHookFormSelect';

export default ReactHookFormSelect;

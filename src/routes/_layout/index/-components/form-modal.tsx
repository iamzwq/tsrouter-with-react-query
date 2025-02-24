import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Box, Button, Dialog, DialogContent, DialogTitle, FormLabel, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ControlledAutocomplete,
  ControlledTextField,
  ControlledSelect,
  ControlledCheckbox,
  ControlledCheckboxGroup,
  ControlledRadioGroup,
} from '~/components/controlled-form';
import CloseIcon from '@mui/icons-material/Close';

export function OpenFormModalButton() {
  return (
    <Button
      onClick={() => {
        NiceModal.show(FormModal, { title: 'Form Modal' }).then(res => {
          console.log(res);
        });
      }}
    >
      Open Form Modal
    </Button>
  );
}

function FormModalBase({ title }: { title: React.ReactNode }) {
  const modal = useModal();

  const methods = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      product: '',
      active: false,
      status: [],
      category: '',
      department: [],
    },
  });

  const onSubmit = methods.handleSubmit(async data => {
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 2000));
  });

  return (
    <Dialog scroll="paper" open={modal.visible}>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {title}
          <CloseIcon sx={{ cursor: 'pointer' }} onClick={() => modal.remove()} />
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <FormProvider {...methods}>
          <Stack component="form" spacing={2} onSubmit={onSubmit}>
            <ControlledTextField
              name="firstName"
              label="FirstName"
              rules={{
                required: 'FirstName is required',
                minLength: {
                  value: 3,
                  message: 'FirstName must be at least 3 characters',
                },
              }}
            />
            <ControlledTextField
              name="lastName"
              label="LastName"
              rules={{
                required: 'LastName is required',
                minLength: {
                  value: 3,
                  message: 'LastName must be at least 3 characters',
                },
              }}
            />
            <ControlledAutocomplete
              name="department"
              label="Department"
              size="small"
              multiple
              disableCloseOnSelect
              options={[
                { value: '1', label: 'Department 1' },
                { value: '2', label: 'Department 2' },
              ]}
            />
            <ControlledSelect
              name="product"
              label="Product"
              size="small"
              options={[
                { value: '1', label: 'Product 1' },
                { value: '2', label: 'Product 2' },
                { value: '3', label: 'Product 3' },
              ]}
            />
            <Box className="flex items-center">
              <FormLabel className="mr-2">Active:</FormLabel>
              <ControlledCheckbox name="active" label="Active" />
            </Box>
            <Box className="flex items-center">
              <FormLabel className="mr-2">Status:</FormLabel>
              <ControlledCheckboxGroup
                name="status"
                row
                options={[
                  { value: '1', label: 'Status 1' },
                  { value: '2', label: 'Status 2' },
                  { value: '3', label: 'Status 3' },
                ]}
              />
            </Box>
            <Box className="flex items-center">
              <FormLabel className="mr-2">Category:</FormLabel>
              <ControlledRadioGroup
                name="category"
                row
                options={[
                  { value: '1', label: 'Category 1' },
                  { value: '2', label: 'Category 2' },
                ]}
              />
            </Box>
            <ControlledTextField
              name="description"
              label="Description"
              multiline
              rows={2}
              rules={{
                required: 'Description is required',
                minLength: {
                  value: 10,
                  message: 'Description must be at least 10 characters',
                },
              }}
            />
            <Box component="span">
              <Button variant="contained" type="submit" fullWidth>
                Submit
              </Button>
            </Box>
          </Stack>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}

const FormModal = NiceModal.create(FormModalBase);

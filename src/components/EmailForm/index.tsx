import React from 'react';
import { send, SERVICE_ID, TEMPLATE_ID } from 'emailjs-com';
import { Controller, useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { captureFullPage } from 'utils/capture';

type FormData = {
  toEmail: string;
  fromEmail: string;
};

const EmailForm: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ toEmail, fromEmail }) => {
    captureFullPage();
    /*send(SERVICE_ID, TEMPLATE_ID, {
      to_email: toEmail,
      from_email: fromEmail,
      to_name: "법무팀",
      from_name: "sohye",
      message: "here is message",
      reply_to: "wergreat10@naver.com",
    });*/
  });

  return (
    <form onSubmit={onSubmit}>
      <Controller
          as={(
            <TextField
              type="email"
            />
          )}
          control={control}
          id='toEmail'
          name='toEmail'
          label='to'
        />
      <Controller
          as={(
            <TextField
              type="email"
            />
          )}
          control={control}
          id='fromEmail'
          name='fromEmail'
          label='from'
        />
      <Button type="submit">
        Send
      </Button>
    </form>
  );
}

export default EmailForm;


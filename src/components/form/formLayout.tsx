import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import CustomInput from '../customInput';
import { fieldLayout, BLANK_RECORD } from '../config'
import FormRow from './formRow';

interface IRecord {
  displayName: string;
  alias: string;
  age: number;
  price: number;
}


const MyForm = () => {
  const methods = useForm({
    defaultValues: BLANK_RECORD
  });
  const [ result, setResult ] = useState<string>('');

  const onSubmit = (data: any) => {
    console.log('onSubmit data: ', data);
    setResult(JSON.stringify(data));
  }

  useEffect(() => {
    methods.reset(BLANK_RECORD);
  }, [methods])
  return (
    <FormProvider {...methods}>
      <div className="text-5xl">Hello World</div>
      <form onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col px-5 container">
        {fieldLayout.map( (formRow, index) => (
          <FormRow key={index}
            row={formRow}></FormRow>
        ))}
        {/* <input {...methods.register('name')}/>
        <CustomInput /> */}
        <button type="submit"
          className="rounded w-fit px-4 py-2 text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700">Submit</button>
      </form>
      <div>{result}</div>
    </FormProvider>
  )
}

export default MyForm;

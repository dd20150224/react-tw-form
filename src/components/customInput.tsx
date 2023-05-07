import { useFormContext } from 'react-hook-form';

const CustomInput = () => {
  const { register } = useFormContext();

  return (
    <div>
      <input {...register('alias')}/>
    </div>
  )
}

export default CustomInput;

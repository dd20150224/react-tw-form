import { IInputPayload } from './types';
import { useFormContext } from 'react-hook-form';

const InputInt = ({fieldConfig}: IInputPayload) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col">
      <label>{fieldConfig.label}</label>
      <input type="number" {...register(fieldConfig.id, {valueAsNumber: true})}/>
    </div>
  )
}

export default InputInt;

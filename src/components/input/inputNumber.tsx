import { IInputPayload } from './types'
import { useFormContext } from 'react-hook-form'

const InputNumber = ({ fieldConfig }: IInputPayload) => {
  const { register } = useFormContext()
  return (
    <div className="flex flex-col">
      <label>{fieldConfig.label}</label>
      <input type="number" step="0.1" {...register(fieldConfig.id, {valueAsNumber: true})} />
    </div>
  )
}

export default InputNumber

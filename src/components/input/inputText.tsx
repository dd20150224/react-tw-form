import { IInputPayload } from './types'
import { useFormContext } from 'react-hook-form'

const InputText = ({ fieldConfig }: IInputPayload) => {
  const { register } = useFormContext()
  return (
    <div className="flex flex-col">
      <label>{fieldConfig.label}</label>
      <input type={fieldConfig.type} {...register(fieldConfig.id)} />
    </div>
  )
}

export default InputText

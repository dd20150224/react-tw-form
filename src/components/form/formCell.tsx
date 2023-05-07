import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { fieldConfigs, DUMMY_CONFIG } from '../config'
import { IFieldConfig } from '../types';

import InputInt from '../input/inputInt';
import InputText from '../input/inputText';
import InputNumber from '../input/inputNumber';
import InputTextArea from '../input/inputTextArea';

interface IFormCell {
  fieldId: string;
}

const FormCell = ({ fieldId }: IFormCell ) => {
  const { register, setValue } = useFormContext();

  const [ fieldConfig, setFieldConfig ] = useState<IFieldConfig>(DUMMY_CONFIG)

  useEffect(() => {
    const config: IFieldConfig = fieldConfigs.find( (c: IFieldConfig) => c.id === fieldId) || DUMMY_CONFIG;
    setFieldConfig(config);
  }, [fieldId])

  return (
    <>
      {fieldConfig.type === 'text' && <InputText fieldConfig={fieldConfig} />}
      {fieldConfig.type === 'int' && <InputInt fieldConfig={fieldConfig} />}
      {fieldConfig.type === 'number' && (
        <InputNumber fieldConfig={fieldConfig} />
      )}
      {fieldConfig.type === 'textArea' && (
        <InputTextArea fieldConfig={fieldConfig} />
      )}
    </>
  )
}

export default FormCell

import { IFieldConfig, IRecord } from './types';

export const fieldConfigs: IFieldConfig[] = [
  {id: 'displayName', label: 'Display Name', type: 'text'},
  {id: 'avatarUrl', label: 'Avatar Url', type: 'text'},
  {id: 'alias', label: 'Alias', type: 'text'},
  {id: 'age', label: 'Age', type: 'int'},
  {id: 'price', label: 'Price', type: 'number'}
];

export const fieldLayout: string[][] = [
  // row0
  [
    'displayName'
  ],
  [
    'avatarUrl'
  ],
  [
    'alias'
  ],
  [
    'age', 
    'price'
  ]
]

export const DUMMY_CONFIG = {
  id: '',
  label: '',
  type: ''
}

export const BLANK_RECORD: IRecord = {
  displayName: '',
  avatarUrl: '',
  alias: '',
  age: 10,
  price: 10,
}

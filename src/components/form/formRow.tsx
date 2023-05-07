import FieldCell from './formCell';

const FieldRow = ({row}: {row: any[]}) => {
  return (
    <div className={`container grid grid-cols-${row.length} w-full mb-1 gap-2`}>
      {row.map((fieldId:any) => (
        <FieldCell key={fieldId}
          fieldId={fieldId}></FieldCell>
      ))}
    </div>
  )
}

export default FieldRow;

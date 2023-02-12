import { NativeInput } from './InputNumber.styles';

interface Props {
  min: number;
  max: number;
  placeholder: string;
  value: number;
  onChange: (e: any) => void;
}

const InputNumber: React.FC<Props> = (props: Props) => {
  return (
    <NativeInput
      type='number'
      min={props.min}
      max={props.max}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default InputNumber;

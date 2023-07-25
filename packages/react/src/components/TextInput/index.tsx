import { ComponentProps, forwardRef, ElementRef } from 'react';
import { Input, Prefix, TextInputContainer } from './styles';

export interface ITextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export const TextInput = forwardRef<ElementRef<typeof Input>, ITextInputProps>(
  ({ prefix, ...props }: ITextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    );
  },
);

TextInput.displayName = 'TextInput';

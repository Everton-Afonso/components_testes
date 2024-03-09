import { useState } from 'react'

import * as S from './styles'

type InputWithAnimationProps = {
  type: 'password' | 'email' | 'number' | 'text'
  placeholder: string
  title: string
}

const InputWithAnimation = ({
  type,
  placeholder,
  title
}: InputWithAnimationProps) => {
  const [typeInput, setTypeInput] = useState<'password' | 'text'>('password')
  const [typeIcon, setTypeIcon] = useState<'visibility' | 'visibility_off'>(
    'visibility'
  )
  const computedPlaceholder = placeholder || type

  const toggleVisibility = () => {
    setTypeInput((prevType) => (prevType === 'password' ? 'text' : 'password'))
    setTypeIcon((prevIcon) =>
      prevIcon === 'visibility' ? 'visibility_off' : 'visibility'
    )
  }

  return (
    <S.InputWithAnimation>
      <input
        type={type === 'password' ? typeInput : type}
        name="password"
        placeholder={computedPlaceholder}
        title={title}
        required
      />

      <label>{computedPlaceholder}</label>

      {type === 'password' && (
        <span className="material-symbols-outlined" onClick={toggleVisibility}>
          {typeIcon}
        </span>
      )}
    </S.InputWithAnimation>
  )
}

export default InputWithAnimation

import styled, {keyframes} from 'styled-components'
import {Spinner5} from 'styled-icons/icomoon'

const spin = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`

export const Spinner = styled(Spinner5).attrs({size: '1em'})`
  animation: ${spin} 0.5s linear infinite;
`

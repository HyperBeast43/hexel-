import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= '0' && key <= '9') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="a" onClick={onClick} status={charStatuses['a']} />
        <Key value="b" onClick={onClick} status={charStatuses['b']} />
        <Key value="c" onClick={onClick} status={charStatuses['c']} />
        <Key value="d" onClick={onClick} status={charStatuses['d']} />
        <Key value="e" onClick={onClick} status={charStatuses['e']} />
        <Key value="f" onClick={onClick} status={charStatuses['f']} />
        <Key value="g" onClick={onClick} status={charStatuses['g']} />
        <Key value="h" onClick={onClick} status={charStatuses['h']} />
        <Key value="i" onClick={onClick} status={charStatuses['i']} />
        <Key value="j" onClick={onClick} status={charStatuses['j']} />
        <Key value="l" onClick={onClick} status={charStatuses['l']} />
        <Key value="m" onClick={onClick} status={charStatuses['m']} />
        <Key value="n" onClick={onClick} status={charStatuses['n']} />
        <Key value="o" onClick={onClick} status={charStatuses['o']} />
        <Key value="p" onClick={onClick} status={charStatuses['p']} />
        <Key value="q" onClick={onClick} status={charStatuses['q']} />
        <Key value="r" onClick={onClick} status={charStatuses['r']} />
        <Key value="s" onClick={onClick} status={charStatuses['s']} />
        <Key value="t" onClick={onClick} status={charStatuses['t']} />
        <Key value="u" onClick={onClick} status={charStatuses['u']} />
        <Key value="v" onClick={onClick} status={charStatuses['v']} />
        <Key value="w" onClick={onClick} status={charStatuses['w']} />
        <Key value="x" onClick={onClick} status={charStatuses['x']} />
        <Key value="y" onClick={onClick} status={charStatuses['y']} />
        <Key value="z" onClick={onClick} status={charStatuses['z']} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Delete
        </Key>
      </div>
    </div>
  )
}

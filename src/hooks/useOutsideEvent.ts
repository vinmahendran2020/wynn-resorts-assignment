import { RefObject, useEffect } from 'react'

interface UseOutsideClickProps {
  event?: string;
  handler: () => void;
  ref: RefObject<HTMLDivElement | null>;
}

const useOutsideClick = ({ handler, ref }: UseOutsideClickProps) => {

  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
}

export default useOutsideClick

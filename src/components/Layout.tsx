import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { ReactNode } from 'react'
import Loading from './Loading'

const Layout = ({ children }: { children: ReactNode }) => {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  return (
    <div className='text-base'>
      {(isFetching !== 0 || isMutating !== 0) && <Loading />}
      <div>Layout</div>
      <main>{children}</main>
    </div>
  )
}

export default Layout

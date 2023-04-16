import { useIsFetching, useIsMutating, useQuery } from '@tanstack/react-query'
import { ReactNode } from 'react'
import Loading from './Loading'
import useApi from '@/hooks/useApi'

const Layout = ({ children }: { children: ReactNode }) => {
  // const { isLoading } = useApi();
  // const { isLoading } = useQuery(["todos"], { enabled: false });
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  return (
    <div className='text-base'>
      {(isFetching !== 0 || isMutating !== 0) && <Loading />}
      <div>Layout</div>
      {children}
    </div>
  )
}

export default Layout

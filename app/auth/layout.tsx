import React from 'react'

const layout = ({ children }:{children: React.ReactNode}) => {
  return (
      <div className='h-full flex items-center justify-center bg-sky-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-400 to-violet-800'>
          {children}
      </div>
  )
}

export default layout
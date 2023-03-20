import React from 'react'
import { Pagination } from 'antd';
const NewLayout:React.FC = ()=>{
  return (
    <div>
      NEW
      <Pagination defaultCurrent={1} total={50} />
    </div>

  )
}

export default NewLayout;
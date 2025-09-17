import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout.tsx'
import Empty from './Empty.tsx'
import NotFound from './NotFound.tsx'

function App() {
  return (
    <MainLayout>
      {/* 接口为空时显示 */}
      {false && <Empty />}
      
      <Routes>
        <Route path="/" element={<div>文章</div>} />
        <Route path="/about" element={<div>关于</div>} />
        <Route path="/archive" element={<div>归档</div>} />
        {/* 其他路由... */}
        <Route path="*" element={<NotFound />} /> {/* 兜底匹配 */}
      </Routes>
    </MainLayout>
  )
}

export default App

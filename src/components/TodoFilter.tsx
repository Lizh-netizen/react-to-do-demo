function TodoFilter({ setFilter}: any) {
  return <div><span   onClick={() => setFilter('all')}>all</span>
    <span  onClick={() => setFilter('active')}>已完成</span>
    <span onClick={() => setFilter('completed')}>未完成</span>
  </div>
}
export default TodoFilter
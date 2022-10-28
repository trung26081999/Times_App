import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import TodoList from "./pages/admin/TodoList";
import ItemDetail from "./pages/admin/TodoList/component/Detail";

import { ROUTER } from "./constansts/routers";

function App() {
  return (
    <Routes>
      <Route path={ROUTER.HOME} element={<TodoList />} />
      <Route path={ROUTER.TODO_LIST_DETAIL} element={<ItemDetail />} />
    </Routes>
  );
}

export default App;

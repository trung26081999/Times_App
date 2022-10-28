import React, { useMemo, useState } from "react";

import { Form, Input, Button, Card } from "antd";
import { v4 as uuidv4 } from "uuid";

import { useSelector, useDispatch } from "react-redux";

import TaskItem from "./component/TaskItem";
import * as S from "./style";

import { createTodoAction } from "../../../redux/actions";
const TodoList = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const dispatch = useDispatch();
  const [modifyProductForm] = Form.useForm();

  const { taskList } = useSelector((state) => state.todoReducer);
  const renderTaskList = useMemo(() => {
    return taskList.map((item) => {
      return <TaskItem key={item.id} data={item} time={time}></TaskItem>;
    });
  }, [taskList]);

  const addTasklist = (values) => {
    dispatch(
      createTodoAction({
        id: uuidv4(),
        title: values.title,
        description: values.description,
      })
    );
    modifyProductForm.resetFields();
  };
  return (
    <S.Container>
      <S.Tittle>Timestamped Notes App.</S.Tittle>
      <div style={{ width: "", display: "flex", justifyContent: "center" }}>
        <Form
          form={modifyProductForm}
          name="basic"
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={(values) => addTasklist(values)}
          autoComplete="off"
        >
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title",
              },
            ]}
          >
            <Input placeholder="Note Tittle" style={{ width: "500px" }} />
          </Form.Item>

          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description",
              },
            ]}
          >
            <Input
              placeholder="Note Detail"
              style={{ width: "500px", height: "50px" }}
            />
          </Form.Item>

          <S.Button onClick={() => modifyProductForm.submit()}>
            Add Note
          </S.Button>
        </Form>
      </div>
      {renderTaskList}
    </S.Container>
  );
};

export default TodoList;

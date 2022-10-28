import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { deleteTodoAction } from "../../../../../redux/actions";
// import * as S from "./styles";
import { ROUTER } from "../../../../../constansts/routers";
import { Button, Card, Form, Input, Modal } from "antd";
const { confirm } = Modal;

const ItemDetail = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const editTaskForm = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const { taskList } = useSelector((state) => state.todoReducer);

  const data = taskList.find((item) => item.id === id);

  function showDeleteConfirm() {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(deleteTodoAction(id));
        navigate(ROUTER.HOME);
      },
      onCancel() {},
    });
  }

  const handleEdit = (values) => {
    setIsEdit(true);
  };

  const renderItemDetail = () => {
    return (
      <Card>
        <div>
          <h1>Title: {data?.title}</h1>
          <h1>Detail: {data?.description}</h1>
        </div>
        <div>
          <Button danger onClick={() => showDeleteConfirm()}>
            Xóa
          </Button>
        </div>
      </Card>
    );
  };

  const renderItemForm = () => {
    return (
      <Form
        form={editTaskForm}
        name={`${data?.id}`}
        layout="vertical"
        initialValues={{
          title: data.title,
          description: data.description,
        }}
        onFinish={(values) => {
          handleEdit(values);
          setIsEdit(false);
        }}
      >
        <Form.Item
          label="Tiêu đề"
          name="title"
          validateFirst
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tiêu đề!",
            },
          ]}
        >
          <Input placeholder="Tiêu đề" />
        </Form.Item>

        <Form.Item
          label="Nội dung"
          name="description"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập nội dung!",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Nội dung"
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
        </Form.Item>
      </Form>
    );
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {isEdit ? renderItemForm() : renderItemDetail()}
    </div>
  );
};

export default ItemDetail;

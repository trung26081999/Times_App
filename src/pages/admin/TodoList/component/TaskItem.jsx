import React, { useMemo } from "react";
import { useNavigate, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTER } from "../../../../constansts/routers";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { deleteTodoAction } from "../../../../redux/actions/";
import * as S from "./styles";

import { Form, Input, Button, Card, Modal } from "antd";
const { confirm } = Modal;

const TaskItem = ({ data, time }) => {
  const dispatch = useDispatch();
  function showDeleteConfirm() {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(deleteTodoAction(data.id));
        navigate(ROUTER.HOME);
      },
      onCancel() {},
    });
  }

  const navigate = useNavigate();
  const renderItemView = () => {
    return (
      <Card>
        <S.Container>
          <div>
            <S.Tittle>{data.title}</S.Tittle>
          </div>
          <div>
            <p>Recoded: {time}</p>
            <Button
              onClick={() =>
                navigate(generatePath(ROUTER.TODO_LIST_DETAIL, { id: data.id }))
              }
            >
              Show more
            </Button>
            <Button
              onClick={() => {
                showDeleteConfirm();
              }}
              danger
            >
              Delete
            </Button>
          </div>
        </S.Container>
      </Card>
    );
  };
  return <div style={{ marginTop: "20px" }}>{renderItemView()}</div>;
};

export default TaskItem;

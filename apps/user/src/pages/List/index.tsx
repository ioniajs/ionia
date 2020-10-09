import { Hero } from "@/models";
import { PlusOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import ProTable, { ProColumns } from "@ant-design/pro-table";
import { Button, Result } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const valueEnum: any = {
  0: "close",
  1: "running",
  2: "online",
  3: "error",
};

const tableListDataSource: Hero[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
  });
}

const columns: ProColumns<Hero>[] = [
  {
    title: "序号",
    dataIndex: "index",
    valueType: "index",
    width: 80,
  },
  {
    title: "状态",
    dataIndex: "status",
    initialValue: "all",
    width: 100,
    filters: true,
    valueEnum: {
      all: { text: "全部", status: "Default" },
      close: { text: "关闭", status: "Default" },
      running: { text: "运行中", status: "Processing" },
      online: { text: "已上线", status: "Success" },
      error: { text: "异常", status: "Error" },
    },
  },
  {
    title: "进度",
    key: "progress",
    dataIndex: "progress",
    valueType: (item: any) => ({
      type: "progress",
      status: item.status !== "error" ? "active" : "exception",
    }),
    width: 200,
  },
  {
    title: "更新时间",
    key: "since2",
    width: 120,
    dataIndex: "createdAt",
    valueType: "date",
  },
];

export default () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<Hero[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setDataSource(tableListDataSource);
    }, 1000);
  }, []);

  return (
    <PageContainer pageHeaderRender={() => null}>
      <ProTable<Hero>
        columns={columns}
        rowKey="key"
        pagination={{
          showSizeChanger: true,
        }}
        tableRender={(_: any, dom: any) => (
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <Result status="404" title="404" subTitle="404" />
            <div
              style={{
                flex: 1,
              }}
            >
              {dom}
            </div>
          </div>
        )}
        loading={loading}
        dataSource={dataSource}
        options={{
          density: true,
          reload: () => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          },
          fullScreen: true,
          setting: true,
        }}
        dateFormatter="string"
        headerTitle="英雄列表"
        toolBarRender={() => [
          <Button
            key="3"
            type="primary"
            onClick={() => history.push("detail/1")}
          >
            <PlusOutlined />
            新建
          </Button>,
        ]}
      />
    </PageContainer>
  );
};

import { React, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import P1 from "./details/p1";
import P2 from "./details/p2";
import P3 from "./details/p3";
import S1 from "./details/s1";
import S2 from "./details/s2";

const { Header, Content, Footer, Sider } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items3 = [
  {
    key: "sub1",
    label: "采购管理",
    children: [
      {
        key: "P1",
        label: "物品管理",
      },
      {
        key: "P2",
        label: "采购订单",
      },
      {
        key: "P3",
        label: "采购记录",
      },
    ],
  },
  {
    key: "sub2",
    label: "供应商管理",
    children: [
      {
        key: "S1",
        label: "供应商信息",
      },
      {
        key: "S2",
        label: "供应商统计",
      },
    ],
  },
  {
    key: "sub3",
    label: "XX管理",
    children: [
      {
        key: "X1",
        label: "XX信息",
      },
      {
        key: "X2",
        label: "XX统计",
      },
    ],
  },
];

const Main = () => {
  const [selectedKey, setSelectedKey] = useState(null);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <div style={{ margin: "30px 0px" }}></div>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>管理</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["sub1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={items3}
              onClick={({ key }) => {
                setSelectedKey(key);
              }}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {selectedKey === "P1" && <P1 />}
            {selectedKey === "P2" && <P2 />}
            {selectedKey === "P3" && <P3 />}
            {selectedKey === "S1" && <S1 />}
            {selectedKey === "S2" && <S2 />}
            {selectedKey === "X1" && <div>XX信息</div>}
            {selectedKey === "X2" && <div>XX统计</div>}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        ALLPKU ©2024 Created by Chucky Kazamatsuri
      </Footer>
    </Layout>
  );
};
export default Main;

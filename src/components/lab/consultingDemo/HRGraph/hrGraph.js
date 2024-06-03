import "./hrGraph.css";
import React, { useEffect, useState } from "react";
import example from "./example";
import { Card } from "antd";
import { Descriptions } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
const { Meta } = Card;

const { company, outside, items } = example;

function HRGraph() {
  const [staffName, setStaffName] = useState("");
  useEffect(() => {
    const handleToggle = (e) => {
      const parent = e.currentTarget;
      const children = parent.parentElement.querySelector("ul");
      if (children.style.display === "none" || children.style.display === "") {
        children.style.display = "block";
      } else {
        children.style.display = "none";
      }
      e.stopPropagation();
    };

    const parents = document.querySelectorAll("ul.tree li.parent_li > span");

    parents.forEach((parent) => {
      parent.addEventListener("click", handleToggle);
    });

    return () => {
      parents.forEach((parent) => {
        parent.removeEventListener("click", handleToggle);
      });
    };
  }, []);

  // const TreeNode = ({ label, children, click }) => (
  //   <li className={children ? "parent_li" : ""}>
  //     <span onClick={click === "true" ? () => setStaffName(label) : undefined}>
  //       {label}
  //     </span>
  //     {children && <ul>{children}</ul>}
  //   </li>
  // );

  const transformCompanyData = (data) => {
    return data.map((department, deptIndex) => {
      const [deptName, ...roles] = department;
      const deptKey = `0-${deptIndex}`;

      const children = roles.map((role, roleIndex) => {
        const roleKey = `${deptKey}-${roleIndex}`;
        return {
          title: role,
          key: roleKey,
        };
      });

      return {
        title: deptName,
        key: deptKey,
        children: children,
      };
    });
  };

  const treeData = transformCompanyData(company);

  const transformOutsideData = (data) => {
    return data.map((plant, plantIndex) => {
      const [plantName, ...departments] = plant;
      const plantKey = `0-${plantIndex}`;

      const children = departments.map((department, deptIndex) => {
        const [deptName, ...roles] = department;
        const deptKey = `${plantKey}-${deptIndex}`;

        const roleChildren = roles.map((role, roleIndex) => {
          const roleKey = `${deptKey}-${roleIndex}`;
          return {
            title: role,
            key: roleKey,
          };
        });

        return {
          title: deptName,
          key: deptKey,
          children: roleChildren,
        };
      });

      return {
        title: plantName,
        key: plantKey,
        children: children,
      };
    });
  };

  const outsideCom = transformOutsideData(outside);

  return (
    <div className="container-lg">
      <div className="row">
        <div style={{ padding: "60px 0px", textAlign: "center" }}>
          XX环保集团 人力资源共享平台
        </div>
        <div className="col-3">
          <div
            style={{ textAlign: "left", maxHeight: "600px", overflow: "auto" }}
          >
            <span className="primary">集团总部</span>
            {/* <ul className="tree">
              <TreeNode label="集团总部">
                {company.map((item, index) => {
                  return (
                    <TreeNode key={index} label={item[0]}>
                      <TreeNode label={item[1]}>
                        {item.slice(2).map((subItem, subIndex) => {
                          return <TreeNode key={subIndex} label={subItem} />;
                        })}
                      </TreeNode>
                    </TreeNode>
                  );
                })}
              </TreeNode>
            </ul> */}
            <Tree
              showLine
              switcherIcon={<DownOutlined />}
              defaultExpandedKeys={["0-0-0"]}
              treeData={treeData}
              onSelect={(selectedKeys, info) => {
                setStaffName(info.node.title);
              }}
              style={{ color: "green" }}
            />
          </div>
        </div>
        <div
          className="col-3"
          style={{ textAlign: "left", maxHeight: "600px", overflow: "auto" }}
        >
          <span className="primary">外部厂区</span>
          <Tree
            showLine
            switcherIcon={<DownOutlined />}
            defaultExpandedKeys={["0-0-0"]}
            treeData={outsideCom}
            onSelect={(selectedKeys, info) => {
              setStaffName(info.node.title);
            }}
            style={{ color: "blue" }}
          />
          {/* <ul className="tree">
            <TreeNode label="厂区">
              {outside.map((item, index) => (
                <TreeNode key={index} label={item[0]}>
                  {item.slice(1).map((subItem, subIndex) => (
                    <TreeNode key={`${index}-${subIndex}`} label={subItem[0]}>
                      {subItem.slice(1).map((subSubItem, subSubIndex) => (
                        <TreeNode
                          key={`${index}-${subIndex}-${subSubIndex}`}
                          label={subSubItem}
                        />
                      ))}
                    </TreeNode>
                  ))}
                </TreeNode>
              ))}
            </TreeNode>
          </ul> */}
        </div>
        <div className="col-6">
          <div>
            <h3>员工信息表</h3>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title={staffName} description="各种介绍" />
            </Card>
          </div>
          <Descriptions title="员工基本信息表" bordered items={items} />
        </div>
      </div>
    </div>
  );
}

export default HRGraph;

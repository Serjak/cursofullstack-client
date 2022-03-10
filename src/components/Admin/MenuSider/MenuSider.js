import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import HomeOutlined from "@ant-design/icons/HomeOutlined";
import MenuOutlined from "@ant-design/icons/MenuOutlined";

import "./MenuSider.scss";

export default function MenuSider(props) {
	const { Sider } = Layout;
	const { menuCollapsed } = props;
	return (
		<Sider className="menu-sider" collapsed={menuCollapsed}>
			<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
				<Menu.Item key="1">
					<Link to={"/admin"}>
						<HomeOutlined />
						<span className="nav-text">Home</span>
					</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to={"/admin/menu-web"}>
						<MenuOutlined />
						<span className="nav-text">Menu Web</span>
					</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	);
}

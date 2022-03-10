import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider/MenuSider";
import { Route, Routes, Navigate } from "react-router-dom";
import AdminSignIn from "../pages/Admin/SignIn";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
	const { children } = props;
	const [menuCollapsed, setMenuCollapsed] = useState(false);
	const { Header, Content, Footer } = Layout;

	const user = false;

	if (!user) {
		return (
			<Routes>
				<Route path="/admin/login" component={AdminSignIn} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		);
	}

	return (
		<Layout>
			<MenuSider menuCollapsed={menuCollapsed} />
			<Layout
				className="layout-admin"
				style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
			>
				<Header className="layout-admin__header">
					<MenuTop
						menuCollapsed={menuCollapsed}
						setMenuCollapsed={setMenuCollapsed}
					/>
				</Header>
				<Content className="layout-admin__content">{children}</Content>
				<Footer className="layout-admin__footer">Sergio Jakimenko</Footer>
			</Layout>
		</Layout>
	);
}

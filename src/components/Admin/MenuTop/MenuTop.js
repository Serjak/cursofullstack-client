import React from "react";
import { Button } from "antd";
import MenuFoldOutlined from "@ant-design/icons/MenuFoldOutlined";
import MenuUnfoldOutlined from "@ant-design/icons/MenuUnfoldOutlined";
import PoweroffOutlined from "@ant-design/icons/PoweroffOutlined";
import MenuLogo from "../../../assets/img/png/logo-white.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
	const { menuCollapsed, setMenuCollapsed } = props;
	return (
		<div className="menu-top">
			<div className="menu-top__left">
				<img className="menu-top__left-logo" src={MenuLogo} alt="Logo" />
				<Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
					{React.createElement(
						menuCollapsed ? MenuFoldOutlined : MenuUnfoldOutlined
					)}
				</Button>
			</div>
			<div className="menu-top__right">
				<Button type="link" onClick={() => console.log("PowerOff")}>
					<PoweroffOutlined type="poweroff" />
				</Button>
			</div>
		</div>
	);
}

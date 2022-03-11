import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined, FormOutlined } from "@ant-design/icons";
import { minLenghtValidation } from "../../../utils/formValidation";
import { signUpApi } from "../../../api/user";

import "./RegisterForm.scss";

export default function RegisterForm() {
	const [inputs, setInputs] = useState({
		name: "",
		lastName: "",
		email: "",
		password: "",
		repeatPassword: "",
		privacyPolicy: false,
	});

	const [formValid, setFormValid] = useState({
		name: false,
		lastName: false,
		email: false,
		password: false,
		repeatPassword: false,
		privacyPolicy: false,
	});

	const changeForm = (e) => {
		setInputs({
			...inputs,
			[e.target.name]:
				e.target.name === "privacyPolicy" ? e.target.checked : e.target.value,
		});
	};

	const inputValidation = (e) => {
		const { type, name } = e.target;

		if (name === "name") {
			setFormValid({
				...formValid,
				[name]: minLenghtValidation(e.target, 2),
			});
		}

		if (name === "lastName") {
			setFormValid({
				...formValid,
				[name]: minLenghtValidation(e.target, 2),
			});
		}

		if (type === "email") {
			setFormValid({
				...formValid,
				[name]: minLenghtValidation(e.target, 3),
			});
		}

		if (type === "password") {
			setFormValid({
				...formValid,
				[name]: minLenghtValidation(e.target, 6),
			});
		}

		if (type === "checkbox") {
			setFormValid({
				...formValid,
				[name]: e.target.checked,
			});
		}
	};

	const register = async (e) => {
		// e.preventDefault();
		// const { name, lastName, email, password, repeatPassword, privacyPolicy } =
		// 	formValid;
		const nameVal = inputs.name;
		const lastNameVal = inputs.lastName;
		const emailVal = inputs.email;
		const passwordVal = inputs.password;
		const repeatPasswordVal = inputs.repeatPassword;
		const privacyPolicyVal = inputs.privacyPolicy;

		if (
			!nameVal ||
			!lastNameVal ||
			!emailVal ||
			!passwordVal ||
			!repeatPasswordVal ||
			!privacyPolicyVal
		) {
			notification["error"]({
				message: "Todos los campos son obligatorios",
			});
		} else {
			if (passwordVal !== repeatPasswordVal) {
				notification["error"]({
					message: "Las contraseñas deben ser iguales",
				});
			} else {
				const result = await signUpApi(inputs);
				if (!result.ok) {
					notification["error"]({
						message: result.message,
					});
				} else {
					notification["success"]({
						message: result.message,
					});
					resetForm();
				}
			}
		}
	};

	const resetForm = () => {
		const inputs = document.getElementsByTagName("input");

		for (let i = 0; i < inputs.length; i++) {
			inputs[i].classList.remove("success");
			inputs[i].classList.remove("error");
		}

		setInputs({
			name: "",
			lastName: "",
			email: "",
			password: "",
			repeatPassword: "",
			privacyPolicy: false,
		});

		setFormValid({
			name: false,
			lastName: false,
			email: false,
			password: false,
			repeatPassword: false,
			privacyPolicy: false,
		});
	};

	return (
		<Form className="register-form" onChange={changeForm} onFinish={register}>
			<Form.Item>
				<Input
					prefix={<UserOutlined />}
					type="text"
					name="name"
					placeholder="Nombre"
					className="register-form__input"
					onChange={inputValidation}
					value={inputs.name}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={<UserOutlined />}
					type="text"
					name="lastName"
					placeholder="Apellido"
					className="register-form__input"
					onChange={inputValidation}
					value={inputs.lastName}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={<UserOutlined />}
					type="email"
					name="email"
					placeholder="Correo Electronico"
					className="register-form__input"
					onChange={inputValidation}
					value={inputs.email}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={<LockOutlined />}
					type="password"
					name="password"
					placeholder="Contraseña"
					className="register-form__input"
					onChange={inputValidation}
					value={inputs.password}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					prefix={<LockOutlined />}
					type="password"
					name="repeatPassword"
					placeholder="Repita contraseña"
					className="register-form__input"
					onChange={inputValidation}
					value={inputs.repeatPassword}
				/>
			</Form.Item>
			<Form.Item>
				<Checkbox
					name="privacyPolicy"
					onChange={inputValidation}
					checked={inputs.privacyPolicy}
				>
					He leído y acepto la política de privacidad.
				</Checkbox>
			</Form.Item>
			<Form.Item>
				<Button
					htmlType="submit"
					className="register-form__button"
					icon={<FormOutlined />}
					shape="round"
				>
					Crear Usuario
				</Button>
			</Form.Item>
		</Form>
	);
}

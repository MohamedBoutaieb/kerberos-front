import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useAppDispatch, useAppSelector } from "../config/store";
import { register } from "../config/dh.reducer";
import { CryptoService } from "../services/crypto.service";
import { DhService } from "../services/dh.service";

const Register = () => {
  const dispatch = useAppDispatch();
  const registration = useAppSelector((state) => state.register);
  const serv: CryptoService = new CryptoService();
  const dh: DhService = new DhService();
  const onFinish = (values: any) => {
    const publicKey = dh.getPublicKey("modp15");
    const payload = {
      username: values.username,
      publicKey: publicKey.key,
      group: "modp15",
      encoding: "hex",
    };
    dispatch(register(payload)).then(() => {
      if (registration.publicKey !== "") {
          dh.generateKey(publicKey.group, registration.publicKey, "hex")
        
      }else{
            console.log("error");
      }

      return "";
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {" "}
      <div style={{ backgroundColor: "red", width: "300px", height: "50px" }}>
        {" "}
        {registration.publicKey}
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
          <Form.Item
            name="year"
            rules={[{ required: true }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <Input placeholder="Input birth year" />
          </Form.Item>
          <Form.Item
            name="month"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Input birth month" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center" }}>
        already have an account ? <a href="/login">Sign In</a>
      </div>
    </div>
  );
};

export default Register;

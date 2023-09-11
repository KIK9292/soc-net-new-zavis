import React from "react"
import { Button, Checkbox, Form, Input } from "antd"

import { useFormik } from "formik"
import { LoginParams } from "features/auth/api/authAPI"
import { AppRootState } from "app/store"
import { useActions } from "common/hook/useActions"
import { authThunks } from "features/auth/models/auth.slice"
import { useSelector } from "react-redux"

export const Login = () => {
  const { login } = useActions(authThunks)
  const captcha = useSelector<AppRootState, string | null>((state) => state.auth.captcha)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
      captcha: "",
    },
    onSubmit: (values: LoginParams) => {
      login(values).then(() => {
        console.log(values)
      })
    },
  })

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      // initialValues={{ rememberMe: false }}
      onFinish={formik.handleSubmit}
      autoComplete="off"
    >
      <Form.Item<LoginParams>
        label="Email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input {...formik.getFieldProps("email")} />
      </Form.Item>

      <Form.Item<LoginParams>
        label="Password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password {...formik.getFieldProps("password")} />
      </Form.Item>

      {captcha && (
        <>
          <img src={captcha} alt="Captcha" />
          <Form.Item<LoginParams>
            label="Captcha"
            rules={[{ required: true, message: "Please input captcha!" }]}
          >
            <Input {...formik.getFieldProps("captcha")} />
          </Form.Item>
        </>
      )}
      <Form.Item<LoginParams> wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox {...formik.getFieldProps("rememberMe")} checked={formik.values.rememberMe}>
          Remember me
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

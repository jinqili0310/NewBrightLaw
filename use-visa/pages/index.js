/*
 * @Author: jinqili0310 jinqi.li.310@gmail.com
 * @Date: 2022-10-19 09:46:28
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-10-19 16:05:05
 * @FilePath: \newbrightlaw\use-visa\pages\index.js
 */
import React from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { List, Form, Input, Select } from "antd";
import { successStories } from "../data";

export default function Home() {
  const carouselStyle = {
    height: "500px",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
  };

  const formStyle = {
    labelCol: { span: 3 },
    wrapperCol: { span: 9 },
  };

  const [form] = Form.useForm();

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="CN">+86</Option>
        <Option value="US">+1</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item style={carouselStyle}>
          <Carousel.Caption>
            <h3 style={{ lineHeight: "400px", color: "#fff" }}>
              First slide label
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselStyle}>
          <Carousel.Caption>
            <h3 style={{ lineHeight: "400px", color: "#fff" }}>
              Second slide label
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselStyle}>
          <Carousel.Caption>
            <h3 style={{ lineHeight: "400px", color: "#fff" }}>
              Third slide label
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container style={{ margin: "40px auto" }}>
        <Row>
          <Col sm={12} md={6} style={{ marginBottom: "10px" }}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>EB1A特殊人才移民</Card.Title>
                <Card.Text>content</Card.Text>
                <Button className="moreButton">阅读更多</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} style={{ marginBottom: "10px" }}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>NIW国家利益豁免移民</Card.Title>
                <Card.Text>content</Card.Text>
                <Button className="moreButton">阅读更多</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Card className="bg-light text-black" style={{ border: "none" }}>
        <Card.Img
          src="https://placehold.jp/800x400.png"
          className="home-lg-img"
          style={{ borderRadius: "0" }}
        />
        <Card.ImgOverlay style={{ top: "30%", left: "30px" }}>
          <Card.Title>不成功，就退钱</Card.Title>
          <Card.Text>content</Card.Text>
          <Button className="moreButton">了解更多</Button>
        </Card.ImgOverlay>
      </Card>

      <List
        itemLayout="horizontal"
        dataSource={successStories}
        style={{ margin: "40px 20px" }}
        renderItem={(item) => (
          <List.Item key={item.title}>
            <img
              src="https://placehold.jp/200x200.png"
              layout="fill"
              style={{ marginRight: "20px" }}
            ></img>
            <List.Item.Meta
              title={
                <p style={{ fontWeight: "600", fontSize: "2em" }}>
                  {item.title}
                </p>
              }
              description={[
                <p>{item.content}</p>,
                <div style={{ marginTop: "20px" }}>
                  <Button href={item.url} className="moreButton">
                    阅读更多
                  </Button>
                </div>,
              ]}
            />
          </List.Item>
        )}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "40px auto",
        }}
      >
        <Button style={{ margin: "20px auto" }} href="#" className="moreButton">
          更多成功案例
        </Button>
      </div>

      <Form
        {...formStyle}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        initialValues={{
          prefix: "CN",
        }}
        style={{
          padding: "40px 20px 20px",
          backgroundImage: "url(https://placehold.jp/800x400.png)",
		  backgroundRepeat: "no-repeat",
		  backgroundSize: "100%",
		  backgroundPosition: "center"
        }}
      >
        <Form.Item
          name={["user", "name"]}
          label="姓名"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="电子邮箱"
          rules={[{ type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "phone"]}
          label="手机号码"
          rules={[{ min: 8, max: 20, required: true }]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item name={["user", "weixin"]} label="微信ID">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "message"]} label="信息">
          <Input.TextArea />
        </Form.Item>
        <Form.Item style={{ alignItems: "center" }}>
          <Button type="submit" className="moreButton">
            发送
          </Button>
        </Form.Item>
      </Form>

      <Container style={{ margin: "40px auto" }}>
        <Row>
          <Col
            sm={12}
            md={6}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button href="#" className="moreButton" style={{width: "300px"}}>
              免费资质评估
            </Button>
          </Col>
          <Col
            sm={12}
            md={6}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button href="#" className="moreButton" style={{width: "300px"}}>
              预约付费咨询
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

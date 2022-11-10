/*
 * @Author: jinqili0310 jinqi.li.310@gmail.com
 * @Date: 2022-10-19 09:46:28
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-11-09 14:31:21
 * @FilePath: \newbrightlaw\pages\index.js
 */
import React from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { List, Form, Input, Select } from "antd";
import { successStories } from "../data";

export default function Home() {
  const carouselStyle = {
    height: "600px",
    color: "#fff",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
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
      <Carousel fade>
        <Carousel.Item
          style={{
            ...carouselStyle,
            backgroundImage: "url(/assets/pexels-yan-krukov-7698801.jpg)",
          }}
        >
          <Carousel.Caption>
            <h3 style={{ lineHeight: "500px", color: "#fff" }}>1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            ...carouselStyle,
            backgroundImage:
              "url(/assets/pexels-karolina-grabowska-7876051.jpg)",
          }}
        >
          <Carousel.Caption>
            <h3 style={{ lineHeight: "500px", color: "#fff" }}>2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            ...carouselStyle,
            backgroundImage: "url(/assets/pexels-vlada-karpovich-4609046.jpg)",
          }}
        >
          <Carousel.Caption>
            <h3 style={{ lineHeight: "500px", color: "#fff" }}>3</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            ...carouselStyle,
            backgroundImage:
              "url(/assets/pexels-vladislav-vasnetsov-12478054.jpg)",
          }}
        >
          <Carousel.Caption>
            <h3 style={{ lineHeight: "500px", color: "#fff" }}>4</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container style={{ margin: "40px auto" }}>
        <Row>
          <Col sm={12} md={6} style={{ marginBottom: "10px" }}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>
                  <h4>EB-1 A 特殊人才移民</h4>
                  <h5>(Alien of Extraordinary Ability)</h5>
                </Card.Title>
                <Card.Text>
                  <span style={{ fontSize: "18px", margin: "20px 0", display: "block" }}>
                    第一优先级美国职业移民方式之一，适用于科学、艺术、运动、商业、及音乐领域的顶尖人才。拥有常用职业移民类别中最短的排期。可以不依靠雇主自己独立申请。
                  </span>
                </Card.Text>
                <Button className="moreButton">阅读更多</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} style={{ marginBottom: "10px" }}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>
                  <h4>NIW 国家利益豁免移民</h4>
                  <h5>(National Interest Waiver)</h5>
                </Card.Title>
                <Card.Text>
                  <span style={{ fontSize: "18px", margin: "20px 0", display: "block" }}>
                    第二优先级美国职业移民方式之一，为能促进美国国家利益的高学历和杰出人才认识设立。排期短，亦可以不依靠雇主自己独立申请。
                  </span>
                </Card.Text>
                <Button className="moreButton">阅读更多</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <Card className="bg-light text-black" style={{ border: "none" }}>
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
      </Card> */}

      <h2 style={{ textAlign: "center" }}>成功案例</h2>
      <List
        itemLayout="horizontal"
        dataSource={successStories}
        style={{ margin: "40px 20px" }}
        renderItem={(item) => (
          <List.Item key={item.title}>
            <img
              key={item.title}
              alt={item.title}
              src="https://placehold.jp/200x200.png"
              layout="fill"
              style={{ marginRight: "20px" }}
            ></img>
            <List.Item.Meta
              key={item.title}
              title={
                <p
                  key={item.title}
                  style={{ fontWeight: "600", fontSize: "2em" }}
                >
                  {item.title}
                </p>
              }
              description={[
                <p key={item.title}>{item.content}</p>,
                <div key={item.title} style={{ marginTop: "20px" }}>
                  <Button
                    key={item.title}
                    href={item.url}
                    className="moreButton"
                  >
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
          backgroundImage: "url(/assets/pexels-pavel-danilyuk-8112172.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "top",
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
            <Button href="#" className="moreButton" style={{ width: "300px" }}>
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
            <Button href="#" className="moreButton" style={{ width: "300px" }}>
              预约付费咨询
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

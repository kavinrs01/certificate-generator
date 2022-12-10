import { Col, InputNumber, Layout, Row, Slider } from 'antd';
import React, { useState } from 'react';
import './styles.less';
const { Header, Footer, Sider, Content } = Layout;

export const VariablesForm: React.FC = () => {
  const [horizontalValue, setHorizontalValue] = useState<number>(1);
  const [verticalValue, setVerticalValue] = useState<number>(1);

  const onHorizontalChange = (newValue?: number) => {
    if (!newValue) return;
    setHorizontalValue(newValue);
  };
  const onVerticalChange = (newValue?: number) => {
    if (!newValue) return;
    setVerticalValue(newValue);
  };
  return (
    <Layout>
      <Layout>
        {/* <Header>Header</Header> */}
        <Content>
          <div className="certificate-img-content">
            <p className="floating-variable" style={{ left: `${horizontalValue}%`,top: `${verticalValue}%`,}}>
              Kavin
            </p>
            <img
              className="certificate-template-image"
              src="../../../assets/images/certificate-template-image.jpg"
              alt="certificate template"
            ></img>
          </div>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
      <Sider className="main-page-form">
        <Row>
          <Col span={24}>
            <h4>Horizontal align</h4>
            <Slider
              className="slider-bar"
              min={1}
              max={100}
              onChange={onHorizontalChange}
              value={typeof horizontalValue === 'number' ? horizontalValue : 0}
            />
          </Col>
          <Col span={24}>
            <InputNumber
              min={1}
              max={100}
              style={{ margin: '0 16px' }}
              value={horizontalValue}
              onChange={(e) => onHorizontalChange(e || 0)}
            />
          </Col>
          <Col span={24}>
            <h4>Vertical align</h4>
            <Slider
              className="slider-bar"
              min={1}
              max={100}
              onChange={onVerticalChange}
              value={typeof verticalValue === 'number' ? verticalValue : 0}
            />
          </Col>
          <Col span={24}>
            <InputNumber
              min={1}
              max={100}
              style={{ margin: '0 16px' }}
              value={verticalValue}
              onChange={(e) => onVerticalChange(e || 0)}
            />
          </Col>
        </Row>
      </Sider>
    </Layout>
  );
};

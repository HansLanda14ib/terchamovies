import React from 'react';
import {Card, Col, Row, Typography} from 'antd';
import {useAppContext} from "../stateManagment/context";

const {Title, Paragraph} = Typography;

const MovieDetail = () => {
    const {title,poster,year} = useAppContext();

    return (
        <div style={{background: '#fff', padding: 24}}>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Card
                        cover={<img alt="poster" src={poster}/>}
                        bordered={false}
                        style={{width: 200}}
                    >
                    </Card>
                </Col>
                <Col span={16}>
                    <Title level={2}>{title}</Title>
                    <Paragraph>{`Year: ${year}`}</Paragraph>
                </Col>
            </Row>
        </div>
    );
};

export default MovieDetail;

import React from 'react'
import {
    Form,
    Button,
} from 'antd';
import {Icon} from "sugar-design";

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

function getParentTag(startTag, parentTagList = []) {
    // 传入标签是否是DOM对象
    if (!(startTag instanceof HTMLElement)) return console.error('receive only HTMLElement');
    // 父级标签是否是body,是着停止返回集合,反之继续
    if ('BODY' !== startTag.parentElement.nodeName) {
        // 放入集合
        parentTagList.push(startTag.parentElement)
        // 再上一层寻找
        return getParentTag(startTag.parentElement, parentTagList)
    }
    // 返回集合,结束
    else return parentTagList;
}

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    myRef = React.createRef();

    render() {
        return <div ref={el => this.myRef = el} onClick={() => {
            this.props?.onChange(this.props.value + 1)
            console.log(this.props, getParentTag(this.myRef))
        }}>{this.props.value}</div>
    }
}

export default function Demo() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
                'input': 3,
            }}
        >
            <Form.Item
                label="Input"
                name="input"
                hasFeedback
                validateStatus="error"
                help={<div style={{border: "1px solid #ccc"}}><Icon name={"warning"}/>Should be combination of numbers &
                    alphabets</div>}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    span: 12,
                    offset: 6,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

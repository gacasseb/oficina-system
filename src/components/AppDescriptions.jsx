import React from 'react'

import { Descriptions } from 'antd';


const AppDescriptions = props => {

    if ( props.items.length == 0 ) {
        return (
            <>
            </>
        )
    }

    let descriptions = props.items.map((item, idx) => {
        return <Descriptions.Item key={idx} label={item.label} span={item.span ? item.span : 3}>{item.data}</Descriptions.Item>
    });

    return (
        <Descriptions title={props.title} bordered>
            {descriptions}
        </Descriptions>
    )
}

export default AppDescriptions;
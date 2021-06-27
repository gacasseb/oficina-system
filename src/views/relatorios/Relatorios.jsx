import React from 'react';

import { relatorios_registrados } from '../../relatorios_registrados';
import { Collapse, Descriptions, Badge } from 'antd'

const { Panel } = Collapse

const Relatorios = props => {

    const renderStatus = status => {
        if ( status === 'success' ) {
            return <Badge status='success' text='Completo'/>
        } else if ( status === 'processing' ) {
            return <Badge status='processing' text='Em andamento'/>
        }
    }

    const panels = relatorios_registrados.map((relatorio, idx) => {
        return <Panel key={idx} header={`${relatorio.initial_date} - ${relatorio.car.name}`}>
            <Descriptions title="Informações da manutenção" bordered>
                <Descriptions.Item label="Carro" span={3}>{relatorio.car.name}</Descriptions.Item>
                <Descriptions.Item label="Descrição" span={3}>{relatorio.description}</Descriptions.Item>
                <Descriptions.Item label="Status" span={3}>
                    {renderStatus(relatorio.status)}
                </Descriptions.Item>
                <Descriptions.Item label="Data de início">{relatorio.initial_date}</Descriptions.Item>
                <Descriptions.Item label="Data final" span={2}>{relatorio.final_date}</Descriptions.Item>
                <Descriptions.Item label="Preço total">{`R$${relatorio.price}`}</Descriptions.Item>
                <Descriptions.Item label="Desconto">{`R$${relatorio.discount}`}</Descriptions.Item>
                <Descriptions.Item label="Preço final">{`R$${relatorio.final_price}`}</Descriptions.Item>
            </Descriptions>
        </Panel>
    })

    return (
        <>
            <Collapse>
                {panels}
            </Collapse>
        </>
    );
};

export default Relatorios;
import React, { useState } from 'react';

import { solicitacoes_orçamento } from '../../solicitacoes_orçamento'

import OrcamentoForm from '../../components/OrcamentoForm';
import { Collapse, Descriptions, Button, Space, Modal } from 'antd';
const { Panel } = Collapse;

const Solicitacoes = () => {

    const [showApproveModal, setApproveModal] = useState(false)

    const data = solicitacoes_orçamento.map( (solicitacao, idx) => {
        
        return (
            <Panel key={idx} header={`#${solicitacao.user} - ${solicitacao.car.name}`}>
                <Descriptions title='Solicitação de orçamento' bordered>
                    <Descriptions.Item label='Usuário' span={3}>{solicitacao.user}</Descriptions.Item>
                    <Descriptions.Item label='Modelo do carro'>{solicitacao.car.name}</Descriptions.Item>
                    <Descriptions.Item label='Marca'>{solicitacao.car.brand}</Descriptions.Item>
                    <Descriptions.Item label='Ano'>{solicitacao.car.year}</Descriptions.Item>
                    <Descriptions.Item label='Relato' span={3}>{solicitacao.problem_description}</Descriptions.Item>
                    <div>
                        <Space>
                            <Button onClick={_=>setApproveModal(true)}>Aprovar</Button>
                            <Button onClick={_=>Modal.confirm({content: 'Tem certeza que deseja reprovar esta solicitação?'})}>Reprovar</Button>
                        </Space>
                    </div>
                </Descriptions>
            </Panel>
        )
    })

    return (
        <>
            <Modal visible={showApproveModal} onOk={_=>setApproveModal(false)} onCancel={_=>setApproveModal(false)}>
                <OrcamentoForm/>
            </Modal>
            <Collapse>
                {data}
            </Collapse>
        </>
    );
};

export default Solicitacoes;
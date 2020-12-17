import React from 'react';
import { Button, Pagination } from 'antd';
import { BizPage } from '@ionia/libs';
import { CommentItems } from '../Items';
import { Search } from '../Search';
import './index.less';

export default () => {
    return (
        <BizPage
            showActions={true}
            goBackAction={true}
            renderActions={() => <></>}
            breadcrumbs={[{ name: '评论管理' }, { name: 'IP全部评论' }]}
        >
            <div className='io-cms-comment-single-ip-container'>
                <div className='io-cms-comment-single-ip-detail__div'>
                    <p>IP：</p>
                    <a>192.168.0.140</a>&nbsp;
                    <p>江西省南昌市</p>
                    <p className='single-ip-comment-status__p'>【&nbsp;全部&nbsp;1（待审核&nbsp;0&nbsp;|&nbsp;已审核&nbsp;1）】</p>
                    <Button type='primary'>禁止IP评论</Button>
                </div>
                <Search />
                <div className='io-cms-comment-single-ip-header-between-content__div' />
                <CommentItems />
            </div>
            <Pagination
                className='io-cms-comment-list-pagination'
                total={85}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={total => `共${total}条`}
                defaultPageSize={5}
                onChange={(page, pageSize) => {
                    console.log(page, pageSize, 'pagination');
                }}
            />
        </BizPage>
    )
}
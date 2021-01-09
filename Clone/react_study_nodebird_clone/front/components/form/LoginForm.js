import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useinput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../reducers/user';

const BtnWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
    
`;

const LoginForm = () => {

    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        dispatch(loginAction({ id, password }));
    } ,[id,password]);
    

    // useMemo (useCallback은 함수를 캐싱하고 useMemo는 값을 캐싱)
    // const style = useMemo(()  => ({marginTop: 100}), []);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input 
                    name="user-password"
                    type="password"
                    value={password} 
                    onChange={onChangePassword} 
                    required 
                />
            </div>
            <BtnWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </BtnWrapper>
            <div>
                
            </div>

        </FormWrapper>
    )
}


export default LoginForm

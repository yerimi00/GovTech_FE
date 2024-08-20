import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  position: relative;
  background-color: white;
`;

const MenuButton = styled.button`
background-color: #AFAFAF;
border: none;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
color: black;
padding: 1rem;
`;

const Detail = styled.button`
background-color: black;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
border: none;
border-radius: 5rem;
color: white;
`;

const NoticePage = () => {
    const navigate = useNavigate();

    const goDetailNotice = () => { // 돌보미 인증 요청 상세 화면
        navigate('/detailnoticepage');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>

                    <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                        <MenuButton>
                            답변 대기 중
                        </MenuButton>
                        <MenuButton>
                            답변 완료
                        </MenuButton>
                    </CustomRow>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <MenuButton>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                    <CustomFont color='black' font='1rem'>000님</CustomFont>
                                </CustomRow>
                                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                    <CustomFont color='black' font='0.8rem'>
                                        00:00:00 작성
                                    </CustomFont>
                                    <Detail onClick={goDetailNotice}>{'>'}</Detail>
                                </CustomRow>
                            </CustomColumn>
                        </MenuButton>

                        <MenuButton>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                    <CustomFont color='black' font='1rem'>000님</CustomFont>
                                </CustomRow>
                                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                    <CustomFont color='black' font='0.8rem'>
                                        00:00:00 작성
                                    </CustomFont>
                                    <Detail onClick={goDetailNotice}>{'>'}</Detail>
                                </CustomRow>
                            </CustomColumn>
                        </MenuButton>

                        <MenuButton>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                    <CustomFont color='black' font='1rem'>000님</CustomFont>
                                </CustomRow>
                                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                    <CustomFont color='black' font='0.8rem'>
                                        00:00:00 작성
                                    </CustomFont>
                                    <Detail onClick={goDetailNotice}>{'>'}</Detail>
                                </CustomRow>
                            </CustomColumn>
                        </MenuButton>
                    </CustomColumn>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default NoticePage;
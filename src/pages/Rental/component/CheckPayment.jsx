import React from "react";
import styled, { css } from "styled-components";
import Flex from "../../../component/Flex/Flex";
import Button from "../../../component/Button/Button";
import Margin from "../../../component/Margin/Margin";
import Typography from "../../../component/Typography/Typhography";
import { ReactComponent as Card } from "../svg/card.svg";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";

const StyledMotion = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
`;

const StyledTypo = styled(Typography)`
  width: 310px;
  text-align: left;
`;

const CardNameWrapper = styled(Flex)`
  width: 310px;
  height: 47px;
  border: 1px solid #707070;
  border-radius: 10px;
  padding: 0px 20px;
`;

const PaymentInfoWrapper = styled(Flex)`
  width: 310px;
  margin-bottom: 8px;
  justify-content: space-between;
`;

const StyledHr = styled.hr`
  width: 310px;
  margin-top: 8px;
  margin-bottom: 16px;
  color: #707070;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 72px;
`;

const CheckPayment = ({ currentPage, setCurrentPage }) => {
  const moveToNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <StyledMotion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Margin height="238" />
      <StyledTypo alertText>결제수단을 확인해 주세요.</StyledTypo>
      <Margin height="20" />
      <CardNameWrapper flexCenter justify="space-between">
        <Typography alertText color="darkGray">
          현대카드 MX Black
        </Typography>
        <MdArrowForwardIos size="16" color="#707070" />
      </CardNameWrapper>
      <Margin height="16" />
      <Card />
      <Margin height="40" />
      <StyledTypo alertText>결제 정보를 확인해주세요.</StyledTypo>
      <Margin height="20" />
      <PaymentInfoWrapper flexCenter justify="space-between">
        <Typography contentText color="darkGray">
          대여 요금
        </Typography>
        <Typography contentText>190,000원</Typography>
      </PaymentInfoWrapper>
      <PaymentInfoWrapper flexCenter justify="space-between">
        <Typography contentText color="darkGray">
          이동 요금
        </Typography>
        <Typography contentText>6,000원</Typography>
      </PaymentInfoWrapper>
      <StyledHr />
      <PaymentInfoWrapper flexCenter justify="space-between">
        <Typography contentText color="darkGray">
          최종 요금
        </Typography>
        <Typography contentText>
          <span style={{ color: "#559FF3" }}>196,000</span>원
        </Typography>
      </PaymentInfoWrapper>
      <ButtonWrapper>
        <Button bgColor="mainRed" onClick={moveToNext}>
          다음 단계로
        </Button>
      </ButtonWrapper>
    </StyledMotion>
  );
};

export default CheckPayment;

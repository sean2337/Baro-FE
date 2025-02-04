import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Typography from "../../component/Typography/Typhography";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Margin from "../../component/Margin/Margin";
import Button from "../../component/Button/Button";
import NumberKnob from "./component/NumberKnob";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TitleWrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 64px;
  padding-left: 40px;
`;

const SubTitleWrapper = styled(Typography)`
  width: 92px;
  height: 31px;
  border-radius: 15px;
  background: rgba(198, 82, 82, 0.8);
  ${(props) => props.theme.flex.flexCenter};
`;

const DialCenter = styled.div`
  position: absolute;
  top: 392px;
  width: 38px;
  height: 114px;
  background: linear-gradient(
    139.44deg,
    rgba(255, 255, 255, 0.61) 14.1%,
    rgba(243, 243, 243, 0.12) 84.31%
  );
  border: 0.5px solid #f1f1f1;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 72px;
`;

const DialNumberChoice = () => {
  const [maxNumber, setMaxNumber] = useState(1);
  const navigate = useNavigate();

  const postPeopleCount = () => {
    axios
      .post(
        `${process.env.REACT_APP_API}/user/selectPeopleCount`,
        {
          count: parseInt(maxNumber) === 0 ? 10 : parseInt(maxNumber),
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((r) => {
        console.log(r.data);
        return axios.get(
          `${process.env.REACT_APP_API}/category/getSelectInfo`,
          {
            headers: {
              Authorization: `${localStorage.getItem("accessToken")}`,
            },
          }
        );
      })
      .then((r) => {
        console.log(r.data);
        navigate(`/preset/${r.data.result.categoryName}`);
      });
  };

  return (
    <MobileLayout bar darkShadow>
      <TitleWrapper>
        <Typography mainTitle>
          탑승 가능 인원 수를 <br />
          입력해주세요
        </Typography>
      </TitleWrapper>
      <Margin height="72" />
      <SubTitleWrapper contentText color="white">
        승차 인원
      </SubTitleWrapper>
      <Margin height="10" />
      <Typography maxNumberText color="mainRed">
        최대 {maxNumber === 0 ? 10 : maxNumber}명
      </Typography>
      <DialCenter />
      <NumberKnob maxNumber={maxNumber} setMaxNumber={setMaxNumber} />
      <ButtonWrapper>
        <Button bgColor="mainRed" onClick={postPeopleCount}>
          프리셋 보기
        </Button>
      </ButtonWrapper>
    </MobileLayout>
  );
};

export default DialNumberChoice;

import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);
export default function DayJs() {
  // Block 1
  const myDate = dayjs();
  const newMyDate = myDate.add(1, "week");
  const cloneMyDate = myDate.clone().add(1, "week");
  const block_1 = (
    <div>
      <h2>Immutable Check</h2>
      <dl className="box-dl box-dl2">
        <dt>오늘 날짜 가져오기</dt>
        <dd>{myDate.format()}</dd>
        <dt>오늘 날짜에서 1주일 더하기</dt>
        <dd>{newMyDate.format()}</dd>
        <dt>오늘 날짜에서 클론을 만든 후 1주일 더하기</dt>
        <dd>{cloneMyDate.format()}</dd>
      </dl>
    </div>
  );

  // Block 2
  const myTimeZone = dayjs.tz.guess();
  const mySummerTimeDate = dayjs
    .tz("2018-03-10 13:00:00", "America/New_York")
    .add(1, "day");
  const mySummerTimeDate2 = dayjs
    .tz("2018-03-10 13:00:00", "America/New_York")
    .add(24, "hour");
  const block_2 = (
    <div>
      <h2>Summer-Time Check : New York</h2>
      <dl className="box-dl box-dl2">
        <dt>나의 Time Zone Check</dt>
        <dd>{myTimeZone}</dd>
        <dt>2018-03-10 13시에서 하루 더하기</dt>
        <dd>{mySummerTimeDate.format()}</dd>
        <dt>2018-03-10 13시에서 24시간 더하기</dt>
        <dd>{mySummerTimeDate2.format()}</dd>
      </dl>
    </div>
  );

  // Block 3
  const leapDate = dayjs("2017-01-01 01:00:00");
  const leapDate2 = dayjs("2017-01-01 01:00:00").subtract(1, "year");
  const leapDate3 = dayjs("2017-01-01 01:00:00").subtract(365, "day");
  const block_3 = (
    <div>
      <h2>Leap Year : Korea</h2>
      <dl className="box-dl box-dl2">
        <dt>2017-01-01 날짜 가져오기</dt>
        <dd>{leapDate.format()}</dd>
        <dt>2017-01-01 에서 1년 빼기</dt>
        <dd>{leapDate2.format()}</dd>
        <dt>2017-01-01 에서 365일 빼기</dt>
        <dd>{leapDate3.format()}</dd>
      </dl>
    </div>
  );

  // Block 4
  const myKoreanDate = dayjs().format("YYYY년 MM월 DD일 HH시 mm분 ss초");
  // dayjs/locale/'ko' Setting
  const block_4 = (
    <div>
      <h2>한국어로 표기하기</h2>
      <dl className="box-dl box-dl2">
        <dt>한국어 포맷으로 표기하자</dt>
        <dd>{myKoreanDate}</dd>
      </dl>
    </div>
  );

  // Block 5
  const [outputDate, setOutputDate] = useState("날짜를 입력하세요.");
  const inputDateRef = useRef(null);
  const handleInputDate = (event) => {
    setOutputDate(dayjs(event.target.value, "YYYY-MM-DD").format("dddd"));
  };
  const block_5 = (
    <div>
      <h2>날짜를 입력하여 요일 알아내기</h2>
      <dl className="box-dl box-dl2">
        <dt>
          <input
            type="date"
            ref={inputDateRef}
            onChange={handleInputDate}
            name="inputDate01"
            id="inputDate01"
          />
        </dt>
        <dd>{outputDate}</dd>
      </dl>
    </div>
  );

  // Block 6
  const myCompareDate = dayjs("2021-09-25 04:00:00").diff(
    dayjs("2021-07-10 13:00:00"),
    "hour"
  );
  const block_6 = (
    <div>
      <h2>두 날짜 비교하기. 시간비교 등</h2>
      <dl className="box-dl box-dl2">
        <dt>2021-07-10 13:00, 2021-09-25 04:00는 몇 시간 차이일까?</dt>
        <dd>
          {myCompareDate}
          시간 차이입니다.
        </dd>
      </dl>
    </div>
  );
  return (
    <div>
      <dl className="box-dl">
        <dt>이름</dt>
        <dd>Day.js</dd>
        <dt>No.</dt>
        <dd>02</dd>
        <dt>활용</dt>
        <dd>Time / Date 를 사용할 때 쓰는 Library</dd>
        <dt>비고</dt>
        <dd>
          가볍다!! 심플하고 간결한 만큼 가벼운 것.
          <br />
          Moment JS와 사용법이 아주 유사하면서 훨씬 가볍다! : 쓰기 좋군.
          <br />
        </dd>
      </dl>
      {block_1}
      {block_2}
      {block_3}
      {block_4}
      {block_5}
      {block_6}
    </div>
  );
}

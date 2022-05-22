import React, { useRef, useState } from "react";
import { add, sub, format, differenceInHours } from "date-fns";
import { format as tzFormat, toDate } from "date-fns-tz";
import { addWeeks } from "date-fns";
import { ko } from "date-fns/locale";

export default function DateFns() {
  // Block head
  const block_head = (
    <dl className="box-dl">
      <dt>이름</dt>
      <dd>Date-fns</dd>
      <dt>No.</dt>
      <dd>03</dd>
      <dt>활용</dt>
      <dd>Time / Date 를 사용할 때 쓰는 Library</dd>
      <dt>비고</dt>
      <dd>
        제일 좋아보이는데요?
        <br />
        <br />
      </dd>
    </dl>
  );
  // Block 1
  const myDate = new Date();
  const newMyDate = add(myDate, { days: 7 });
  const cloneMyDate = addWeeks(newMyDate, 1);
  const block_1 = (
    <div>
      <h2>Immutable Check</h2>
      <dl className="box-dl box-dl2">
        <dt>오늘 날짜 가져오기</dt>
        <dd>{format(myDate, "yyyy-MM-dd")}</dd>
        <dt>오늘 날짜에서 1주일 더하기</dt>
        <dd>{format(newMyDate, "yyyy-MM-dd")}</dd>
        <dt>오늘 날짜에서 클론을 만든 후 1주일 더하기</dt>
        <dd>{format(cloneMyDate, "yyyy-MM-dd")}</dd>
      </dl>
    </div>
  );

  // Block 2
  const myTimeZone = "NewYork!";
  const mySummerTimeDate = tzFormat(
    add(
      toDate(new Date("2018-03-10 13:00:00"), { timeZone: "America/New_York" }),
      { days: 1 }
    ),
    "yyyy-MM-dd HH시 mm분 ss초XXX",
    { timeZone: "America/New_York" }
  );
  const mySummerTimeDate2 = tzFormat(
    add(
      toDate(new Date("2018-03-10 13:00:00"), { timeZone: "America/New_York" }),
      { hours: 24 }
    ),
    "yyyy-MM-dd HH시 mm분 ss초XXX",
    { timeZone: "America/New_York" }
  );
  const block_2 = (
    <div>
      <h2>Summer-Time Check : New York</h2>
      <dl className="box-dl box-dl2">
        <dt>나의 Time Zone Check</dt>
        <dd>{myTimeZone}</dd>
        <dt>2018-03-10 13시에서 하루 더하기</dt>
        <dd>{mySummerTimeDate}</dd>
        <dt>2018-03-10 13시에서 24시간 더하기</dt>
        <dd>{mySummerTimeDate2}</dd>
      </dl>
    </div>
  );

  // Block 3
  const leapDate = new Date("2017-01-01");
  const leapDate2 = sub(leapDate, { years: 1 }, "yyyy-MM-dd");
  const leapDate3 = sub(leapDate, { days: 365 }, "yyyy-MM-dd");
  const block_3 = (
    <div>
      <h2>Leap Year : Korea</h2>
      <dl className="box-dl box-dl2">
        <dt>2017-01-01 날짜 가져오기</dt>
        <dd>{format(leapDate, "yyyy-MM-dd")}</dd>
        <dt>2017-01-01 에서 1년 빼기</dt>
        <dd>{format(leapDate2, "yyyy-MM-dd")}</dd>
        <dt>2017-01-01 에서 365일 빼기</dt>
        <dd>{format(leapDate3, "yyyy년 MM월 dd일")}</dd>
      </dl>
    </div>
  );

  // Block 4
  // import { ko } from "date-fns/locale" Setting
  const myKoreanDate = format(new Date(), "yyyy년 MM월 dd일 HH시 mm분 ss초");
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
    setOutputDate(format(new Date(event.target.value), "EEEE", { locale: ko }));
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
  const myCompareDate = differenceInHours(
    new Date("2021-09-25 04:00:00"),
    new Date("2021-07-10 13:00:00")
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
      {block_head}
      {block_1}
      {block_2}
      {block_3}
      {block_4}
      {block_5}
      {block_6}
    </div>
  );
}

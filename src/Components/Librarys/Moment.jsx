import moment from "moment-timezone";
// import moment from "moment";
import "moment/locale/ko";
import React, { useRef, useState } from "react";

export default function Moment() {
  const momentDate = moment();
  let newMomentDate = momentDate.add(1, "week");
  const cloneNewMomentDate = newMomentDate.clone().add(1, "week");

  const [outputDate, setOutputDate] = useState("날짜를 입력하세요.");
  const inputDateRef = useRef(null);
  const handleInputDate = (event) => {
    setOutputDate(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
  };
  return (
    <div>
      <dl className="box-dl">
        <dt>이름</dt>
        <dd>Moment</dd>
        <dt>No.</dt>
        <dd>01</dd>
        <dt>활용</dt>
        <dd>Time / Date 를 사용할 때 쓰는 Library</dd>
        <dt>비고</dt>
        <dd>
          Summer-Time, 윤년 등 다양한 시간대를 제공함.
          <br />
          2011년부터 시작된 "근본" Date Library.
          <br />
          무지막지한 무게(사실상 핵심) + Mutable + Tree shaking 불가
          <br />
          위의 이유로 인하여 최신 F-E 트렌드에 맞지 않는 라이브러리라고 판단되어
          업데이트 되지 않는 라이브러리이며 더이상 사용할 일이 없다. 이를 대체할
          Day.js 와 date-fns를 공부하여 사용하자.
        </dd>
      </dl>
      <div>
        <h2>Immutable Check</h2>
        <div>
          {momentDate.format()}
          <br></br>
          {newMomentDate.format()}
          <br></br>
          {cloneNewMomentDate.format()}
        </div>
      </div>
      <div>
        <h2>Summer-Time Check : New York</h2>
        <div>
          <div>
            {moment.tz("2018-03-10 13:00:00", "America/New_York").format()}
          </div>
          <p>2018-03-10 13시에서 하루 더하기</p>
          <div>
            {moment
              .tz("2018-03-10 13:00:00", "America/New_York")
              .add(1, "day")
              .format()}
          </div>
          <div>
            {moment
              .tz("2018-03-10 13:00:00", "America/New_York")
              .add(24, "hour")
              .format()}
          </div>
        </div>
      </div>
      <div>
        <h2>Leap Year : Korea</h2>
        <div>
          <div>{moment("2017-01-01 01:00:00").format()}</div>
          <p>2017-01-01 에서 1년 빼기</p>
          <div>
            {moment("2017-01-01 01:00:00").subtract(1, "year").format()}
          </div>
          <p>2017-01-01 에서 365일 빼기</p>
          <div>
            {moment("2017-01-01 01:00:00").subtract(365, "day").format()}
          </div>
        </div>
      </div>
      <div>
        <h2>한국어로 표기하기</h2>
        <div>{moment().format("YYYY년 MM월 DD일 HH시")}</div>
      </div>
      <div>
        <h2>날짜를 입력하여 요일 알아내기</h2>
        <div>
          <input
            type="date"
            ref={inputDateRef}
            onChange={handleInputDate}
            name="inputDate01"
            id="inputDate01"
          />
        </div>
        <div>입력한 날짜의 요일은 ??</div>
        <div>{outputDate}</div>
      </div>
      <div>
        <h2>두 날짜 비교하기. 시간비교 등</h2>
        <div>
          <p>2021-07-10 13:00, 2021-09-25 04:00는 몇 시간 차이일까?</p>
          <div>
            {moment("2021-09-25 04:00:00").diff(
              moment("2021-07-10 13:00:00"),
              "hour"
            )}
            시간 차이입니다.
          </div>
        </div>
      </div>
    </div>
  );
}

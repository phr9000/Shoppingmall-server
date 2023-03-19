import "../assets/styles/index.scss";

const Guide:React.FC = ()=>{
  return (
    <div className="guide-container">
      {/* button */}
      <div className="guide-box">
        <h2 className="guide-title">버튼</h2>
        <div className="btn-area flex">
          <button className="btn" type="button">
            기본버튼
          </button>
          <button className="btn primary ml5" type="button">
            기본버튼
          </button>
        </div>
        <br></br>
        <div className="btn-area">
          <button className="btn full" type="button">
            Full 버튼
          </button>
        </div>
      </div>

      {/* input area */}
      <div className="guide-box flex">
        {/* 인풋 + 버튼 */}
        <div>
          <h2 className="guide-title">인풋 + 버튼</h2>
          <div className="field">
            <label className="ir" htmlFor="input-name">
              이름을 입력해주세요
            </label>
            <div className="field-form field-input">
              <div className="input">
                <input
                  type="text"
                  id="input-name"
                  // value=""
                  placeholder="이름을 입력해주세요"
                />
              </div>
              <button type="button" className="btn btn-size-middle">
                <span>입력</span>
              </button>
            </div>
          </div>
        </div>
        {/* 인풋 + disabled 버튼 */}
        <div className="ml10">
          <h2 className="guide-title">인풋 + 비활성 버튼</h2>
          <div className="field">
            <label className="ir" htmlFor="input-name">
              이름을 입력해주세요
            </label>
            <div className="field-form field-input">
              <div className="input">
                <input
                  type="text"
                  id="input-name"
                  // value=""
                  placeholder="이름을 입력해주세요"
                />
              </div>
              <button type="button" className="btn btn-size-middle" disabled>
                <span>입력</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* radio btn */}
      <div className="guide-box">
        <h2 className="guide-title">라디오 사용법</h2>
        <div className="field fieldRadio">
          {/* <div class="field-label">라디오 사용법</div> */}
          {/* inline radio */}
          <div className="field-form mb10">
            <div className="radio">
              <input type="radio" id="input-id-08" name="radio" defaultChecked={true}/>
              <label htmlFor="input-id-08" className="radio-label">
                <span>Inline radio</span>
              </label>
            </div>
            <div className="radio ml10">
              <input type="radio" id="input-id-09" name="radio" defaultChecked={true} />
              <label htmlFor="input-id-09" className="radio-label">
                <span>Inline radio</span>
              </label>
            </div>
            <div className="radio ml10">
              <input type="radio" id="input-id-10" name="radio" defaultChecked={true} />
              <label htmlFor="input-id-10" className="radio-label">
                <span>Inline radio</span>
              </label>
            </div>
            <div className="radio ml10">
              <input type="radio" id="input-id-11" name="radio" defaultChecked={true} />
              <label htmlFor="input-id-11" className="radio-label">
                <span>Inline radio</span>
              </label>
            </div>
          </div>
          {/* disabled */}
          <div className="fieldForm">
            <div className="radio">
              <input
                type="radio"
                id="input-id-21"
                name="radio03"
                defaultChecked={true}
                disabled
              />
              <label htmlFor="input-id-21" className="radio-label">
                <span>disabled radio</span>
              </label>
            </div>
            <div className="radio">
              <input type="radio" id="input-id-22" name="radio03" disabled />
              <label htmlFor="input-id-22" className="radio-label">
                <span>disabled radio</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
import "../assets/styles/index.scss";

export default function Guide() {
  return (
    <div className="guide-container">
      {/* button */}
      <div className="guide-box">
        <h2 className="guide-title">기본 버튼</h2>
        <div className="btn-area">
          <button className="btn" type="button">
            기본버튼
          </button>
        </div>
      </div>

      {/* input area */}
      <div className="guide-box flex">
        {/* 인풋 + 버튼 */}
        <div>
          <h2 className="guide-title">인풋 + 버튼</h2>
          <div className="field">
            <label className="ir" for="input-name">
              이름을 입력해주세요
            </label>
            <div className="field-form field-input">
              <div className="input">
                <input
                  type="text"
                  id="input-name"
                  value=""
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
            <label className="ir" for="input-name">
              이름을 입력해주세요
            </label>
            <div className="field-form field-input">
              <div className="input">
                <input
                  type="text"
                  id="input-name"
                  value=""
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
        <div class="field fieldRadio">
          {/* <div class="field-label">라디오 사용법</div> */}
          {/* inline radio */}
          <div class="field-form mb10">
            <div class="radio">
              <input type="radio" id="input-id-08" name="radio" checked />
              <label for="input-id-08" class="radio-label">
                <span>Inline radio</span>
              </label>
            </div>
            <div class="radio ml10">
              <input type="radio" id="input-id-09" name="radio" checked />
              <label for="input-id-09" class="radio-label">
                <span>Inline radio</span>
              </label>
            </div>
            <div class="radio ml10">
              <input type="radio" id="input-id-10" name="radio" checked />
              <label for="input-id-10" class="radio-label">
                <span>Inline radio</span>
              </label>
            </div>
            <div class="radio ml10">
              <input type="radio" id="input-id-11" name="radio" checked />
              <label for="input-id-11" class="radio-label">
                <span>Inline radio</span>
              </label>
            </div>
          </div>
          {/* disabled */}
          <div class="fieldForm">
            <div class="radio">
              <input
                type="radio"
                id="input-id-21"
                name="radio03"
                checked
                disabled
              />
              <label for="input-id-21" class="radio-label">
                <span>disabled radio</span>
              </label>
            </div>
            <div class="radio">
              <input type="radio" id="input-id-22" name="radio03" disabled />
              <label for="input-id-22" class="radio-label">
                <span>disabled radio</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
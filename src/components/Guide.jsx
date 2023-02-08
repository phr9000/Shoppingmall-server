import '../assets/styles/index.scss';

export default function Guide() {
  return (
    <div className='guide-container'>
      {/* button */}
      <div className='guide-box'>
        <h2 className='guide-title'>버튼</h2>
        <div className='btn-area'>
            <button className='btn' type='button'>기본버튼</button>
        </div>
      </div>

      {/* input area */}
      <div className='guide-box'>
        <h2 className='guide-title'>인풋 + 버튼</h2>
        <div className='field'>
            <label className='ir' for="input-name">이름을 입력해주세요</label>
            <div className='field-form field-input'>
                <div className='input'>
                    <input type="text" id="input-name" value='' placeholder="이름을 입력해주세요"/>
                </div>
                <button type='button' className='btn btn-size-middle'><span>입력</span></button>
            </div>
        </div>
      </div>
    </div>
  )
}

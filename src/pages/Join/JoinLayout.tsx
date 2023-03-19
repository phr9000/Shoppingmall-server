import React, {useState} from 'react'
const JoinLayout:React.FC = ()=>{
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleInput = () => {
    console.log(id, password, passwordConfirm, name, mail, mobile);
  };
  return (
    <div className='join-container'>
      <h2 className='title'>회원가입</h2>
      <div className='top-title-area'>
        <p className='top-title'>필수입력사항</p>
      </div>
      <div className='join-area'>
        <div className="field flex align-center">
          <div className='input-name-area'>
            <label htmlFor="input-name">
              아이디를 입력해주세요
            </label>
            <span className='required-icon'></span>
          </div>
          <div className="field-form field-input w100">
            <div className="input">
              <input
                type="text"
                id="input-name"
                onChange={e=>setId(e.target.value)}
                placeholder="아이디를 입력해주세요"
              />
            </div>
            <button type="button" className="btn btn-size-midonchadle" >
              <span>중복확인</span>
            </button>
          </div>
        </div>
        <div className="field flex align-center">
          <div className='input-name-area'>
            <label htmlFor="input-name">
              비밀번호
            </label>
            <span className='required-icon'></span>
          </div>
          <div className="field-form field-input">
            <div className="input">
              <input
                type="text"
                id="input-name"
                onChange={e=>setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
          </div>
        </div>
        <div className="field flex align-center">
          <div className='input-name-area'>
            <label htmlFor="input-name">
              비밀번호확인
            </label>
            <span className='required-icon'></span>
          </div>
          <div className="field-form field-input">
            <div className="input">
              <input
                type="text"
                id="input-name"
                onChange={e=>setPasswordConfirm(e.target.value)}
                placeholder="비밀번호를 한번 더 입력해주세요"
              />
            </div>
          </div>
        </div>
        <div className="field flex align-center">
          <div className='input-name-area'>
            <label htmlFor="input-name">
              이름
            </label>
            <span className='required-icon'></span>
          </div>
          <div className="field-form field-input">
            <div className="input">
              <input
                type="text"
                id="input-name"
                onChange={e=>setName(e.target.value)}
                placeholder="이름을 입력해주세요"
              />
            </div>
          </div>
        </div>
        <div className="field flex align-center">
          <div className='input-name-area'>
            <span className='required-icon'></span>
            <label htmlFor="input-name">
              이메일
            </label>
          </div>
          <div className="field-form field-input">
            <div className="input">
              <input
                type="text"
                id="input-name"
                onChange={e=>setMail(e.target.value)}
                placeholder="예: marketkurly@krly.com"
              />
            </div>
            <button type="button" className="btn btn-size-middle">
              <span>중복확인</span>
            </button>
          </div>
        </div>
        <div className="field flex align-center">
          <div className='input-name-area'>
            <span className='required-icon'></span>
            <label htmlFor="input-name">
              휴대폰
            </label>
          </div>
          <div className="field-form field-input">
            <div className="input">
              <input
                type="text"
                id="input-name"
                onChange={e=>setMobile(e.target.value)}
                placeholder="숫자만 입력해주세요"
              />
            </div>
            <button type="button" className="btn btn-size-middle" disabled>
              <span>인증번호 받기</span>
            </button>
          </div>
        </div>
      </div>
      <div className="btn-area join-btn">
          <button className="btn primary w100" type="button" onClick={()=> handleInput()}>
            가입하기
          </button>
        </div>
    </div>
    
  )
}

export default JoinLayout;
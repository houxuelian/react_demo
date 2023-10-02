import './index.css';

function DialogFooter (){
    return <div className='dialog-footer'>
    <div className='input-box'>
      <input type='text'/>
      <img src={require('../../images/fece.png')} className='fece'/>
      <img src={require('../../images/microphone.png')} className='microphone'/>
    </div>
    <img src={require('../../images/send.png')} className='send'/>
  </div>
}

export default DialogFooter
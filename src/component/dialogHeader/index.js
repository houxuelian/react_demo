import './index.css';

function DialogHeader (){
    return <div className='dialog-box-header'>
    <div className='vector-box'>
      <span className='vector'>
        <img src={require('../../images/Vector.png')}/>
        <img className='remind' src={require('../../images/remind.png')}/>
      </span>
      <div className='vector-content'>
        <p className='vector-title'>Assistant</p>
        <p className='vector-desc'>Powered by <span>LiveX.ai</span></p>
      </div>
    </div>
    <div className='icon-box'>
      <img src={require('../../images/Refresh.png')}/>
      <img src={require('../../images/Scale.png')}/>
      <img src={require('../../images/Close.png')}/>
    </div>
  </div>
}

export default DialogHeader
import './App.css';
import DialogFooter from './component/dialogFooter'
import DialogHeader from './component/dialogHeader'

function App() {
  return (
    <div className='App'>
      <div className='dialog-box'>
        <DialogHeader/>
        <div className='dialog-content'>
          <div className='dialog-content-left'>
            <div className='dialog-content-left-head'>
              <img src={require('./images/Vector.png')}/>
            </div>
            <div>
              <div className='dialog-content-time'>11:08 PM</div>
              <div className='dialog-content-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                <div className='tool-box'>
                  <p>Was this reponse helful</p>
                  <div>
                    <img src={require('./images/like.png')}/>
                    <img src={require('./images/dislike.png')}/>
                    <img src={require('./images/info.png')}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='dialog-content-right'>
            <div className='dialog-content-time'>
              11:08 PM
              <img src={require('./images/done_all.png')}/>
            </div>
            <div className='button'>
              Button A
            </div>
          </div>
          <div className='dialog-content-left'>
            <div className='dialog-content-left-head'>
              <img src={require('./images/Vector.png')}/>
            </div>
            <div className='loading'>
              <img src={require('./images/loading.png')}/>
            </div>
          </div>
        </div>
        <DialogFooter/>
      </div>
    </div>
  );
}

export default App;

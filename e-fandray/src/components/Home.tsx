import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Pdp from '../assets/images/user.png';
import Pc from '../assets/images/FB_IMG_1600264572686.jpg';
import Pc2 from '../assets/images/Screenshot_2020-08-04-06-23-35.png';
import '../styles/Home.css';

function Home() {
  const user_name = "Miandry Jean Bruno";
  return(  
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3" id="left-menu">
            <img src={Pdp} alt="profil" className="pdp" width="50" id="pdp-center"/>
            <span><b>{user_name}</b></span>
          </div>
          <div className="col-lg-6" id="actuality">
            <div className="container">
              <div className="row">
                <div className="col-sm-2 card border border-dark">
                  <img src={Pdp} height="121" width="102" className="story" alt="story"/>
                  <button className="btn btn-dark" id="createStory">
                    Créer une story
                  </button>
                </div>
                <div className="col-sm-2 card border border-dark">
                  <img src={Pc} height="121" width="102" className="story" alt="story"/>
                </div>
                <div className="col-sm-2 card border border-dark">
                  <img src={Pc2} height="121" width="102" className="story" alt="story"/>
                </div>
                <div className="col-sm-2 card border border-dark">
                  <img src={Pc2} height="121" width="102" className="story" alt="story"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3" id="add">
            
          </div>
        </div>
      </div>
    </main>
  );
}
export { Home }
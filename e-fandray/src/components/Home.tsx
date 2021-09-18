import Pdp from '../assets/images/user.png';
import Pc from '../assets/images/FB_IMG_1600264572686.jpg';
import Pc2 from '../assets/images/Screenshot_2020-08-04-06-23-35.png';
import Pdp2 from '../assets/images/pdp2.jpg';
import '../styles/Home.css';
import '../../node_modules/video-react/dist/video-react.css';
import Pdp3 from '../assets/images/test.jpg';
import imgRegistry from '../assets/images/windows-registry-logo.png';
import { NavLink } from 'react-router-dom';

function Home() {
  const user_name = "Miandry Jean Bruno";
  const name = "RAKOTOMIANDRISOA Jean Bruno";
  const classe = "IMTICIA 3 N°1";
  return(  
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3" id="left-menu">
            <img src={Pdp} alt="profil" className="pdp pdp-center" width="50"/>
            <NavLink to="/profile" id="Myprofil"><span><b>{user_name}</b></span></NavLink>
            <div>
              <b>{name} {classe}</b>
            </div>
          </div>
          <div className="col-lg-7" id="actuality">
            <div className="container">
              <div className="row">
                <div className="col-sm-2 card border border-dark">
                  <img src={Pdp} height="121" width="119" className="story" alt="story"/>
                  <button className="btn btn-dark" id="createStory">
                    Créer une story
                  </button>
                </div>
                <div className="col-sm-2 card border border-dark">
                  <img src={imgRegistry} height="158" width="119" className="story" alt="story"/>
                </div>
                <div className="col-sm-2 card border border-dark">
                  <img src={Pc2} height="158" width="119" className="story" alt="story"/>
                </div>
                <div className="col-sm-2 card border border-dark">
                  <img src={Pc} height="158" width="119" className="story" alt="story"/>
                </div>
                <div className="col-sm-2 card border border-dark">
                  <img src={Pc2} height="158" width="119" className="story" alt="story"/>
                </div>
              </div>
              <div className="col-lg-12" id="publication">
                <img src={Pdp} alt="profil" className="pdp home-top pdp-center" width="40"/>
                <input type="text" placeholder={"Quoi de neuf, "+user_name+" ?"} className="publication" id="input-pub" /> 
              </div>
              <div className="col-lg-12" id="actuality-parent">
                <div id="actuality-content">
                  <img src={Pc} alt="profil" className="pdp pdp-center pub-pofil" width="50"/>Tech
                  <img src={Pc} width="100%" className="pub" alt="pub"/>

                  <img src={Pdp2} alt="profil" className="pdp pdp-center pub-pofil" width="50"/>Fy
                  <img src={Pdp3} width="100%" className="pub" alt="pub"/>

                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2" id="add">
            
          </div>
        </div>
      </div>
    </main>
  );
}
export { Home }
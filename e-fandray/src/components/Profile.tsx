import Pdp from '../assets/images/user.png';
import Pdp2 from '../assets/images/pdp2.jpg';
import Pdp3 from '../assets/images/test.jpg';
import '../styles/Profile.css';
import '../../node_modules/video-react/dist/video-react.css';
import imgRegistry from '../assets/images/windows-registry-logo.png';

function Profile() {
  const user_name = "Miandry Jean Bruno";
  return(  
    <main>
      <div className="container">
          <div className="row">
            <div className="col-lg-12" id="pdc">
              <img src={imgRegistry} alt="photo de couverture" width="100%" height="100%" />
              <img src={Pdp} alt="photo de profil" className="pdp border pdp-profile" width="15%" />
              <h3 id="name-center">{user_name}(Miandrs)</h3>
            </div>
          </div>
          <div className="row">
            <div className="offset-1 col-lg-4" id="about-me"><br />
              <h3>Intro</h3>
              <h6>A étudié à LMA AMPEFILOHA MADAGASCAR</h6>
              <h6>A étudié à ISPM-Institut Supérieur Polytechnique de Madagascar</h6>
              <h6>Habite à Antananarivo Madagascar</h6>
              <h6>De Antananarivo</h6>
              <h6>Célibataire</h6>
              <h6>Membre dépuis 2021</h6>
              <button className="btn btn-dark" id="edit-infos">Modifier les infos</button><br /><br />
              <h3>Photos</h3>
              <img src={Pdp} width="41%" className="photo" alt="pub"/> 
              <img src={Pdp2} width="41%" className="photo" alt="pub"/>
              <img src={imgRegistry} width="41%" className="photo" alt="pub"/>  
              <img src={Pdp3} width="41%" height="20%" className="photo" alt="pub"/>
            </div>
            <div className="col-lg-6" id="profile-scroll">
              <div id="create-new-pub">
                <img src={Pdp} alt="profil" className="pdp home-top pdp-center" width="40"/>
                <input type="text" placeholder={"Quoi de neuf, "+user_name+" ?"} className="publication" id="input-pub" /> 
              </div>
              <div className="new-pub">
                <div className="pub-content">
                  <img src={Pdp} alt="profil" className="pdp pdp-center pub-pofil" width="50"/>{user_name}
                  <img src={Pdp} width="100%" className="pub" alt="pub"/> 

                  <img src={Pdp3} alt="profil" className="pdp pdp-center pub-pofil" width="50" height="50"/>Fy
                  <img src={Pdp3} width="100%" className="pub" alt="pub"/>  
                </div>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
}
export { Profile }
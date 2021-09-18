import Pdp from '../assets/images/user.png';
import Pdp3 from '../assets/images/test.jpg';
import PdpDefault from '../assets/images/Capture.jpg';
import imgRegistry from '../assets/images/windows-registry-logo.png';
import '../styles/Chat.css';
import { DiscussionMenu } from './DiscussionMenu';

function Chat() {
  const user_name = "Miandry Jean Bruno";
  const like = ""
  return(  
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 border" id="discussion">
            <h3>Discussion</h3> 
            <input type="text" placeholder="recherche" className="search" id="search_friend" /> 
            <div id="friends_list">
              <div className="user"><img src={imgRegistry} alt="profil" className="pdp friends_profil" width="50"/>Rakoto</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Miandrs Runo</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Niaina Ras</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Jean Pierre Parfait</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Heritiana</div>
              <div className="user"><img src={Pdp3} alt="profil" className="pdp friends_profil" width="50" height="50"/>Fy</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Nomena Gabrielle</div> 
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Heritiana JC</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Rasoa Viviane</div> 
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Muriella</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Rakotonandrasana James</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Mialisoa Ashley</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>R Jean Jacques</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Tolojanahary Jean L</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Fanomezantsoa Hery</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Fy Kalo</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Nomenjanahary Kevin</div> 
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Heriniaina</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Rasoanantenaina Marie</div> 
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Jack</div>
              <div className="user"><img src={PdpDefault} alt="profil" className="pdp friends_profil" width="50"/>Miora Nantenaina</div> 
            </div>
          </div>
          <div className="col-lg-6 border" id="section-message">
            <img src={Pdp} alt="profil" className="pdp pdp-center" width="50"/>
            <span><b>{user_name}</b></span>
            <div className="scroll" id="message-content">
              <div className="message me">
              Manao ahoana e!</div>
              <div className="message other">
              Salama tsara fa misaotra! inona vaovao?</div>
              <div className="message me">
              Tsisy fa any aminao</div>
              <div className="message other">
              Manomana projet zao koa</div>
              <div className="message me">
              Fa inona projet anareo?</div>
              <div className="message other">
              React, resaka e-fandray hoy 'lay prof</div>
              <div className="message me">
              Hmm, efa mahay React tsara zany a</div>
              <div className="message other">
              Vao mianatra e,
              ary ny projet anareo mba inona?</div>
              <div className="message me">
              Resaka clone</div>
              <div className="message other">
              Hay, tsara kosa zany a, 
              dia inona no ataonareo zany?</div>
              <div className="message me">
              messenger clone</div>
              <div className="message other">
              Tsara be, mazotoa ary aloha e</div>
              <div className="message me">
              Misaotra, @ manaraka ndray zany koa</div>
              <div className="message other">
              ok</div>
            </div>
            <input type="text" placeholder="Aa" id="input-message" />
          </div>
          <div className="col-lg-3 border" id="about-user">
            <img src={Pdp} alt="profil" className="pdp" width="80"/>
            <h3 className="user-profil">{user_name}</h3>
            <ul>
                <DiscussionMenu /> 
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
export { Chat }
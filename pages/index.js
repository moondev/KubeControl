// import cowsay from 'cowsay-browser'
// export default () => (
//   <pre>{ cowsay.say({ text: 'hello' }) }</pre>
// )
// extract specific components
import { Intent, Spinner, DatePickerFactory } from "@blueprintjs/core";
// or just take everything!
import * as Blueprint from "@blueprintjs/core";
 
export default () => (
  <div>
  
<nav className="pt-navbar pt-dark">
  <div className="pt-navbar-group pt-align-left">
    <div className="pt-navbar-heading">KubeControl</div>
    <input className="pt-input" placeholder="Search files..." type="text" />
  </div>
  <div className="pt-navbar-group pt-align-right">
    <button className="pt-button pt-minimal pt-icon-home">Home</button>
    <button className="pt-button pt-minimal pt-icon-document">Files</button>
    <span className="pt-navbar-divider"></span>
    <button className="pt-button pt-minimal pt-icon-user"></button>
    <button className="pt-button pt-minimal pt-icon-notifications"></button>
    <button className="pt-button pt-minimal pt-icon-cog"></button>
  </div>
</nav>

<ul className="pt-menu pt-elevation-1">
  <li className="pt-menu-header"><h6>Layouts</h6></li>
  <li><button type="button" className="pt-menu-item pt-icon-layout-auto">Auto</button></li>
  <li><button type="button" className="pt-menu-item pt-icon-layout-circle">Circle</button></li>
  <li><button type="button" className="pt-menu-item pt-icon-layout-grid">Grid</button></li>
  <li className="pt-menu-header"><h6>Views</h6></li>
  <li><button type="button" className="pt-menu-item pt-icon-history">History</button></li>
  <li><button type="button" className="pt-menu-item pt-icon-star">Favorites</button></li>
  <li><button type="button" className="pt-menu-item pt-icon-envelope">Messages</button></li>
</ul>

<div className="docs-card-example">
  <div className="pt-card pt-elevation-2 pt-interactive">
    <h5><a href="#">Trader Profile</a></h5>
    <p>Overview of employee activity, including risk model, scores and scenario alert history.</p>
  </div>
  <div className="pt-card pt-elevation-2 pt-interactive">
    <h5><a href="#">Desk Profile</a></h5>
    <p>Desk-level summary of trading activity and trading profiles.</p>
  </div>
  <div className="pt-card pt-elevation-2 pt-interactive">
    <h5><a href="#">Dataset Dashboards</a></h5>
    <p>Stats of dataset completeness and reference data join percentages.</p>
  </div>
</div>

      <style jsx>{`
      @import "https://unpkg.com/normalize.css@^4.1.1";
      @import "https://unpkg.com/@blueprintjs/core@^1.11.0/dist/blueprint.css";
      
      .pt-card{
        float:left;
        width: 25%;
        margin-right:10px;
        margin-top:10px;
        height:100px;
      }

      .pt-menu{
        width:100px;
        margin:10px;
        float:left;
      }

    `}</style>
    </div>
)




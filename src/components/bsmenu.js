import React from "react";
function Bsmenu(){

        return (
        <div> 
          <details className="bmlist">
                <summary className="bmsum">List of Blogs</summary>
                <div className="bitems">
                    <a href="/iamblog">Identity Access Management</a>
                    <a href="/sailpoint">Sailpoint IIQ</a>
                    <a href="/spidentitynow">Sailpoint IdentityNow</a>
                    <a href="/cyberark">CyberArk</a>
                    <a href="/okta">Okta</a>
                    <a href="/autho">Auth0</a>
                    <a href="/pingidentity">Ping Identity</a>
                    <a href="/rsaigl">RSA IGL</a>
                    <a href="/datascience">Data Science</a>
                    <a href="/machinelearning">Machine Learning</a>
                </div>
        </details>
        </div>
        );
}
export default Bsmenu;

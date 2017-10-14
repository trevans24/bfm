import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer pink lighten-2">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="footer-text">1717 Bellevue Way Northeast</h5>
              <h5 className="footer-text">Bellevue, WA 98004</h5>
              <h5 className="footer-text">(425)454-8474</h5>
              <h5 className="footer-text">fresh@bellevuefarmersmarket.org</h5>
            </div>
            <div className="col l4 offset-l2 s12">
              <div className="social-icons">
                {/* <a href="https://www.facebook.com/bellevueFM/"><img src={require("../../assets/img/facebook.png")} alt="facebook" height="64" width="64" className="social-icon-img"/></a> */}
                {/* <a href="https://www.instagram.com/bellevuefarmersmrkt/"><img src="../assets/img/instagram.png" alt="instagram" height="64" width="64" className="social-icon-img"/></a>
                <a href="https://twitter.com/BellevueFarmMkt"><img src="../assets/img/twitter.png" alt="twitter" height="75" width="75" className="twitter"/></a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container footer-text">
            © 2017 Bellevue Farmers Market
            <a className="footer-text right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )
  }
}

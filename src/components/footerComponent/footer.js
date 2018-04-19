import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="foot-spot">

        <footer class="footer">
            <p className="footer-rights">© 2017 All rights reserved 2018.</p>
            <ul class="social-icon animate pull-right">
              <li><a href="#" title="facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#" title="twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#" title="google plus" target="_blank"><i class="fa fa-google-plus"></i></a></li>
            </ul>
        </footer>
      </div>

    );
  }
}

export default Footer;

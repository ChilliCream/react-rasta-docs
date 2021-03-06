/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + "docs/" + (language ? language + "/" : "") + doc + ".html";
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + "/" : "") + doc + ".html";
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="64"
                height="64"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("installation")}>Usage</a>
            <a href={this.docUrl("break")}>Components</a>
          </div>
          <div>
            <h5>Examples</h5>
            <a href={this.docUrl("example-break")}>Break</a>
            <a href={this.docUrl("example-column-auto")}>Column</a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href={`https://twitter.com/${this.props.config.twitterUsername}`}
              target="_blank"
              rel="noreferrer noopener">
              Follow us on Twitter
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/react-rasta"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.blogUrl} target="_blank">Blog</a>
            <a href={this.props.config.shopUrl} target="_blank">Shop</a>
            <a href={this.props.config.repoUrl} target="_blank">GitHub</a>
            <a href={this.props.config.repoUrl + "/issues"} target="_blank">Issues</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/chillicream/react-rasta/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>
        <section className="copyright">
          {this.props.config.copyright}&nbsp;
          <a href={this.props.config.organizationUrl} target="_blank">{this.props.config.organizationTitle}</a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;

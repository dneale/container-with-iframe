import React from 'react';

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest['main.js']}`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`](`${name}-container`);
    document.documentElement.style['overflow-y'] = 'initial';

  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;
    window[`render${name}`](`${name}-container`, history);

    document.documentElement.style['overflow-y'] = 'hidden';
  };

  render() {
    return (
      <iframe 
        src={`${this.props.host}${this.props.window.location.pathname}`}
        id={`${this.props.name}-container`}>
      </iframe>
    )
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;

require('../assets/index.css');
var React = require('react');
var sAnim = require('start-animation');

var Demo = React.createClass({
  labelClick: function () {
    var t=sAnim('.demo-startAnim');
    console.log(t)
  },
  listClick: function () {
    sAnim('.demo-list',[
      [{style:"y-bottom"},[{style:"y-bottom"},{style:"y-bottom"},{style:"y-bottom"},{style:"y-bottom"},{style:"y-bottom"}]],
      [{style:"y-bottom",delay:0.2,delayRewrite:true},[{style:"y-bottom"},{style:"y-bottom"},{style:"y-bottom"},{style:"y-bottom"},{style:"y-bottom"}]],
      [{style:"y-bottom"},[{style:"y-bottom"},{style:"y-bottom"},{style:"y-bottom"},{style:"y-bottom"},{style:"y-bottom"}]],
    ])
  },
  render() {
    return (
      <div>
        <div style={{"text-align": "center", "margin": "20px auto"}}>
          <button className="ant-btn ant-btn-primary" id="overBtn" onClick={this.labelClick}>
            刷新页面进场播放
          </button>
          <button className="ant-btn ant-btn-primary" id="listBtn" onClick={this.listClick}>
            刷新局部进场播放
          </button>
        </div>
        <div className="demo-startAnim">
          <div className="demo-header">
            <div className="logo">
              <img width="30" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
              <span>logo</span>
            </div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="demo-content">
            <div className="demo-title">我是标题</div>
            <div className="demo-kp">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="demo-title">我是标题</div>
            <div className="demo-listBox">
              <ul>
                <li>
                  <div className="demo-list">
                    <div className="title"></div>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="demo-list">
                    <div className="title"></div>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="demo-footer" style={{"width": "100%", "display": "table", "float": "left"}}></div>
        </div>
      </div>)
  }
});

React.render(
  <Demo />
  , document.getElementById("__react-content"));
import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/introScreen.css"
import { Link } from 'react-router-dom';

const Hero = () => {
    const [message, setMessage] = useState('')
    const [show, setShow] = useState(false)
    const [bruh, setBruh] = useState(false)

    const checkData = (event) => {
      if (event.key === 'Enter'){
        if (message == "2704"){
          setBruh(true)
          setShow(false)
          alert("Đợi một lát bất ngờ sẽ hiện ra 💌")
        } else{
          setBruh(false)
          setShow(true)
        }
      }
    }

    return(
        <div>
        <div className="heroContainer">
          <div className="videoContainer2">
            <ReactPlayer
              className="react-player"
              url="//www.youtube.com/embed/TGan48YE9Us?autoplay=1&mute=1&start=20"
              width="100%"
              height="100%"
              position="relative"
              overflow="hidden"
              playing={true}
              loop={true}
              muted={true}
            />
          </div>
        </div>
        <div className="titleContainer">
          <i className="heroLogo">❤</i>
          <h1 className="tracking-in-expand-fwd">Lê Nguyễn Trúc Quỳnh</h1>
          <h3 className="subTitle">Trang web này là dành riêng cho em</h3>
          <div class="note-position-1 note-amination">&#9835;</div>
          <div class="note-position-2 note-amination animation-delay-2">&#9833;</div>
          <div className="bubbleContainer">
            <div className="bubble1"></div>
            <div className="bubble2"></div>
            <div className="bubble3"></div>
          </div>
          <div className="inputPass">
            <h1 className="titleInput">NHẬP MẬT KHẨU</h1>
            <input
              id="inputPass"
              className="inputPass2"
              type="text" 
              placeholder="Hihi! nhập đi nàoo" 
              name="password"
              onChange={event => setMessage(event.target.value)}
              onKeyPress={checkData}
              value={message}
            />
            <div className="error-text" style={{ display: show ? "" : "none" }}>Sai rùi! Thử lại đi nàoo 🤗</div>
          </div>
          <div class="wrap">
            <Link to="/music">
                <button id="btn" class="button" style={{ display: bruh ? "" : "none" }}>Bấm vào đây để nghe nè ❤</button>
            </Link>         
          </div>
        </div>
        <ReactPlayer 
              className="react-player"
              url="//www.youtube.com/embed/lf6refTxQs8?autoplay=1&mute=1&start=1"
              width="0%"
              height="0%"
              position="absolute"
              top="10000px"
              left="1000px"
              overflow="hidden"
              playing={true}
              loop={true}
            />
      </div>
    )
}

export default Hero
import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

const Parallaximg = (props) => {
    let contentStyle={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: '#ffffff',
        backgroundColor: `rgba(0,0,0,${props.opacity == null && '0'})`,
        webkitFilter: 'blur(1px) saturate(2)'
    }


    return (
        <ParallaxBanner
        layers={[{image: props.imgsrc , amount: 0.6}]}
        style={{height: props.height}}
        >    
            <div style={contentStyle}>
                {props.children}
            </div>
        </ParallaxBanner>
    )
}

export default Parallaximg

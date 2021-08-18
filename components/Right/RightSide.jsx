import React from 'react'
import NavBar from './Nav/NavBar'
import {RightTitles} from './RightTitle'
import Video from './Video/Video'
import rightCss from './RightSide.module.css';
import videoCss from './Video/video.module.css'
import user from "../images/user.jpg"

function RightSide() {
    return (
        <section className={rightCss.right}>
            <NavBar userName='Mike' userImage={user}/>

                <RightTitles.RightHTML title= 'HTML Course'/>
            <div className={videoCss.video_content}>
                <Video 
                src = "https://www.youtube.com/embed/UB1O30fR-EE"
                description = "kjkjkjkjsdskdsdjskdjksjdksjdkjfkdjfkdjfdfkdjfkdjfkdjfdkjkdsfjklsfhiufjekfhdshfjdsh" />
                <Video 
                src = "https://www.youtube.com/embed/UB1O30fR-EE"
                description = "kjkjkjkjsdskdsdjskdjksjdksjdkjfkdjfkdjfdfkdjfkdjfkdjfdkjkdsfjklsfhiufjekfhdshfjdsh" />
                <Video 
                src = "https://www.youtube.com/embed/UB1O30fR-EE"
                description = "kjkjkjkjsdskdsdjskdjksjdksjdkjfkdjfkdjfdfkdjfkdjfkdjfdkjkdsfjklsfhiufjekfhdshfjdsh" />
                <Video 
                src = "https://www.youtube.com/embed/UB1O30fR-EE"
                description = "kjkjkjkjsdskdsdjskdjksjdksjdkjfkdjfkdjfdfkdjfkdjfkdjfdkjkdsfjklsfhiufjekfhdshfjdsh" />
                <Video 
                src = "https://www.youtube.com/embed/UB1O30fR-EE"
                description = "kjkjkjkjsdskdsdjskdjksjdksjdkjfkdjfkdjfdfkdjfkdjfkdjfdkjkdsfjklsfhiufjekfhdshfjdsh" />
                <Video 
                src = "https://www.youtube.com/embed/UB1O30fR-EE"
                description = "kjkjkjkjsdskdsdjskdjksjdksjdkjfkdjfkdjfdfkdjfkdjfkdjfdkjkdsfjklsfhiufjekfhdshfjdsh" />
            </div>
            </section>
    )
}

export default RightSide

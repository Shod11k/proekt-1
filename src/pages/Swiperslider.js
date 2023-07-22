import React, { Component } from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import eli from "./Ellipse (1).png";
import pinte from "./Group 23.png";
import adidas from "./download.png";
import lya from "./download 5.png";
import sur from "./download 3.png";
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { LiaTelegramPlane } from 'react-icons/lia';
import pay from './pay.png'

export default class swiperslider extends Component {
  render() {
    return (
      <>
        <div className="swi">
          <div className="swiper">
            {" "}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img className="swiimg" src={eli} alt="" />
                <h5>Ted Howard</h5>
                <h6>Senior Designer</h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate error odit eaque repudiandae nobis laboriosam
                  exercitationem tenetur quasi vitae maxime labore omnis
                  delectus nostrum reprehenderit veniam reiciendis, ipsam fugiat
                  eos libero amet dignissimos enim? Adipisci neque fuga at quia
                  totam?
                </p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img className="swiimg" src={eli} alt="" /> <br />
                <h5>Ted Howard</h5>
                <h6>Senior Designer</h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate error odit eaque repudiandae nobis laboriosam
                  exercitationem tenetur quasi vitae maxime labore omnis
                  delectus nostrum reprehenderit veniam reiciendis, ipsam fugiat
                  eos libero amet dignissimos enim? Adipisci neque fuga at quia
                  totam?
                </p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img className="swiimg" src={eli} alt="" /> <br />
                <h5>Ted Howard</h5>
                <h6>Senior Designer</h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate error odit eaque repudiandae nobis laboriosam
                  exercitationem tenetur quasi vitae maxime labore omnis
                  delectus nostrum reprehenderit veniam reiciendis, ipsam fugiat
                  eos libero amet dignissimos enim? Adipisci neque fuga at quia
                  totam?
                </p>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img className="swiimg" src={eli} alt="" /> <br />
                <h5>Ted Howard</h5>
                <h6>Senior Designer</h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate error odit eaque repudiandae nobis laboriosam
                  exercitationem tenetur quasi vitae maxime labore omnis
                  delectus nostrum reprehenderit veniam reiciendis, ipsam fugiat
                  eos libero amet dignissimos enim? Adipisci neque fuga at quia
                  totam?
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="ham">
            <h1>Bizning hamkorlar</h1>
          </div>
          <div className="pin">
            <img src={pinte} alt="" />
            <img src={adidas} alt="" />
            <img src={lya} alt="" />
            <img src={sur} alt="" />
          </div>

          <div className='iconki'>
            <div className='iconyozuv'>
      <div className='icard1'>
        <h3>
        Asosiy
        </h3>
        <p>
        Loyiha haqida <br /> <br />
        Kurslar <br /><br />
        Mentorlarga<br /><br />
        Ommaviy oferta<br /><br />
        Maxfiylik siyosati
        </p>
      </div>
      <div className='icard1'>
      <h3>
      Qo’shimcha
        </h3>
        <p>
        Bizning jamoa<br /><br />
        Biz bilan hamkorlik <br /><br />
        Bu qanday ishlaydi ?<br /><br />
       
        </p>
      </div>
      <div className='icard1'>
      <h3>
      Qo’llab quvvatlash
        </h3>
        <p>
        Eng ko’p beriladigan savollar<br /><br />
        Kontakt <br /><br />
        
       
        </p>
      </div>
      <div className='icard1'>
        <h3>To’lov turlari</h3>
        <img src={pay} alt="" />
        <h5>100011, Toshkent sh. Shayxontohur tum., <br /> 
Zarqaynar ko'ch., 3B-uy</h5>
<button className='btn1'>Biz bilan aloqa</button>
      </div>

            </div>
          <div className='icons1'>
<LiaTelegramPlane 
style={{width:30, height:30,}} />
<FaFacebookF style={{width:30, height:30,}}/>
<FaInstagramSquare style={{width:30, height:30,}}/>
<BsYoutube  style={{width:30, height:30,}} />
          </div>
          </div>
        </div>
      </>
    );
  }
}

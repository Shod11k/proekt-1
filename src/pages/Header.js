import React, { Component } from 'react'
import dass from './Group 24.png'
import { GrLinkNext } from 'react-icons/gr';
import ttt from './image 3.png'
import zve from './Group 9.png'
import assd from './image.png'
import bot from './image 2 (1).png'
import bot1 from './image 4.png'
import bot2 from './image 5.png'

import sad from './Rectangle 11.1 (12).png'
import sad2 from './Rectangle 11.3 (1).png'
import sad3 from './Rectangle 11.5 (1).png'
import sad4 from './Rectangle 11.7 (1).png'
import sad5 from './Rectangle 11.9 (1).png'
import sad6 from './Rectangle 11.11 (1).png'
import { Tabs } from 'antd';
import { GrPersonalComputer } from 'react-icons/gr';
import { RiPaintBrushFill } from 'react-icons/ri';
import { FaShoppingBag } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { BiMedal } from 'react-icons/bi';
import { BsFillShieldSlashFill } from 'react-icons/bs';
import { BsHeartPulseFill } from 'react-icons/bs';


export default class Header extends Component {
    

  render() {const onChange = (key) => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: `Dasturlash`,
          children:    <div className="rt">
          <div className="jota">
              <div className="pol1">
                 
                     <img src={sad} alt="" />
               
                      <h3>
                      Python bo’yicha boshlang’ich
          dasturlash
                      </h3>
                      <img src={zve} alt="" />
                      <div className="pon">
              <div className="ponn">
                  <address>Kurs hajmi</address>
                  <h2 className='ponh2'>42 soat</h2>
              </div>
              <div className="ponnn">
                  <address>Kurs narxi</address>
                  <h2  className='ponh2'>370.000 UZS</h2>
                  
              </div>
              <button className='gril'> <GrLinkNext /></button>
          
                  </div>
                  </div>
             
              <div className="pol1">
              <img src={sad2} alt="" />
               
               <h3>
               Java bo’yicha boshlang’ich
          dasturlash
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          
              </div></div>
              <div className="pol1">
              <img src={sad3} alt="" />
               
               <h3>
               Spring to’liq kurs
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          </div>
              </div>
              <div className="pol1">
              <img src={sad4} alt="" />
               
               <h3>
               C++ da massivlar bilan
          ishlash
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          </div>
              </div>
              <div className="pol1">
              <img src={sad5} alt="" />
               
               <h3>
               CSS da grid texnologiyalari
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button></div>
          </div>
             
              <div className="pol1">
              <img src={sad6} alt="" />
               
               <h3>
               HTML 5 imkoniyatlari, CSS 3 
          imkoniyatlari
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          </div>
              </div> </div>
          </div>,
        },
        {
          key: '2',
          label: `Dizayn`,
          children:   <div className="rt">
          <div className="jota">
              <div className="pol1">
                 
                     <img src={sad} alt="" />
               
                      <h3>
                      Python bo’yicha boshlang’ich
          dasturlash
                      </h3>
                      <img src={zve} alt="" />
                      <div className="pon">
              <div className="ponn">
                  <address>Kurs hajmi</address>
                  <h2 className='ponh2'>42 soat</h2>
              </div>
              <div className="ponnn">
                  <address>Kurs narxi</address>
                  <h2  className='ponh2'>370.000 UZS</h2>
                  
              </div>
              <button className='gril'> <GrLinkNext /></button>
          
                  </div>
                  </div>
             
              <div className="pol1">
              <img src={sad2} alt="" />
               
               <h3>
               Java bo’yicha boshlang’ich
          dasturlash
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          
              </div></div>
              <div className="pol1">
              <img src={sad3} alt="" />
               
               <h3>
               Spring to’liq kurs
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          </div>
              </div>
              <div className="pol1">
              <img src={sad4} alt="" />
               
               <h3>
               C++ da massivlar bilan
          ishlash
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          </div>
              </div>
              <div className="pol1">
              <img src={sad5} alt="" />
               
               <h3>
               CSS da grid texnologiyalari
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button></div>
          </div>
             
              <div className="pol1">
              <img src={sad6} alt="" />
               
               <h3>
               HTML 5 imkoniyatlari, CSS 3 
          imkoniyatlari
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          </div>
              </div> </div>
          </div>,
        },
        {
          key: '3',
          label: `Marketing`,
          children:   <div className="rt">
          <div className="jota">
              <div className="pol1">
                 
                     <img src={sad} alt="" />
               
                      <h3>
                      Python bo’yicha boshlang’ich
          dasturlash
                      </h3>
                      <img src={zve} alt="" />
                      <div className="pon">
              <div className="ponn">
                  <address>Kurs hajmi</address>
                  <h2 className='ponh2'>42 soat</h2>
              </div>
              <div className="ponnn">
                  <address>Kurs narxi</address>
                  <h2  className='ponh2'>370.000 UZS</h2>
                  
              </div>
              <button className='gril'> <GrLinkNext /></button>
          
                  </div>
                  </div>
             
              <div className="pol1">
              <img src={sad2} alt="" />
               
               <h3>
               Java bo’yicha boshlang’ich
          dasturlash
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          
              </div></div>
              <div className="pol1">
              <img src={sad3} alt="" />
               
               <h3>
               Spring to’liq kurs
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          </div>
              </div>
              <div className="pol1">
              <img src={sad4} alt="" />
               
               <h3>
               C++ da massivlar bilan
          ishlash
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          </div>
              </div>
              <div className="pol1">
              <img src={sad5} alt="" />
               
               <h3>
               CSS da grid texnologiyalari
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button></div>
          </div>
             
              <div className="pol1">
              <img src={sad6} alt="" />
               
               <h3>
               HTML 5 imkoniyatlari, CSS 3 
          imkoniyatlari
               </h3>
               <img src={zve} alt="" />
               <div className="pon">
          <div className="ponn">
           <address>Kurs hajmi</address>
           <h2 className='ponh2'>42 soat</h2>
          </div>
          <div className="ponnn">
           <address>Kurs narxi</address>
           <h2  className='ponh2'>370.000 UZS</h2>
           
          </div>
          <button className='gril'> <GrLinkNext /></button>
          </div>
              </div> </div>
          </div>,
        },
        {
            key: '4',
            label: `Biznes`,
            children:   <div className="rt">
            <div className="jota">
                <div className="pol1">
                   
                       <img src={sad} alt="" />
                 
                        <h3>
                        Python bo’yicha boshlang’ich
            dasturlash
                        </h3>
                        <img src={zve} alt="" />
                        <div className="pon">
                <div className="ponn">
                    <address>Kurs hajmi</address>
                    <h2 className='ponh2'>42 soat</h2>
                </div>
                <div className="ponnn">
                    <address>Kurs narxi</address>
                    <h2  className='ponh2'>370.000 UZS</h2>
                    
                </div>
                <button className='gril'> <GrLinkNext /></button>
            
                    </div>
                    </div>
               
                <div className="pol1">
                <img src={sad2} alt="" />
                 
                 <h3>
                 Java bo’yicha boshlang’ich
            dasturlash
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            
                </div></div>
                <div className="pol1">
                <img src={sad3} alt="" />
                 
                 <h3>
                 Spring to’liq kurs
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div>
                <div className="pol1">
                <img src={sad4} alt="" />
                 
                 <h3>
                 C++ da massivlar bilan
            ishlash
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div>
                <div className="pol1">
                <img src={sad5} alt="" />
                 
                 <h3>
                 CSS da grid texnologiyalari
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button></div>
            </div>
               
                <div className="pol1">
                <img src={sad6} alt="" />
                 
                 <h3>
                 HTML 5 imkoniyatlari, CSS 3 
            imkoniyatlari
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div> </div>
            </div>,
          },
          {
            key: '5',
            label: `Salomatlik`,
            children:   <div className="rt">
            <div className="jota">
                <div className="pol1">
                   
                       <img src={sad} alt="" />
                 
                        <h3>
                        Python bo’yicha boshlang’ich
            dasturlash
                        </h3>
                        <img src={zve} alt="" />
                        <div className="pon">
                <div className="ponn">
                    <address>Kurs hajmi</address>
                    <h2 className='ponh2'>42 soat</h2>
                </div>
                <div className="ponnn">
                    <address>Kurs narxi</address>
                    <h2  className='ponh2'>370.000 UZS</h2>
                    
                </div>
                <button className='gril'> <GrLinkNext /></button>
            
                    </div>
                    </div>
               
                <div className="pol1">
                <img src={sad2} alt="" />
                 
                 <h3>
                 Java bo’yicha boshlang’ich
            dasturlash
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            
                </div></div>
                <div className="pol1">
                <img src={sad3} alt="" />
                 
                 <h3>
                 Spring to’liq kurs
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div>
                <div className="pol1">
                <img src={sad4} alt="" />
                 
                 <h3>
                 C++ da massivlar bilan
            ishlash
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div>
                <div className="pol1">
                <img src={sad5} alt="" />
                 
                 <h3>
                 CSS da grid texnologiyalari
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button></div>
            </div>
               
                <div className="pol1">
                <img src={sad6} alt="" />
                 
                 <h3>
                 HTML 5 imkoniyatlari, CSS 3 
            imkoniyatlari
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div> </div>
            </div>,
          },
          {
            key: '6',
            label: `Menejment`,
            children:   <div className="rt">
            <div className="jota">
                <div className="pol1">
                   
                       <img src={sad} alt="" />
                 
                        <h3>
                        Python bo’yicha boshlang’ich
            dasturlash
                        </h3>
                        <img src={zve} alt="" />
                        <div className="pon">
                <div className="ponn">
                    <address>Kurs hajmi</address>
                    <h2 className='ponh2'>42 soat</h2>
                </div>
                <div className="ponnn">
                    <address>Kurs narxi</address>
                    <h2  className='ponh2'>370.000 UZS</h2>
                    
                </div>
                <button className='gril'> <GrLinkNext /></button>
            
                    </div>
                    </div>
               
                <div className="pol1">
                <img src={sad2} alt="" />
                 
                 <h3>
                 Java bo’yicha boshlang’ich
            dasturlash
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            
                </div></div>
                <div className="pol1">
                <img src={sad3} alt="" />
                 
                 <h3>
                 Spring to’liq kurs
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div>
                <div className="pol1">
                <img src={sad4} alt="" />
                 
                 <h3>
                 C++ da massivlar bilan
            ishlash
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div>
                <div className="pol1">
                <img src={sad5} alt="" />
                 
                 <h3>
                 CSS da grid texnologiyalari
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button></div>
            </div>
               
                <div className="pol1">
                <img src={sad6} alt="" />
                 
                 <h3>
                 HTML 5 imkoniyatlari, CSS 3 
            imkoniyatlari
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div> </div>
            </div>,
          },
          {
            key: '7',
            label: `Buxgalteriya`,
            children:  <div className="rt">
            <div className="jota">
                <div className="pol1">
                   
                       <img src={sad} alt="" />
                 
                        <h3>
                        Python bo’yicha boshlang’ich
            dasturlash
                        </h3>
                        <img src={zve} alt="" />
                        <div className="pon">
                <div className="ponn">
                    <address>Kurs hajmi</address>
                    <h2 className='ponh2'>42 soat</h2>
                </div>
                <div className="ponnn">
                    <address>Kurs narxi</address>
                    <h2  className='ponh2'>370.000 UZS</h2>
                    
                </div>
                <button className='gril'> <GrLinkNext /></button>
            
                    </div>
                    </div>
               
                <div className="pol1">
                <img src={sad2} alt="" />
                 
                 <h3>
                 Java bo’yicha boshlang’ich
            dasturlash
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            
                </div></div>
                <div className="pol1">
                <img src={sad3} alt="" />
                 
                 <h3>
                 Spring to’liq kurs
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div>
                <div className="pol1">
                <img src={sad4} alt="" />
                 
                 <h3>
                 C++ da massivlar bilan
            ishlash
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div>
                <div className="pol1">
                <img src={sad5} alt="" />
                 
                 <h3>
                 CSS da grid texnologiyalari
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button></div>
            </div>
               
                <div className="pol1">
                <img src={sad6} alt="" />
                 
                 <h3>
                 HTML 5 imkoniyatlari, CSS 3 
            imkoniyatlari
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div> </div>
            </div>,
          },
          {
            key: '8',
            label: `Tarmoq`,
            children:   <div className="rt">
            <div className="jota">
                <div className="pol1">
                   
                       <img src={sad} alt="" />
                 
                        <h3>
                        Python bo’yicha boshlang’ich
            dasturlash
                        </h3>
                        <img src={zve} alt="" />
                        <div className="pon">
                <div className="ponn">
                    <address>Kurs hajmi</address>
                    <h2 className='ponh2'>42 soat</h2>
                </div>
                <div className="ponnn">
                    <address>Kurs narxi</address>
                    <h2  className='ponh2'>370.000 UZS</h2>
                    
                </div>
                <button className='gril'> <GrLinkNext /></button>
            
                    </div>
                    </div>
               
                <div className="pol1">
                <img src={sad2} alt="" />
                 
                 <h3>
                 Java bo’yicha boshlang’ich
            dasturlash
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            
                </div></div>
                <div className="pol1">
                <img src={sad3} alt="" />
                 
                 <h3>
                 Spring to’liq kurs
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div>
                <div className="pol1">
                <img src={sad4} alt="" />
                 
                 <h3>
                 C++ da massivlar bilan
            ishlash
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div>
                <div className="pol1">
                <img src={sad5} alt="" />
                 
                 <h3>
                 CSS da grid texnologiyalari
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button></div>
            </div>
               
                <div className="pol1">
                <img src={sad6} alt="" />
                 
                 <h3>
                 HTML 5 imkoniyatlari, CSS 3 
            imkoniyatlari
                 </h3>
                 <img src={zve} alt="" />
                 <div className="pon">
            <div className="ponn">
             <address>Kurs hajmi</address>
             <h2 className='ponh2'>42 soat</h2>
            </div>
            <div className="ponnn">
             <address>Kurs narxi</address>
             <h2  className='ponh2'>370.000 UZS</h2>
             
            </div>
            <button className='gril'> <GrLinkNext /></button>
            </div>
                </div> </div>
            </div>,
          },
      ];
    return (
      <>
        <div className="das">
          <div className="dasha">
            <h1 className="dash1">
              <div className="sd">
                {" "}
                Biz sizga <h1 className="dash">Dasturla</h1>
              </div>{" "}
              <br />
              va boshqa kurslarni <br /> taklif qilamiz.
            </h1>
            <p>
              Siz istalgan vaqtda har qanday mavzuda kurslarni o’rganishingiz
              mumkin. Buning uchun qidiruv tizimidan foydalaning
            </p>
            <input
              className="inp"
              type="text"
              placeholder="Qanday kurs o’rganmoqchisiz ?"
            />
          </div>
          <div className="dasimg">
            <img src={dass} alt="" />
          </div>
        </div>
        <div className="naran">
          <h1>Bizning eng top kurslarimizni ko'rib chiqing</h1>
        </div>

        <div className="top">
          <div className="top2x">
            <div className="top1">
              <img className="ab" src={ttt} alt="" />
              <h3>Java, Spring bo’yicha to’liq kurs. (amaliy)</h3>
              <img className="zver" src={zve} alt="" />
              <div className="nara">
                <div className="kol">
                  <address>Kurs hajmi</address>
                  <h3>38 soat</h3>
                </div>
                <div className="kol1">
                  <address>Kurs narxi</address>
                  <h3>250.000 UZS</h3>
                </div>
                <button className="gril">
                  {" "}
                  <GrLinkNext />
                </button>
              </div>{" "}
            </div>

            <div className="top3x">
              {" "}
              <div className="top2">
                {" "}
                <img className="abb" src={assd} alt="" />{" "}
              </div>
              <div className="top3">
                <h3>Illustrator boshlang’ichdan proffessionalgacha</h3>
                <img className="zver" src={zve} alt="" />{" "}
              </div>
              <div className="nar">
                <div className="top4">
                  <address>Kurs hajmi</address>
                  <h2>38 soat</h2>
                </div>
                <div className="top5">
                  <address>Kurs narxi</address>
                  <h2>250.000 UZS</h2>
                </div>
                <button className="gril">
                  {" "}
                  <GrLinkNext />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="buc">
          <div className="buc1">
            <div className="buch3">
              <img src={bot} alt="" />
              <h3>Boshlang’ich Photoshop kurslari</h3>
              <img className="zvee" src={zve} alt="" />
              <div className="buck1">
                <div className="buch">
                  <address>Kurs hajmi</address>
                  <h2>42 soat</h2>
                </div>
                <div className="buch1">
                  <address>Kurs narxi</address>
                  <h2>370.000 UZS</h2>
                </div>
                <button className="gril">
                  {" "}
                  <GrLinkNext />
                </button>
              </div>
            </div>
          </div>
          <div className="buc2">
            <div className="buch31">
              <img src={bot1} alt="" />
              <h3>Shaxsiy biznesni rivojlan- tirish qoidalari</h3>
              <img className="zvee" src={zve} alt="" />
              <div className="buck2">
                <div className="buch2">
                  <address>Kurs hajmi</address>
                  <h2>42 soat</h2>
                </div>
                <div className="buch13">
                  <address>Kurs narxi</address>
                  <h2>420.000 UZS</h2>
                </div>
                <button className="gril">
                  {" "}
                  <GrLinkNext />
                </button>
              </div>
            </div>
          </div>
          <div className="buc3">
            <div className="buch4">
              <img src={bot2} alt="" />
              <h3>1C bo’yicha to’liq kurs (amaliy)</h3>
              <img className="zvee" src={zve} alt="" />
              <div className="buck3">
                <div className="buch5">
                  <address>Kurs hajmi</address>
                  <h2>42 soat</h2>
                </div>
                <div className="buch6">
                  <address>Kurs narxi</address>
                  <h2>420.000 UZS</h2>
                </div>
                <button className="gril">
                  {" "}
                  <GrLinkNext />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Kkate">
          <div className="kate">
            <h1>Top kategoriyalar</h1>
            <button className="bR">Barchasi</button>
          </div>
          <div className="categb">
            <div className="qazzi">
              {" "}
              <button className="qaz1">
                <GrPersonalComputer 
                style={{marginRight:10,}}/>
                Dasturlash
              </button>
              <button className="qaz1">
                <RiPaintBrushFill 
                style={{marginRight:10}}/>
                Dizayn
              </button>
              <button className="qaz1">
                <FaShoppingBag style={{marginRight:10}}
/>
                Biznes
              </button>
              <button className="qaz1">
                <GrMoney style={{marginRight:10}}/>
                
                Buxgalteriya
              </button>
              <div className="qazi"> </div>
              <button className="qaz2">
                <TfiArrowTopRight  style={{marginRight:10}}/> Marketing
               
              </button>
              <button className="qaz2">
                <BiMedal style={{marginRight:10}} /> Menejment
              </button>
              <button className="qaz2">
                <BsFillShieldSlashFill style={{marginRight:10}}/>
                Xavfsizlik
              </button>
              <button className="qaz2">
                <BsHeartPulseFill style={{marginRight:10}}/>
                Salomatlik
              </button>
            </div>
          </div>{" "}
          <div className="tab">
            <Tabs
              className="tab4ik"
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
            />
          </div>{" "}
        </div>

        
      </>
    );
  }
}

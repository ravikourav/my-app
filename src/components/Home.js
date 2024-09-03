import React from 'react'
import TextField from '@mui/material/TextField';
import { Button , useMediaQuery} from '@mui/material';

//illustartion
import MainIllustration from '../img/illustration-1.png';
import image from '../img/img1.png';
import vedicAstrology from '../img/vedic_astrology.png';
import natal from '../img/natal.png';
import chart from '../img/chart.png';
import numerologyImg from '../img/numerology.png';

//svg
import cloudSvg from '../img/cloud.svg';
import layoutSvg from '../img/layout.svg';
import codeSvg from '../img/code.svg';
import Card from './Card';


function Home() {
    const isMobile = useMediaQuery('(max-width:764px)');

    const cardData_1 = [
        {
            id : 'Western Astrology',
            title : 'Western Astrology API',
            pera : ['Western Astrology, also known as tropical astrology, is a comprehensive astrology platform that offers a wide range of features and tools for personal    and professional use.',
                'With our easy-to-use APIs, you can easily integrate a wealth of astrological insights and personalized horoscopes into your app or website. From natal astrology and wheel charts to synastry, solar returns, and daily, monthly, and yearly forecasts, our APIs provide a simple, powerful way to enhance your user experience and drive engagement.'
            ],
            img: image,
            ButtonText : 'Explore Western Astrology API'
        },{
            id : 'Vedic Astrology',
            title : 'Vedic Astrology API',
            pera : ['Vedic Astrology is an ancient and profound tradition that offers powerful insights into the mysteries of the universe.',
                'With our simple and easy-to-use APIs, you can quickly and easily access a wealth of Vedic astrological knowledge and integrate it into your app or website. From Kundli calculations and match making to panchang details and advanced techniques like Krishnamurthy Paddhati, Lal Kitab, and Varshphal, our APIs make it easy to offer your users a wide range of astrological features and tools.'
            ],
            img: vedicAstrology,
            ButtonText : 'Explore Vedic Astrology API'
        }
    ];

    const cardData_2 = [
        {
            id : 'Natal',
            title : 'Complete Natal Chart Details',
            pera : ['Natal planetary positions, house cusps, natal chart aspects and more in a single API.',
                'Get dominant element, dominant mode and hemisphere along with moon phase at the time of birth.',
                'API with bite-sized content free and detailed API interpretation for premium users.'
            ],
            img: natal,
            ButtonText : 'Get Started For Free'
        },{
            id : 'Charts',
            title : 'Wheel Chart in SVG and PNG Formats',
            pera : ['Use one of our default themes for wheel chart or get your exclusive customised natal chart designed from us.',
                'Get creative with your natal chart designs and let us create a custom theme for you.'
            ],
            img: chart,
            ButtonText : 'Get Started For Free'
        }
    ];

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' , flexDirection: 'column'}}>
            <div style={{display: 'flex' ,alignItems: 'center', justifyContent: 'center' , flexDirection: isMobile ? 'column' : 'row-reverse', }}>
                <div>
                    <img style={{width :'100%'}} src={MainIllustration} alt=''/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' , minWidth: '250px', maxWidth: '500px', margin:'50px', textAlign: isMobile? "center" : 'left'}}>
                    <p style={{fontSize: '2.3rem' ,fontWeight: 500, marginBottom: '0px'}}>ALL-in-One Astrology Platform for Your Business</p>
                    <p style={{fontSize: '1.2rem'}}>AstrologyAPI is Astrology-as-a-Service platform offering horoscopes, astrology calculations, interpretations and much more for your app and website.</p>
                    <div style={{display: 'flex', justifyContent: isMobile ?'center' : ''}}>
                        <TextField id="outlined-basic" label="Enter Your Email" variant="outlined" sx={{margin :'10px'}} />
                        <Button variant="contained" sx={{ textWrap: 'nowrap', margin: '10px 0px'}}>Get Started</Button>
                    </div>
                </div>
            </div>
            <p style={{fontSize: '1.8rem' , fontWeight: 700 }}>TRUSTED BY TOP BUSINESSES</p>

            <div style={{ 
                flexDirection : 'column',
                justifyContent: 'center',
                alignItems: "center",
                backgroundColor: 'rgb(248 250 252)', 
                width: '100%',
                display: 'flex' }}>
                
                <p style={{maxWidth: '100px',fontWeight: 500, color: 'rgb(59 130 246)', backgroundColor: 'rgba(59,130,246,.08)', padding: '10px 20px' , margin: '50px', borderRadius: '20px'}}>API FIRST</p>
                <p style={{fontSize: '2.8rem' ,fontWeight: 700, color:'rgb(39 39 42)' , textAlign: 'center' , maxWidth :'768px', margin:'0px 50px 10px 50px'}}>The Ultimate <span style={{ color: 'rgb(59 130 246)' }}>Astrology</span> Platform for Your Business</p>
                <p style={{color:'rgb(113 113 122)' , textAlign: 'center' , maxWidth :'668px' ,  margin:'20px 50px 50px 50px'}}>A Complete API-centric platform for managing a wide range of astrology features in developer friendly way.</p>
                <div style={{display :'flex' , flexWrap : 'wrap' , justifyContent : 'center'}}>
                    <div style={{width: '200px' , background: '#7dd3fc' , padding: '25px' , borderRadius :'10px', margin: '20px'}}>
                        <img src={cloudSvg} alt='cloud' />
                        <p style={{fontSize :'1.6rem' , fontWeight : '500',color : 'rgb(39 39 42)'}}>Cloud-based</p>
                        <p style={{color : 'rgb(39 39 42)'}}>Cloud based APIs makes it fast, safe, secure and scalable. Large volumes of data handled seemlessly</p>
                    </div>
                    <div style={{width: '200px' , background: '#fdba74' , padding: '25px' , borderRadius :'10px', margin: '20px'}}>
                        <img src={layoutSvg} alt='cloud' />
                        <p style={{fontSize :'1.6rem' , fontWeight : '500',color : 'rgb(39 39 42)'}}>Completely white-labled</p>
                        <p style={{color : 'rgb(39 39 42)'}}>APIs made just for your websites and apps. Easy and customised API hosting for your website and apps on your servers.</p>
                    </div>
                    <div style={{width: '200px' , background: '#86efac' , padding: '25px' , borderRadius :'10px', margin: '20px'}}>
                        <img src={codeSvg} alt='cloud' />
                        <p style={{fontSize :'1.6rem' , fontWeight : '500',color : 'rgb(39 39 42)'}}>100% support</p>
                        <p style={{color : 'rgb(39 39 42)'}}>Effortless API integration, easy onboarding for websites and apps with API documentations.</p>
                    </div>
                </div>
            </div>
            <div style={{ width: '90vw', display: 'flex', background: 'rgb(253 242 248)' , borderRadius: '30px', padding: '20px', margin: '20px', alignItems: 'center', flexDirection: 'column' }}>
                <Card cardData={cardData_1} buttonBgColor='rgb(244 114 182)' />
            </div>

            <div style={{ width: '90vw', display: 'flex', background: 'rgb(56, 189, 248, 0.15)' , borderRadius: '30px', margin: '20px', padding: '20px', alignItems: 'center', flexDirection: 'column' }}>
                <p style={{color : 'rgb(56 189 248)' , fontSize: '0.8rem'}}>TROPICAL ASTROLOGY</p>
                <p style={{fontSize: '2.5rem' , fontWeight: '700' , margin: '10px'}}>Western Astrology Features</p>
                <Card cardData={cardData_2} buttonBgColor='rgb(56 189 248)' />
            </div>

            <div style={{display:'flex' ,width: '90vw', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: isMobile ? 'column' : 'row'}}>
                <div style={{background:'rgb(237 233 254)' , borderRadius: '10px' , margin: '50px' , maxWidth: '600px'}}>
                    <img style={{width: '100%'}} src={numerologyImg} alt='Numerology Imgae'/>
                </div>
                <div>
                    <p style={{fontSize: '2.5rem' , fontWeight: '700',maxWidth : '400px' , margin: '10px'}}>Engaging and Popular Content APIs</p>
                    <div style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' , maxWidth: '400px',padding: '20px'}}>
                        <p style={{color: 'rgb(37 99 235)', fontSize : '1.2rem' , fontWeight: '500'}}>Numerology API</p>
                        <p>Delight your users with our professional and accurate Pythagorean Numerology APIs. Our APIs cover a wide variety of engaging numerological reports such as life path number, soul urge number, challenge numbers and much more.</p>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Home
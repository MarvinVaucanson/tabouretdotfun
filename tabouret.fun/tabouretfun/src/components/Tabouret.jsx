import { useEffect, useState } from 'react';
import tabouretnoFun from '../assets/tabouret.png';
import tabouretFun from '../assets/tabouretFun.png';
import tabouretBdsm from '../assets/tabouretBdsm.png';
import tabouretFurr from '../assets/tabouretFurr.png';


import '../styles/tabouret.scss';

const Tabouret = () => {
    /*Gradient*/
    const gradient = [
"linear-gradient(315deg, #732982, #732982, #24408E, #24408E, #008026, #008026, #FFED00, #FFED00, #FF8C00, #FF8C00, #E40303, #E40303)",
    "linear-gradient(315deg, #0032a0, #0032a0, #8c4799, #8c4799, #ff0080, #ff0080)",
    "linear-gradient(315deg, #21B1FF, #21B1FF, #FFD800, #FFD800, #FF218C, #FF218C)",
    "linear-gradient(315deg, #5BCEFA, #5BCEFA, #F5A9B8, #F5A9B8, #ffffff, #ffffff, #F5A9B8, #F5A9B8, #5BCEFA , #5BCEFA)",
    "linear-gradient(315deg, #732982, #732982, #24408E, #24408E, #008026, #008026, #FFED00, #FFED00, #FF8C00, #FF8C00, #E40303, #E40303, #000000, #000000, #613915, #613915, #74D7EE, #74D7EE, #FFAFC8, #FFAFC8, #FFFFFF, #FFFFFF)",
    "linear-gradient(315deg, #000000, #000000, #9c5cd4, #9c5cd4, #ffffff, #ffffff, #fddb00, #fddb00)",
    "linear-gradient(315deg, #2F3CBE, #2F3CBE, #000000, #000000, #C011D7, #C011D7, #FFFFFF, #FFFFFF, #FF76A4, #FF76A4)"
    ]

    const [allSwitch, setSwitch] = useState([false, false, false])

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * gradient.length);
        document.body.style.setProperty('--main-gradient', gradient[randomIndex]);
    }, [allSwitch]);

    const handleChange = (index) => {
        if (allSwitch[index]) {
            setSwitch([false, false, false]);
            document.body.classList.replace(document.body.className, 'body');
        } else {
            setSwitch(allSwitch.map((_, i) => i === index ? true : false));
            if (index === 0) {
                document.body.classList.replace(document.body.className, 'body-alternate-lgbt');
            } else if (index === 1) {
                document.body.classList.replace(document.body.className, 'body-alternate-cuir');
            } else if (index === 2) {
                document.body.classList.replace(document.body.className, 'body-alternate-lgbt');
            }
        }
    }

    useEffect(()=>{
        if(!allSwitch[0] && !allSwitch[2] && !allSwitch[1]){
            document.body.classList.replace(document.body.className,'body')
        }
    },[allSwitch])

    return (
        <>
            <div className={allSwitch[0] ? "box" : "noball"}><img src={allSwitch[0] ? tabouretFun : tabouretnoFun} className={allSwitch[0] ? 'fun-image' : 'no-fun-image'} alt="Tabouret" /></div>
            <div className='button_menu'>
                <div className='menu'>
                    <p className={allSwitch[0] ? 'fun-texte' : 'no-fun-texte'}>{allSwitch[0] ? "DESACTIVER LE FUUUUUUN" : "activer le fun"}</p>
                    <label className="switch">
                        <input type="checkbox" onChange={() => handleChange(0)} checked={allSwitch[0]} />
                        <span className="slider"></span>
                    </label>
                </div>
                <div className='menu'>
                    <p className={allSwitch[1] ? 'fun-texte' : 'no-fun-texte'}>{allSwitch[1] ? "desactiver le cuir" : "activer le cuir"}</p>
                    <label className="switch">
                        <input type="checkbox" onChange={() => handleChange(1)} checked={allSwitch[1]} />
                        <span className="slider"></span>
                    </label>
                </div>
                <div className='menu'>
                    <p className={allSwitch[2] ? 'fun-texte' : 'no-fun-texte'}>{allSwitch[2] ? "desactiver les furrys" : "activer le agrou"}</p>
                    <label className="switch">
                        <input type="checkbox" onChange={() => handleChange(2)} checked={allSwitch[2]} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
            <div>
                <img src={allSwitch[0] ? tabouretFun : (allSwitch[1] ? tabouretBdsm : (allSwitch[2] ? tabouretFurr : tabouretnoFun))} className={
                    allSwitch[0] ? 'fun-image' : (allSwitch[1] ? 'bdsm-image':'no-fun-image')
                } alt="Tabouret" />
            </div>
        </>
    );
};

export default Tabouret;
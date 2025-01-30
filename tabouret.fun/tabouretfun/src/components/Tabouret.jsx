import { useState } from 'react';
import tabouretnoFun from '../assets/tabouret.png';
import tabouretFun from '../assets/tabouretFun.png';
import tabouretBdsm from '../assets/tabouretBdsm.png';

import '../styles/tabouret.scss';

const Tabouret = () => {
    const [funValue, setFunValue] = useState(false);
    const [bdsmValue, setbdsmValue] = useState(false)

    const handleFunChange = () => {
        setFunValue(!funValue);
        setbdsmValue(false)
        document.body.classList.toggle('body-alternate')
    };
    const handleBDSMChange = () => {
        setbdsmValue(!bdsmValue);
        setFunValue(false)
        document.body.classList.toggle('body-alternate')
    };

    return (
        <>
            <div className={funValue ? "box" : "noball"}><img src={funValue ? tabouretFun : tabouretnoFun} className={funValue ? 'fun-image' : 'no-fun-image'} alt="Tabouret" /></div>
            <div className='button_menu'>
                <div className='menu'>
                    <p className={funValue ? 'fun-texte' : 'no-fun-texte'}>{funValue ? "DESACTIVER LE FUUUUUUN" : "activer le fun"}</p>
                    <label className="switch">
                        <input type="checkbox" onChange={handleFunChange} checked={funValue} />
                        <span className="slider"></span>
                    </label>
                </div>
                <div className='menu'>
                    <p className={bdsmValue ? 'fun-texte' : 'no-fun-texte'}>{bdsmValue ? "desactiver le cuire" : "activer le cuire"}</p>
                    <label className="switch">
                        <input type="checkbox" onChange={handleBDSMChange} checked={bdsmValue} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
            <div>
                <img src={funValue ? tabouretFun : (bdsmValue ? tabouretBdsm :tabouretnoFun)} className={
                    funValue ? 'fun-image' : (bdsmValue ? 'bdsm-image':'no-fun-image')
                } alt="Tabouret" />
            </div>
        </>
    );
};

export default Tabouret;
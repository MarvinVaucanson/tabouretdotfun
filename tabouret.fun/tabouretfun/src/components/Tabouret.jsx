import { useState } from 'react';
import tabouretnoFun from '../assets/tabouret.png';
import tabouretFun from '../assets/tabouretFun.png';
import '../styles/tabouret.scss';

const Tabouret = () => {
    const [funValue, setFunValue] = useState(false);

    const handleChairChange = () => {
        setFunValue(!funValue); 
        document.body.classList.toggle('body-alternate')
    };

    return (
        <>
            <div className={funValue ? "box" : "noball"}><img src={funValue ? tabouretFun : tabouretnoFun} className={funValue ? 'fun-image' : 'no-fun-image'} alt="Tabouret" /></div>
            <div className='menu'>
                <p className={funValue ? 'fun-texte' : 'no-fun-texte'}>{funValue ? "DESACTIVER LE FUUUUUUN" : "activer le fun"}</p>
                <label className="switch">
                    <input type="checkbox" onChange={handleChairChange} checked={funValue} />
                    <span className="slider"></span>
                </label>
            </div>
            <div>
                <img src={funValue ? tabouretFun : tabouretnoFun} className={funValue ? 'fun-image' : 'no-fun-image'} alt="Tabouret" />
            </div>
        </>
    );
};

export default Tabouret;
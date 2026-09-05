import { useEffect, useState } from 'react';
import tabouretnoFun from '../assets/tabouret.png';
import tabouretFun from '../assets/tabouretFun.png';
import tabouretBdsm from '../assets/tabouretBdsm.png';
import tabouretFurr from '../assets/tabouretFurr.png';
import tacosImage from '../assets/cordonbleuT.png';
import tabouretBerth from '../assets/tabouretBerth.png';
import tabouretPlanck from '../assets/tabouretPlanck.png';

import '../styles/tabouret.scss';

// Configuration centralisée des modes
const MODES = {
    FUN: 'fun',
    CUIR: 'cuir',
    AGROU: 'agrou',
    TACOS: 'tacos',
    TORTUE: 'tortue',
    PLANCK: 'planck'
};

const MODE_CONFIG = {
    [MODES.FUN]: {
        label: 'fun',
        activeText: 'DESACTIVER LE FUUUUUUN',
        inactiveText: 'activer le fun',
        image: tabouretFun,
        cssClass: 'body-alternate-lgbt',
        cssAnimation: 'fun-image'
    },
    [MODES.CUIR]: {
        label: 'cuir',
        activeText: 'desactiver le cuir',
        inactiveText: 'activer le cuir',
        image: tabouretBdsm,
        cssClass: 'body-alternate-cuir',
        cssAnimation: ''
    },
    [MODES.AGROU]: {
        label: 'agrou',
        activeText: 'desactiver les furrys',
        inactiveText: 'activer le agrou',
        image: tabouretFurr,
        cssClass: 'body-alternate-lgbt',
        cssAnimation: ''
    },
    [MODES.TACOS]: {
        label: 'tacos',
        activeText: 'Vomir le tabouret cordon bleu',
        inactiveText: 'Commander un tabouret cordon bleu',
        image: tabouretnoFun,
        cssClass: 'body-alternate-tacos',
        cssAnimation: ''
    },
    [MODES.TORTUE]: {
        label: 'tortue',
        activeText: 'Dire au revoir à Berth',
        inactiveText: 'Dire bonjour à Berth',
        image: tabouretBerth,
        cssClass: 'body-alternate-tortue',
        cssAnimation:''
    },
    [MODES.PLANCK]: {
        label: 'plancker',
        activeText: 'Sortir de la cave',
        inactiveText: 'Entrer dans les backrooms',
        image: tabouretPlanck,
        cssClass: 'body-altenate-planck',
        cssAnimation:''
    }
};

const GRADIENTS = [
  "linear-gradient(315deg, #732982, #732982, #24408E, #24408E, #008026, #008026, #FFED00, #FFED00, #FF8C00, #FF8C00, #E40303, #E40303)",
  "linear-gradient(315deg, #0032a0, #0032a0, #8c4799, #8c4799, #ff0080, #ff0080)",
  "linear-gradient(315deg, #21B1FF, #21B1FF, #FFD800, #FFD800, #FF218C, #FF218C)",
  "linear-gradient(315deg, #5BCEFA, #5BCEFA, #F5A9B8, #F5A9B8, #ffffff, #ffffff, #F5A9B8, #F5A9B8, #5BCEFA , #5BCEFA)",
  "linear-gradient(315deg, #732982, #732982, #24408E, #24408E, #008026, #008026, #FFED00, #FFED00, #FF8C00, #FF8C00, #E40303, #E40303, #000000, #000000, #613915, #613915, #74D7EE, #74D7EE, #FFAFC8, #FFAFC8, #FFFFFF, #FFFFFF)",
  "linear-gradient(315deg, #000000, #000000, #9c5cd4, #9c5cd4, #ffffff, #ffffff, #fddb00, #fddb00)",
  "linear-gradient(315deg, #2F3CBE, #2F3CBE, #000000, #000000, #C011D7, #C011D7, #FFFFFF, #FFFFFF, #FF76A4, #FF76A4)"
];

const Tabouret = () => {
  const [activeMode, setActiveMode] = useState(null);

  // Appliquer un gradient aléatoire et gérer la classe CSS
    useEffect(() => {
        const randomGradient = GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)];
        document.body.style.setProperty('--main-gradient', randomGradient);

        const cssClass = activeMode ? MODE_CONFIG[activeMode].cssClass : 'body';
        document.body.className = cssClass;
    }, [activeMode]);

    const handleModeToggle = (mode) => {
        setActiveMode(activeMode === mode ? null : mode);
    };

    const getDisplayImage = () => {
        if (activeMode === MODES.FUN) return tabouretFun;
        if (activeMode === MODES.CUIR) return tabouretBdsm;
        if (activeMode === MODES.AGROU) return tabouretFurr;
        if (activeMode == MODES.TORTUE) return tabouretBerth;
        if (activeMode == MODES.PLANCK) return tabouretPlanck;
        return tabouretnoFun;
    };

    const getAnimation = () => {
        if (!activeMode) return 'no-fun-image';
        const animation = MODE_CONFIG[activeMode].cssAnimation;
        return animation || 'no-fun-image';
    };

  const renderModeButton = (mode) => {
    const config = MODE_CONFIG[mode];
    const isActive = activeMode === mode;

    return (
      <div key={mode} className='menu'>
            <p className={isActive ? 'fun-texte' : 'no-fun-texte'}>
                {isActive ? config.activeText : config.inactiveText}
            </p>
        <label className="switch">
          <input 
            type="checkbox" 
            onChange={() => handleModeToggle(mode)} 
            checked={isActive} 
          />
          <span className="slider"></span>
        </label>
      </div>
    );
  };

    return (
    <>
        <div className={activeMode === MODES.FUN ? 'box' : 'noball'}>
            <img 
            src={activeMode === MODES.FUN ? tabouretFun : tabouretnoFun} 
            className={activeMode === MODES.FUN ? 'fun-image' : 'no-fun-image'} 
            alt="Tabouret" 
            />
        </div>
        
        <div className='button_menu'>
            {Object.values(MODES).map(mode => renderModeButton(mode))}
        </div>

        <div className={activeMode === MODES.TORTUE ? 'tutel-cadre':''}>
            {activeMode === MODES.TACOS ? <img src={tacosImage} className='tacos'></img>:<></>}
            <img 
                src={getDisplayImage()} 
                className={getAnimation()} 
                alt="Tabouret" 
            />
        </div>
        {activeMode === MODES.TORTUE ? <h1 className='tutel-text'>Tutel</h1>:<></>}
    </>
    );
};

export default Tabouret;
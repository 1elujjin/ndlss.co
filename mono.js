

// Ce fichier permet de faire toutes sortes de choses un peu magiques
// après qu'une page est chargé : il fait apparaître les modals,
// fait disparaître le menu, fait bouger tout seul des éléments, etc.

'use strict';



/**
* Import des modules
*/

// Import les effets
import * as eTextScramble from './assets/js/effects/_e-text-scramble.js';
import * as eTransition from './effets/_e-transition.js';
import * as eOneByOne from './effets/_e-one-by-one.js';
import * as eAfs from './effets/_e-adjustfontsize.js';
import * as eDenko from './effets/_e-denko.js';
import * as eNow from './effets/_e-now.js';

// Import les modules
import * as mToast from './modules/_m-toast.js';
import * as mVolet from './modules/_m-volet.js';
import * as mInputChecker from './modules/_m-input-checker.js';
import * as mFormAutosave from './modules/_m-form-autosave.js';
import * as mFormChecker from './modules/_m-form-checker.js';
import * as mFormTextarea from './modules/_m-form-textarea.js';
import * as mFormNumber from './modules/_m-form-number.js';
import * as mFormSelect from './modules/_m-form-select.js';
import * as mFormLabel from './modules/_m-form-label.js';
import * as mFormPass from './modules/_m-form-pass.js';

// Import les parts
import * as pProject from './parts/_p-project.js';
import * as pBest from './parts/_p-best.js';
import * as pSlide from './parts/_p-slide.js';

// Import les layouts
import * as lFrtpge from './layouts/_l-frtpge.js';
import * as lHeader from './layouts/_l-header.js';
import * as lLogin from './layouts/_l-login.js';
import * as lGrid from './layouts/_l-grid.js';
import * as lUser from './layouts/_l-user.js';

// Import les fonctions de base
import * as bClipboard from './base/_b-clipboard.js';
import * as bWindow from './base/_b-window.js';
import * as bVar from './base/_b-var.js';
import * as bVarMb from './base/_b-varmb.js';
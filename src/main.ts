
import  '@material/web/all';
import {MdIconButton,MdDialog} from '@material/web/all';
import { deepCopy } from './deepCopy';

const $ = (arg: string) => document.querySelector(arg);

const openDialog1 = $('#open-dialog-1') as MdIconButton;
const openDialog2 = $('#open-dialog-2') as MdIconButton;
const myDialog1 = $('#my-dialog-1') as MdDialog;
const myDialog2 = $('#my-dialog-2') as MdDialog;

openDialog1.onclick = () => {
  myDialog1.show();
};

openDialog2.onclick = () => {
  myDialog2.show();
};
let myDialog2OpenAnimation = myDialog2.getOpenAnimation()
myDialog2OpenAnimation = deepCopy(myDialog2OpenAnimation)
myDialog2OpenAnimation.dialog![0][0] = [
  { transform: 'translateX(-100%)' },
  { transform: 'translateX(0)' },
];
myDialog2OpenAnimation.container![1][0] = [
  { width: '0%' },
  { width: '100%' },
];
myDialog2.getOpenAnimation=()=>myDialog2OpenAnimation


let myDialog2CloseAnimation = myDialog2.getCloseAnimation()
myDialog2CloseAnimation = deepCopy(myDialog2CloseAnimation)

myDialog2CloseAnimation.dialog![0][0] = [
  { transform: 'translateX(0)' },
  { transform: 'translateX(-100%)' },
];
myDialog2CloseAnimation.container![0][0] = [
  { width: '100%' },
  { width: '0%' },
];
myDialog2.getCloseAnimation=()=>myDialog2CloseAnimation
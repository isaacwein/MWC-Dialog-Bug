
import  '@material/web/all';
import {MdIconButton,MdDialog} from '@material/web/all';

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

myDialog2.getOpenAnimation().dialog![0][0] = [
  { transform: 'translateX(-100%)' },
  { transform: 'translateX(0)' },
];
myDialog2.getOpenAnimation().container![1][0] = [
  { width: '0%' },
  { width: '100%' },
];

myDialog2.getCloseAnimation().dialog![0][0] = [
  { transform: 'translateX(0)' },
  { transform: 'translateX(-100%)' },
];
myDialog2.getCloseAnimation().container![0][0] = [
  { width: '100%' },
  { width: '0%' },
];

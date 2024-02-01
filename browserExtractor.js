arr=[];
for(i=0;i<document.getElementsByClassName('iHxmLe').length;i++){
  arr.push(document.getElementsByClassName('iHxmLe')[i].firstChild.href);
};
arr.reduce((acc, cur)=>{return acc+'\n'+cur}); 
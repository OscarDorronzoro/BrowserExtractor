arr = [];
iter = document.getElementsByClassName('elementor-cta__bg elementor-bg lazyloaded');
for(i=0; i<iter.length; i++) {
  ori = iter[i].getAttribute("data-bg-image");
	mod = ori.split('(')[1].split(')')[0];
	arr.push(mod);
};
arr.reduce((acc, cur)=>{return acc+'\n'+cur});

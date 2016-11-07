			function starMove(obj,attr,iTarget,fn){
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					var iCur=0;
					if (attr === "opacity") {
			            iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			        } else { 
			            iCur = parseInt(getStyle(obj, attr));
			        }
					var speed=(iTarget-iCur)/7;
					speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
					if(iCur==iTarget){
						clearInterval(obj.timer)
						if(fn){
							fn()
						}
					}else{
						if(attr === "opacity"){
							obj.style.filter = "alpha(opacity:" + (iCur + speed) + ")"; 
                			obj.style.opacity = (iCur + speed) / 100;
						}else{
							obj.style[attr]=parseInt(getStyle(obj,attr))+speed+'px'
						}
					}
				},30)
			}
			function getStyle(obj,attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr]
				}else{
					return getComputedStyle(obj,false)[attr]
				}
			}


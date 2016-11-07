		function starMove(obj,json,fn){
				var flag=true;
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					for(var attr in json){
						var iCur=0;
						if (attr === "opacity") {
				            iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
				        } else { 
				            iCur = parseInt(getStyle(obj, attr));
				        }
						var speed=(json[attr]-iCur)/7;
						speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
						if(iCur != json[attr]){
							flag=false;
							if(attr === "opacity"){
								obj.style.filter = "alpha(opacity:" + (iCur + speed) + ")"; 
	                			obj.style.opacity = (iCur + speed) / 100;
							}else{
								obj.style[attr]=parseInt(getStyle(obj,attr))+speed+'px'
							}
						}else{
							flag=true;
						}
						if(flag){
							clearInterval(obj.timer);
							if(fn){
								fn();
							}
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

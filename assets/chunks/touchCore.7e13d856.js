class u{getPoint(t,n){return{x:Math.round(t.touches[n].pageX),y:Math.round(t.touches[n].pageY)}}getVector(t,n){return{x:Math.round(t.x-n.x),y:Math.round(t.y-n.y)}}getLength(t){return Math.sqrt(t.x*t.x+t.y*t.y)}getAngle(t,n){const o=t.x*n.y-n.x*t.y>0?1:-1,s=this.getLength(t),a=this.getLength(n),e=s*a;if(e===0)return 0;let r=(t.x*n.x+t.y*n.y)/e;return r>1&&(r=1),r<-1&&(r=-1),Math.acos(r)*o*180/Math.PI}matrixTo(t){const n=t.replace("matrix(","").replace(")","").split(","),o=+n[0],a=+n[1]/o,e=Math.atan(a)*180/Math.PI,c=o/Math.cos(Math.PI/180*e);return{x:parseInt(n[4]),y:parseInt(n[5]),scale:c,rotate:e}}}export{u as T};
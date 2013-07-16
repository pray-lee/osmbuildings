var OSMBuildings=function(){function La(a,d){var b=a.x-d.x,c=a.y-d.y;return b*b+c*c}function rb(a){for(var d=0,b=0,c=0,e=a.length-3;c<e;c+=2)d+=a[c],b+=a[c+1];a=(a.length-2)/2;return{x:d/a<<0,y:b/a<<0}}function ua(a,d){var b={};a/=Z;d/=Z;b[sb]=0>=d?90:1<=d?-90:Ma*(2*tb(ub(N*(1-2*d)))-O);b[vb]=360*(1===a?1:(a%1+1)%1)-180;return b}function Na(a,d,b){function c(a){if("XDomainRequest"in window&&a!==e.readyState&&(e.readyState=a,e.onreadystatechange))e.onreadystatechange()}a=a.replace(/\{ *([\w_]+) *\}/g,
function(a,b){return d[b]||a});var e="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;e.onerror=function(){e.status=500;e.statusText="Error";c(4)};e.ontimeout=function(){e.status=408;e.statusText="Timeout";c(4)};e.onprogress=function(){c(3)};e.onload=function(){e.status=200;e.statusText="Ok";c(4)};e.onreadystatechange=function(){4===e.readyState&&e.status&&!(200>e.status||299<e.status)&&b&&e.responseText&&b(JSON.parse(e.responseText))};c(0);e.open("GET",a);c(1);e.send(null);c(2);return e}
function P(){$.render();fa.render();Oa()}function Oa(){j.clearRect(0,0,A,y);if(!(E<ga||ha)){var a,d,b,c,e,f,h,g=fa.MAX_HEIGHT,k={x:Q+u,y:R+v},r=u,m=u+A,s=v,l=v+y,q,va,n,p,x;z.sort(function(a,b){return La(b.center,k)/b.height-La(a.center,k)/a.height});a=0;for(d=z.length;a<d;a++)if(e=z[a],!(e.height+e.roofHeight<=g)){f=!1;q=e.footprint;b=0;for(c=q.length-1;b<c;b+=2)f||(f=q[b]>r&&q[b]<m&&q[b+1]>s&&q[b+1]<l);if(f)if(b=1>e.scale?e.height*e.scale:e.height,f=F/(F-b),h=c=0,e.minHeight&&(c=1>e.scale?e.minHeight*
e.scale:e.minHeight,h=F/(F-c)),n=e.wallColor||wa,p=e.altColor||ia,x=e.roofColor||aa,j.strokeStyle=p,"cylinder"===e.shape)q=Pa({x:e.center.x-u,y:e.center.y-v},e.radius,b,c,n,p),"cylinder"===e.roofShape&&(q=Pa({x:e.center.x-u,y:e.center.y-v},e.radius,b+e.roofHeight,b,x)),j.fillStyle=x,e=q.c,f=q.r,j.beginPath(),j.arc(e.x,e.y,f,0,2*N),j.stroke(),j.fill();else{q=Qa(q,f,h,n,p);va=[];if(e.holes){b=0;for(c=e.holes.length;b<c;b++)va[b]=Qa(e.holes[b],f,h,n,p)}j.fillStyle=x;Ra(q,!0,va)}}}}function Qa(a,d,b,
c,e){for(var f={x:0,y:0},h={x:0,y:0},g,k,r=[],m=0,s=a.length-3;m<s;m+=2)f.x=a[m]-u,f.y=a[m+1]-v,h.x=a[m+2]-u,h.y=a[m+3]-v,g=S(f.x,f.y,d),k=S(h.x,h.y,d),b&&(f=S(f.x,f.y,b),h=S(h.x,h.y,b)),(h.x-f.x)*(g.y-f.y)>(g.x-f.x)*(h.y-f.y)&&(j.fillStyle=f.x<h.x&&f.y<h.y||f.x>h.x&&f.y>h.y?e:c,Ra([h.x,h.y,f.x,f.y,g.x,g.y,k.x,k.y])),r[m]=g.x,r[m+1]=g.y;return r}function Ra(a,d,b){if(a.length){var c,e,f,h;j.beginPath();j.moveTo(a[0],a[1]);c=2;for(e=a.length;c<e;c+=2)j.lineTo(a[c],a[c+1]);if(b){c=0;for(e=b.length;c<
e;c++){a=b[c];j.moveTo(a[0],a[1]);f=2;for(h=a.length;f<h;f+=2)j.lineTo(a[f],a[f+1])}}j.closePath();d&&j.stroke();j.fill()}}function S(a,d,b){return{x:(a-Q)*b+Q<<0,y:(d-R)*b+R<<0}}function Pa(a,d,b,c,e,f){var h=F/(F-b);b=S(a.x,a.y,h);var h=d*h,g;c&&(c=F/(F-c),a=S(a.x,a.y,c),d*=c);if(g=Sa(a,d,b,h))c=ja(g[0].y1-a.y,g[0].x1-a.x),g=ja(g[1].y1-a.y,g[1].x1-a.x),f||(f=J.parse(e),f=""+f.setLightness(0.8)),j.fillStyle=e,j.beginPath(),j.arc(b.x,b.y,h,O,c,!0),j.arc(a.x,a.y,d,c,O),j.closePath(),j.fill(),j.fillStyle=
f,j.beginPath(),j.arc(b.x,b.y,h,g,O,!0),j.arc(a.x,a.y,d,O,g),j.closePath(),j.fill();return{c:b,r:h}}function Sa(a,d,b,c){var e=a.x-b.x,f=a.y-b.y,h=d-c,g=e*e+f*f;if(!(g<=h*h)){var g=Ta(g),e=-e/g,f=-f/g,h=h/g,g=[],k,r,m;k=Ta(T(0,1-h*h));for(var s=1;-1<=s;s-=2)r=e*h-s*k*f,m=f*h+s*k*e,g.push({x1:a.x+d*r<<0,y1:a.y+d*m<<0,x2:b.x+c*r<<0,y2:b.y+c*m<<0});return g}}function Ua(a){A=a.w;y=a.h;ba=A/2<<0;Va=y/2<<0;Q=ba;R=y;ka.setSize(A,y);xa=F-50}function Wa(a){E=a;Z=wb<<E;a=E;var d=ga,b=ya;a=ca(T(a,d),b);B=1-
ca(T(0+0.3*((a-d)/(b-d)),0),0.3);wa=K.setAlpha(B)+"";ia=la.setAlpha(B)+"";aa=U.setAlpha(B)+""}var Xa=Xa||Array,Ya=Ya||Array,w=Math,ub=w.exp,xb=w.log,yb=w.sin,zb=w.cos,Za=w.tan,tb=w.atan,ja=w.atan2,ca=w.min,T=w.max,Ta=w.sqrt,$a=w.ceil,ab=w.floor,Ab=w.round,bb=document,J,cb=function(a){var d,b,c;if(0===a.s)d=b=c=a.l;else{c=0.5>a.l?a.l*(1+a.s):a.l+a.s-a.l*a.s;var e=2*a.l-c;a.h/=360;d=za(e,c,a.h+1/3);b=za(e,c,a.h);c=za(e,c,a.h-1/3)}return new G(255*d<<0,255*b<<0,255*c<<0,a.a)},za=function(a,d,b){0>b&&
(b+=1);1<b&&(b-=1);return b<1/6?a+6*(d-a)*b:0.5>b?d:b<2/3?a+6*(d-a)*(2/3-b):a},G=function(a,d,b,c){this.r=a;this.g=d;this.b=b;this.a=4>arguments.length?1:c},Bb={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",
cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",
floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",
lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",
mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",
seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Aa=G.prototype;Aa.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join()+")"};Aa.setLightness=
function(a){var d=G.toHSLA(this);d.l*=a;d.l=Math.min(1,Math.max(0,d.l));return cb(d)};Aa.setAlpha=function(a){return new G(this.r,this.g,this.b,this.a*a)};G.parse=function(a){var d;a+="";a=Bb[a]||a;if(~a.indexOf("#")&&(d=a.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/)))return new G(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16),d[4]?parseInt(d[4],16)/255:1);if(d=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new G(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),d[4]?parseFloat(d[5]):
1);if(d=a.match(/hsla?\(([\d.]+)\D+([\d.]+)\D+([\d.]+)(\D+([\d.]+))?\)/))return cb({h:parseInt(d[1],10),s:parseFloat(d[2]),l:parseFloat(d[3]),a:d[4]?parseFloat(d[5]):1})};G.toHSLA=function(a){var d=a.r/255,b=a.g/255,c=a.b/255,e=Math.max(d,b,c),f=Math.min(d,b,c),h,g=(e+f)/2,k;if(e===f)h=f=0;else{k=e-f;f=0.5<g?k/(2-e-f):k/(e+f);switch(e){case d:h=(b-c)/k+(b<c?6:0);break;case b:h=(c-d)/k+2;break;case c:h=(d-b)/k+4}h/=6}return{h:360*h,s:f,l:g,a:a.a}};J=G;var db,V=Math,Ba=V.PI,t=V.sin,H=V.cos,eb=V.tan,
fb=V.asin,gb=V.atan2,L=Ba/180,ma=23.4397*L;db=function(a,d,b){b=L*-b;d*=L;a=a.valueOf()/864E5-0.5+2440588-2451545;var c=L*(357.5291+0.98560028*a),e=L*(1.9148*t(c)+0.02*t(2*c)+3E-4*t(3*c)),e=c+e+102.9372*L+Ba,c=fb(t(0)*H(ma)+H(0)*t(ma)*t(e)),e=gb(t(e)*H(ma)-eb(0)*t(ma),H(e));b=L*(280.16+360.9856235*a)-b-e;return{altitude:fb(t(d)*t(c)+H(d)*H(c)*H(b)),azimuth:gb(t(b),H(b)*t(d)-eb(c)*H(d))-Ba/2}};var jb=function(a,d){var b,c,e,f,h=0,g,k;g=0;for(k=a.length-3;g<k;g+=2)b=a[g],c=a[g+1],e=a[g+2],f=a[g+3],
h+=b*f-e*c;if((0<h/2?hb:ib)===d)return a;b=[];for(c=a.length-2;0<=c;c-=2)b.push(a[c],a[c+1]);return b},l={DEFAULT_HEIGHT:5},hb="CW",ib="CCW";l.windOuterPolygon=function(a){return jb(a,hb)};l.windInnerPolygon=function(a){return jb(a,ib)};l.YARD_TO_METER=0.9144;l.FOOT_TO_METER=0.3048;l.INCH_TO_METER=0.0254;l.METERS_PER_LEVEL=3;l.toMeters=function(a){a=""+a;var d=parseFloat(a);return d===a||~a.indexOf("m")?d<<0:~a.indexOf("yd")?d*l.YARD_TO_METER<<0:~a.indexOf("ft")?d*l.FOOT_TO_METER<<0:~a.indexOf("'")?
(a=a.split("'"),a[0]*l.FOOT_TO_METER+a[1]*l.INCH_TO_METER<<0):d<<0};l.getRadius=function(a){for(var d=90,b=-90,c=0,e=a.length;c<e;c+=2)d=ca(d,a[c]),b=T(b,a[c]);return Ab(6378137*((b-d)/Ma)/2)};var Cb={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},Db={asphalt:"tar_paper",
bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"};l.getMaterialColor=function(a){a=a.toLowerCase();return"#"===a[0]?
a:Cb[Db[a]||a]||null};var kb,lb=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},Da=function(a){if(a){for(var d=[],b,c=0,e=a.length;c<e;c++)b=Ca[a[c]],d.push(b[0],b[1]);d[d.length-2]!==d[0]&&d[d.length-1]!==d[1]&&d.push(d[0],d[1]);if(!(8>d.length))return d}},Eb=function(a,d){for(var b in d)a[b]||(a[b]=d[b]);return a},Ea=function(a,d){var b={},c=a.tags;a.id&&(b.id=a.id);d&&(b.footprint=l.windOuterPolygon(d));c.height&&(b.height=l.toMeters(c.height));
!b.height&&c["building:height"]&&(b.height=l.toMeters(c["building:height"]));!b.height&&c.levels&&(b.height=c.levels*l.METERS_PER_LEVEL<<0);!b.height&&c["building:levels"]&&(b.height=c["building:levels"]*l.METERS_PER_LEVEL<<0);c.min_height&&(b.minHeight=l.toMeters(c.min_height));!b.minHeight&&c["building:min_height"]&&(b.minHeight=l.toMeters(c["building:min_height"]));!b.minHeight&&c.min_level&&(b.minHeight=c.min_level*l.METERS_PER_LEVEL<<0);!b.minHeight&&c["building:min_level"]&&(b.minHeight=c["building:min_level"]*
l.METERS_PER_LEVEL<<0);c["building:material"]&&(b.wallColor=l.getMaterialColor(c["building:material"]));c["building:facade:material"]&&(b.wallColor=l.getMaterialColor(c["building:facade:material"]));c["building:cladding"]&&(b.wallColor=l.getMaterialColor(c["building:cladding"]));c["building:color"]&&(b.wallColor=c["building:color"]);c["building:colour"]&&(b.wallColor=c["building:colour"]);c["roof:material"]&&(b.roofColor=l.getMaterialColor(c["roof:material"]));c["building:roof:material"]&&(b.roofColor=
l.getMaterialColor(c["building:roof:material"]));c["roof:color"]&&(b.roofColor=c["roof:color"]);c["roof:colour"]&&(b.roofColor=c["roof:colour"]);c["building:roof:color"]&&(b.roofColor=c["building:roof:color"]);c["building:roof:colour"]&&(b.roofColor=c["building:roof:colour"]);b.height=b.height||l.DEFAULT_HEIGHT;if("dome"===c["roof:shape"]||"cylinder"===c["building:shape"]||"sphere"===c["building:shape"])b.shape="cylinder",b.radius=l.getRadius(b.footprint),"dome"===c["roof:shape"]&&c["roof:height"]&&
(b.roofShape="cylinder",b.roofHeight=l.toMeters(c["roof:height"]),b.height=T(0,b.height-b.roofHeight));return b},Ca,da,na;kb=function(a){Ca={};da={};na=[];for(var d,b=0,c=a.length;b<c;b++)switch(d=a[b],d.type){case "node":Ca[d.id]=[d.lat,d.lon];break;case "way":if(lb(d)){var e=void 0,e=void 0;if(e=Da(d.nodes))e=Ea(d,e),na.push(e)}else if(e=d.tags,!e||!e.highway&&!e.railway&&!e.landuse)da[d.id]=d;break;case "relation":var f=d,h=void 0,g=void 0;d=[];var k=g=void 0,r=void 0,e=void 0;if(k=lb(f)&&!("multipolygon"!==
f.tags.type&&"building"!==f.tags.type)){for(var h=f.members,g=k=void 0,r=[],m=0,s=h.length;m<s;m++)k=h[m],"way"===k.type&&da[k.ref]&&(!k.role||"outer"===k.role?g=da[k.ref]:("inner"===k.role||"enclave"===k.role)&&r.push(da[k.ref]));h=g&&g.tags?{outer:g,inner:r}:void 0;k=h}if(k&&(k=Ea(f),g=h.outer))if(r=Da(g.nodes)){g=Ea(g,r);f=0;for(r=h.inner.length;f<r;f++)(e=Da(h.inner[f].nodes))&&d.push(l.windInnerPolygon(e));d.length&&(g.holes=d);na.push(Eb(g,k))}}return na};var N=Math.PI,O=N/2,Fb=N/4,Ma=180/N,
wb=256,sb="latitude",vb="longitude",A=0,y=0,ba=0,Va=0,u=0,v=0,E,Z,j,K=new J(200,190,180),la=K.setLightness(0.8),U=K.setLightness(1.2),wa=K+"",ia=la+"",aa=U+"",oa,B=1,ga=15,ya=20,xa,Q,R,F=450,ha,Fa=new Date,W={},ea={add:function(a,d){W[d||"__STATIC__"]={data:a,time:Date.now()}},get:function(a){a=a||"__STATIC__";return W[a]&&W[a].data},purge:function(){Fa.setMinutes(Fa.getMinutes()-5);for(var a in W)W[a].time<Fa&&"__STATIC__"!==a&&delete W[a]}},mb=function(a){for(var d,b,c=new Xa(a.length),e=0,f=a.length-
1;e<f;e+=2)d=a[e+1],b=ca(1,T(0,0.5-xb(Za(Fb+O*a[e]/180))/N/2)),d=(d/360+0.5)*Z<<0,b=b*Z<<0,c[e]=d,c[e+1]=b;a=c;c=a.length/2;e=new Ya(c);f=0;d=c-1;var h,g,k,r=[],m=[],s=[];for(e[f]=e[d]=1;d;){h=0;for(b=f+1;b<d;b++){g=a[2*b];var l=a[2*b+1],q=a[2*f],j=a[2*f+1],n=a[2*d],p=a[2*d+1],x=n-q,I=p-j,u=void 0;if(0!==x||0!==I)u=((g-q)*x+(l-j)*I)/(x*x+I*I),1<u?(q=n,j=p):0<u&&(q+=x*u,j+=I*u);x=g-q;I=l-j;g=x*x+I*I;g>h&&(k=b,h=g)}2<h&&(e[k]=1,r.push(f),m.push(k),r.push(k),m.push(d));f=r.pop();d=m.pop()}for(b=0;b<
c;b++)e[b]&&s.push(a[2*b],a[2*b+1]);c=s;if(!(8>c.length))return c},Gb=function(a){return function(d){Ga(d,a)}},Ga=function(a,d){if(a){var b;if("FeatureCollection"===a.type){b=a.features;var c,e,f,h,g,k,r=[],m,s,j,q,n;c=0;for(e=b.length;c<e;c++)if(m=b[c],"Feature"===m.type&&(n={},f=m.geometry,m=m.properties,"LineString"===f.type&&(h=s.length-1,s[0][0]===s[h][0]&&s[0][1]===s[h][1]&&(s=f.coordinates)),"Polygon"===f.type&&(s=f.coordinates),"MultiPolygon"===f.type&&(s=f.coordinates[0]),s)){j=s[0];g=[];
f=0;for(h=j.length;f<h;f++)g.push(j[f][1],j[f][0]);n.id=m.id||g[0]+","+g[1];n.footprint=l.windOuterPolygon(g);q=[];f=1;for(h=s.length;f<h;f++){j=s[f];q[f-1]=[];g=0;for(k=j.length;g<k;g++)q[f-1].push(j[g][1],j[g][0]);q[f-1]=l.windInnerPolygon(q[f-1])}q.length&&(n.holes=q);n.height=l.toMeters(m.height)||l.DEFAULT_HEIGHT;m.minHeight&&(n.minHeight=l.toMeters(m.minHeight));if(m.color||m.wallColor)n.wallColor=m.color||m.wallColor;m.roofColor&&(n.roofColor=m.roofColor);r.push(n)}b=r}else a.osm3s&&(b=kb(a.elements));
ea.add(b,d);Ha(b,!0)}},Ha=function(a,d){var b,c,e,f,h=[],g,k,r,m,j,l,n,p,u,v=ya-E,x=156412/Math.pow(2,E)/1.5;b=0;for(c=a.length;b<c;b++)if(g=a[b],k=g.height>>v,r=g.minHeight>>v,!(r>xa)&&(m=mb(g.footprint))){p=[];if(g.holes){e=0;for(f=g.holes.length;e<f;e++)(u=mb(g.holes[e]))&&p.push(u)}f=e=null;if(g.wallColor&&(j=J.parse(g.wallColor)))e=j.setAlpha(B),f=""+e.setLightness(0.8),e=""+e;l=null;if(g.roofColor&&(j=J.parse(g.roofColor)))l=""+j.setAlpha(B);n=g.roofHeight>>v;k<=r&&0>=n||h.push({id:g.id,footprint:m,
height:ca(k,xa),minHeight:r,wallColor:e,altColor:f,roofColor:l,roofShape:g.roofShape,roofHeight:n,center:rb(m),holes:p.length?p:null,shape:g.shape,radius:g.radius/x})}c=0;for(g=h.length;c<g;c++)b=h[c],pa[b.id]||(b.scale=d?0:1,z.push(b),pa[b.id]=1);oa||(oa=setInterval(function(){for(var a,b=!1,c=0,d=z.length;c<d;c++)a=z[c],1>a.scale&&(a.scale+=0.1,1<a.scale&&(a.scale=1),b=!0);P();b||(clearInterval(oa),oa=null)},33))},qa,Ia=!0,pa={},M={load:function(a){qa=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";
if(Ia=!/(.+\{[nesw]\}){4,}/.test(qa))ea.add(null),Na(qa,{},Ga);M.update()},update:function(){if(!(15>E)){z=[];pa={};var a,d,b,c;if(Ia)(b=ea.get(c))&&Ha(b);else{var e=ua(u,v);a=ua(u+A,v+y);var f=0.0075*$a(e.latitude/0.0075),h=0.015*$a(a.longitude/0.015);a=0.0075*ab(a.latitude/0.0075);for(e=0.015*ab(e.longitude/0.015);a<=f;a+=0.0075)for(d=e;d<=h;d+=0.015)c=a+","+d,(b=ea.get(c))?Ha(b):Na(qa,{n:(1E4*(a+0.0075)<<0)/1E4,e:(1E4*(d+0.015)<<0)/1E4,s:(1E4*a<<0)/1E4,w:(1E4*d<<0)/1E4},Gb(c));ea.purge()}}},set:function(a){Ia=
!0;z=[];pa={};Ga(a,null)}},z=[],$,X=function(a,d,b){return{x:a+ra.x*b,y:d+ra.y*b}},n,nb=!0,ob=new J(0,0,0),pb=null,ra={x:0,y:0},Ja={setContext:function(a){n=a;Ja.setDate((new Date).setHours(10))},enable:function(a){nb=!!a},render:function(){var a,d,b;n.clearRect(0,0,A,y);if(nb&&!(E<ga||ha))if(a=ua(u+ba,v+Va),a=db(pb,a.latitude,a.longitude),!(0>=a.altitude)){d=1/Za(a.altitude);b=0.4/d;ra.x=zb(a.azimuth)*d;ra.y=yb(a.azimuth)*d;ob.a=b;d=ob+"";var c,e,f,h,g,k,j,m,l,p,q,w,t;t=[];a=[];n.fillStyle=d;n.beginPath();
d=0;for(b=z.length;d<b;d++){f=z[d];m=!1;h=f.footprint;j=[];c=0;for(e=h.length-1;c<e;c+=2)j[c]=g=h[c]-u,j[c+1]=k=h[c+1]-v,m||(m=0<g&&g<A&&0<k&&k<y);if(m)if(h=1>f.scale?f.height*f.scale:f.height,g=0,f.minHeight&&(g=1>f.scale?f.minHeight*f.scale:f.minHeight),"cylinder"===f.shape)"cylinder"===f.roofShape&&(h+=f.roofHeight),t.push({shape:f.shape,center:{x:f.center.x-u,y:f.center.y-v},radius:f.radius,h:h,mh:g});else{f=null;c=0;for(e=j.length-3;c<e;c+=2)k=j[c],l=j[c+1],m=j[c+2],p=j[c+3],q=X(k,l,h),w=X(m,
p,h),g&&(l=X(k,l,g),p=X(m,p,g),k=l.x,l=l.y,m=p.x,p=p.y),(m-k)*(q.y-l)>(q.x-k)*(p-l)?(1===f&&n.lineTo(k,l),f=0,c||n.moveTo(k,l),n.lineTo(m,p)):(0===f&&n.lineTo(q.x,q.y),f=1,c||n.moveTo(q.x,q.y),n.lineTo(w.x,w.y));a.push(j)}}d=0;for(b=t.length;d<b;d++)if(f=t[d],"cylinder"===f.shape&&(c=f.center,e=f.radius,j=f.mh,h=X(c.x,c.y,f.h),f=g=void 0,j&&(c=X(c.x,c.y,j)),j=Sa(c,e,h,e)))g=ja(j[0].y1-c.y,j[0].x1-c.x),f=ja(j[1].y1-c.y,j[1].x1-c.x),n.moveTo(j[1].x2,j[1].y2),n.arc(h.x,h.y,e,f,g),n.arc(c.x,c.y,e,g,f);
n.fill();n.globalCompositeOperation="destination-out";n.beginPath();d=0;for(b=a.length;d<b;d++){t=a[d];n.moveTo(t[0],t[1]);c=2;for(e=t.length;c<e;c+=2)n.lineTo(t[c],t[c+1]);n.lineTo(t[0],t[1]);n.closePath()}n.fillStyle="#00ff00";n.fill();n.globalCompositeOperation="source-over"}},setDate:function(a){pb=a;Ja.render()}};$=Ja;var fa,C,qb={MAX_HEIGHT:8,setContext:function(a){C=a},render:function(){C.clearRect(0,0,A,y);if(!(E<ga||ha)){var a,d,b,c,e,f,h,g,j;C.beginPath();a=0;for(d=z.length;a<d;a++)if(b=
z[a],!(b.height+b.roofHeight>qb.MAX_HEIGHT)){j=!1;e=b.footprint;g=[];b=0;for(c=e.length-1;b<c;b+=2)g[b]=f=e[b]-u,g[b+1]=h=e[b+1]-v,j||(j=0<f&&f<A&&0<h&&h<y);if(j){b=0;for(c=g.length-3;b<c;b+=2)j=g[b],e=g[b+1],b?C.lineTo(j,e):C.moveTo(j,e);C.closePath()}}C.fillStyle=aa;C.strokeStyle=ia;C.stroke();C.fill()}}};fa=qb;var ka,Ka=function(){var a=bb.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=
0;var d=a.getContext("2d");d.lineCap="round";d.lineJoin="round";d.lineWidth=1;d.mozImageSmoothingEnabled=!1;d.webkitImageSmoothingEnabled=!1;sa.push(a);D.appendChild(a);return d},D=bb.createElement("DIV");D.style.pointerEvents="none";D.style.position="absolute";D.style.left=0;D.style.top=0;var sa=[];$.setContext(Ka());fa.setContext(Ka());j=Ka();ka={appendTo:function(a){a.appendChild(D)},remove:function(){D.parentNode.removeChild(D)},setSize:function(a,d){for(var b=0,c=sa.length;b<c;b++)sa[b].width=
a,sa[b].height=d},setPosition:function(a,d){D.style.left=a+"px";D.style.top=d+"px"}};var Y=OpenLayers.Layer.prototype,ta=function(a){this.offset={x:0,y:0};Y.initialize.call(this,this.name,{projection:"EPSG:900913"});a.addLayer(this)},p=ta.prototype=new OpenLayers.Layer;p.name="OSM Buildings";p.attribution='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';p.isBaseLayer=!1;p.alwaysInRange=!0;p.setOrigin=function(){var a=this.map,d=a.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),a=a.resolution,
b=this.maxExtent,c=(b.top-d.lat)/a<<0;u=(d.lon-b.left)/a<<0;v=c};p.setMap=function(a){this.map||Y.setMap.call(this,a);ka.appendTo(this.div);ya=a.baseLayer.numZoomLevels;Ua(a.size);Wa(a.zoom);this.setOrigin();M.update();P()};p.removeMap=function(a){ka.remove();Y.removeMap.call(this,a);this.map=null};p.onMapResize=function(){var a=this.map;Y.onMapResize.call(this);Ua(a.size.w,a.size.h);P();M.update()};p.moveTo=function(a,d,b){var c=this.map;a=Y.moveTo.call(this,a,d,b);if(!b){b=parseInt(c.layerContainerDiv.style.left,
10);var e=parseInt(c.layerContainerDiv.style.top,10);this.div.style.left=-b+"px";this.div.style.top=-e+"px"}this.setOrigin();this.offset.x=0;this.offset.y=0;b=this.offset;Q=ba+b.x;R=y+b.y;d?(d=c.zoom,ha=!1,Wa(d),M.update(),P()):(P(),M.update());return a};p.moveByPx=function(a,d){this.offset.x+=a;this.offset.y+=d;var b=Y.moveByPx.call(this,a,d),c=this.offset;Q=ba+c.x;R=y+c.y;Oa();return b};p.setStyle=function(a){a=a||{};if(a.color||a.wallColor)K=J.parse(a.color||a.wallColor),wa=K.setAlpha(B)+"",la=
K.setLightness(0.8),ia=la.setAlpha(B)+"",U=K.setLightness(1.2),aa=U.setAlpha(B)+"";a.roofColor&&(U=J.parse(a.roofColor),aa=U.setAlpha(B)+"");void 0!==a.shadows&&$.enable(a.shadows);P();return this};p.setDate=function(a){$.setDate(a);return this};p.loadData=function(a){M.load(a);return this};p.setData=function(a){M.set(a);return this};ta.VERSION="0.1.8a";ta.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return ta}();

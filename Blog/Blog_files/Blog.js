// Created by iWeb 2.0.3 local-build-20220926

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,166),url:'Blog_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Blog_files/stroke_1.png'},{rect:new IWRect(1,-1,221,2),url:'Blog_files/stroke_2.png'},{rect:new IWRect(222,-1,2,2),url:'Blog_files/stroke_3.png'},{rect:new IWRect(222,1,2,166),url:'Blog_files/stroke_4.png'},{rect:new IWRect(222,167,2,1),url:'Blog_files/stroke_5.png'},{rect:new IWRect(1,167,221,1),url:'Blog_files/stroke_6.png'},{rect:new IWRect(-1,167,2,1),url:'Blog_files/stroke_7.png'}],new IWSize(223,167)),shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(1.2856,1.5321),color:'#ffffff',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://picelboi.cf/Site/Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Blog_files/BlogMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');detectBrowser();adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}

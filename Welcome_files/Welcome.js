// Created by iWeb 2.0.3 local-build-20220926

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(1.9682,2.2641),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,166),url:'Welcome_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(1,-1,223,2),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(224,-1,2,2),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(224,1,2,166),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(224,167,2,2),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(1,167,223,2),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-1,167,2,2),url:'Welcome_files/stroke_7.png'}],new IWSize(225,168))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id7');applyEffects()}
function onPageUnload()
{Widget.onunload();}

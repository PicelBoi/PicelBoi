// Created by iWeb 3.0 local-build-20221008

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,203),url:'Videos_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Videos_files/stroke_1.png'},{rect:new IWRect(5,-5,245,10),url:'Videos_files/stroke_2.png'},{rect:new IWRect(250,-5,10,10),url:'Videos_files/stroke_3.png'},{rect:new IWRect(250,5,10,203),url:'Videos_files/stroke_4.png'},{rect:new IWRect(250,208,10,10),url:'Videos_files/stroke_5.png'},{rect:new IWRect(5,208,245,10),url:'Videos_files/stroke_6.png'},{rect:new IWRect(-5,208,10,10),url:'Videos_files/stroke_7.png'}],new IWSize(255,213))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Videos_files/VideosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}

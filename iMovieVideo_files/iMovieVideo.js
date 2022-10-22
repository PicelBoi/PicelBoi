// Created by iWeb 2.0.3 local-build-20220926

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="320" height="256" style="height: 256px; left: 189px; position: absolute; top: 70px; width: 320px; z-index: 1; "><param name="src" value="Media/kirby.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="320" height="256" style="height: 256px; left: 189px; position: absolute; top: 70px; width: 320px; z-index: 1; "><param name="src" value="iMovieVideo_files/kirby.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/kirby.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="320" height="256" data="Media/kirby.mov" style="height: 256px; left: 189px; position: absolute; top: 70px; width: 320px; z-index: 1; "><param name="src" value="Media/kirby.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('iMovieVideo_files/iMovieVideoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id6');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}

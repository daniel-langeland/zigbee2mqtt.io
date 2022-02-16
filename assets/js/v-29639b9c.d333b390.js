"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[32389],{14650:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-29639b9c",path:"/devices/TS0601_air_quality_sensor.html",title:"TuYa TS0601_air_quality_sensor control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0601_air_quality_sensor control via MQTT",description:"Integrate your TuYa TS0601_air_quality_sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Co2 (numeric)",slug:"co2-numeric",children:[]},{level:3,title:"Voc (numeric)",slug:"voc-numeric",children:[]},{level:3,title:"Formaldehyd (numeric)",slug:"formaldehyd-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0601_air_quality_sensor.md",git:{updatedTime:164504413e4}}},67912:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var o=i(66252);const a=(0,o.uE)('<h1 id="tuya-ts0601-air-quality-sensor" tabindex="-1"><a class="header-anchor" href="#tuya-ts0601-air-quality-sensor" aria-hidden="true">#</a> TuYa TS0601_air_quality_sensor</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0601_air_quality_sensor</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Air quality sensor</td></tr><tr><td>Exposes</td><td>temperature, humidity, co2, voc, formaldehyd, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0601_air_quality_sensor.jpg" alt="TuYa TS0601_air_quality_sensor"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),r=(0,o.Uk)("How to use device type specific configuration"),d=(0,o.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>co2_precision</code>: Number of digits after decimal point for co2, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voc_precision</code>: Number of digits after decimal point for voc, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voc_calibration</code>: Calibrates the voc value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>formaldehyd_precision</code>: Number of digits after decimal point for formaldehyd, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>formaldehyd_calibration</code>: Calibrates the formaldehyd value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pm25_precision</code>: Number of digits after decimal point for pm25, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>pm25_calibration</code>: Calibrates the pm25 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric" aria-hidden="true">#</a> Co2 (numeric)</h3><p>The measured CO2 (carbon dioxide) value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="voc-numeric" tabindex="-1"><a class="header-anchor" href="#voc-numeric" aria-hidden="true">#</a> Voc (numeric)</h3><p>Measured VOC value. Value can be found in the published state on the <code>voc</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppb</code>.</p><h3 id="formaldehyd-numeric" tabindex="-1"><a class="header-anchor" href="#formaldehyd-numeric" aria-hidden="true">#</a> Formaldehyd (numeric)</h3><p>The measured formaldehyd value. Value can be found in the published state on the <code>formaldehyd</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),u={},c=(0,i(83744).Z)(u,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[r])),_:1})])]),d],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);
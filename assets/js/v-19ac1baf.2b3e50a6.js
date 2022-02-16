"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42173],{84609:(e,i,t)=>{t.r(i),t.d(i,{data:()=>n});const n={key:"v-19ac1baf",path:"/devices/RTCZCGQ11LM.html",title:"Xiaomi RTCZCGQ11LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi RTCZCGQ11LM control via MQTT",description:"Integrate your Xiaomi RTCZCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2022-01-31T17:42:44.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Adapter firmware",slug:"adapter-firmware",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Presence (binary)",slug:"presence-binary",children:[]},{level:3,title:"Presence_event (enum)",slug:"presence-event-enum",children:[]},{level:3,title:"Monitoring_mode (enum)",slug:"monitoring-mode-enum",children:[]},{level:3,title:"Approach_distance (enum)",slug:"approach-distance-enum",children:[]},{level:3,title:"Power_outage_count (numeric)",slug:"power-outage-count-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/RTCZCGQ11LM.md",git:{updatedTime:164504413e4}}},53342:(e,i,t)=>{t.r(i),t.d(i,{default:()=>O});var n=t(66252),l=t(19364);const a=(0,n._)("h1",{id:"xiaomi-rtczcgq11lm",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#xiaomi-rtczcgq11lm","aria-hidden":"true"},"#"),(0,n.Uk)(" Xiaomi RTCZCGQ11LM")],-1),r=(0,n._)("table",null,[(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])]),(0,n._)("tbody",null,[(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"RTCZCGQ11LM")]),(0,n._)("tr",null,[(0,n._)("td",null,"Vendor"),(0,n._)("td",null,"Xiaomi")]),(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Aqara Presence Detector FP1 (regions not supported for now)")]),(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"presence, presence_event, monitoring_mode, approach_distance, power_outage_count, linkquality")]),(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/RTCZCGQ11LM.jpg",alt:"Xiaomi RTCZCGQ11LM"})])])])],-1),o=(0,n._)("h2",{id:"notes",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,n.Uk)(" Notes")],-1),u=(0,n._)("h3",{id:"adapter-firmware",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#adapter-firmware","aria-hidden":"true"},"#"),(0,n.Uk)(" Adapter firmware")],-1),d=(0,n._)("p",null,"In order for this device to work, at least the following firmware is required on your adapter:",-1),s=(0,n.Uk)("CC2530/CC2531: "),c={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},h=(0,n._)("code",null,"20211115",-1),A=(0,n.Uk)("CC1352/CC2652: "),p={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},I=(0,n._)("code",null,"20211114",-1),E=(0,n.Uk)("Conbee II: "),g={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},m=(0,n._)("code",null,"0x26720700",-1),k=(0,n._)("p",null,[(0,n._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),R=(0,n._)("h3",{id:"pairing",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,n.Uk)(" Pairing")],-1),f=(0,n._)("p",null,"Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn't work, try with a single short button press.",-1),_=(0,n._)("p",null,[(0,n._)("img",{src:l,alt:"RTCZCGQ11LM pairing"})],-1),Q=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),b=(0,n.Uk)("This device supports OTA updates, for more information see "),U=(0,n.Uk)("OTA updates"),v=(0,n.Uk)("."),w=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),B=(0,n.Uk)("How to use device type specific configuration"),x=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("p",null,[(0,n._)("code",null,"temperature_precision"),(0,n.Uk)(": Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of "),(0,n._)("code",null,"0"),(0,n.Uk)(" and with a with a maximum value of "),(0,n._)("code",null,"3")])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n._)("code",null,"temperature_calibration"),(0,n.Uk)(": Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.")])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n._)("code",null,"illuminance_precision"),(0,n.Uk)(": Number of digits after decimal point for illuminance, takes into effect on next report of device. The value must be a number with a minimum value of "),(0,n._)("code",null,"0"),(0,n.Uk)(" and with a with a maximum value of "),(0,n._)("code",null,"3")])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n._)("code",null,"illuminance_calibration"),(0,n.Uk)(": Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.")])])],-1),C=(0,n._)("h2",{id:"exposes",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#exposes","aria-hidden":"true"},"#"),(0,n.Uk)(" Exposes")],-1),D=(0,n._)("h3",{id:"presence-binary",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#presence-binary","aria-hidden":"true"},"#"),(0,n.Uk)(" Presence (binary)")],-1),y=(0,n._)("p",null,[(0,n.Uk)("Indicates whether the device detected presence. Value can be found in the published state on the "),(0,n._)("code",null,"presence"),(0,n.Uk)(" property. To read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") the value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"presence": ""}'),(0,n.Uk)(". It's not possible to write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") this value. If value equals "),(0,n._)("code",null,"true"),(0,n.Uk)(" presence is ON, if "),(0,n._)("code",null,"false"),(0,n.Uk)(" OFF.")],-1),P=(0,n._)("h3",{id:"presence-event-enum",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#presence-event-enum","aria-hidden":"true"},"#"),(0,n.Uk)(" Presence_event (enum)")],-1),j=(0,n._)("p",null,[(0,n.Uk)('Presence events: "enter", "leave", "left_enter", "right_leave", "right_enter", "left_leave", "approach", "away". Value can be found in the published state on the '),(0,n._)("code",null,"presence_event"),(0,n.Uk)(" property. It's not possible to read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") or write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") this value. The possible values are: "),(0,n._)("code",null,"enter"),(0,n.Uk)(", "),(0,n._)("code",null,"leave"),(0,n.Uk)(", "),(0,n._)("code",null,"left_enter"),(0,n.Uk)(", "),(0,n._)("code",null,"right_leave"),(0,n.Uk)(", "),(0,n._)("code",null,"right_enter"),(0,n.Uk)(", "),(0,n._)("code",null,"left_leave"),(0,n.Uk)(", "),(0,n._)("code",null,"approach"),(0,n.Uk)(", "),(0,n._)("code",null,"away"),(0,n.Uk)(".")],-1),Y=(0,n._)("h3",{id:"monitoring-mode-enum",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#monitoring-mode-enum","aria-hidden":"true"},"#"),(0,n.Uk)(" Monitoring_mode (enum)")],-1),H=(0,n._)("p",null,[(0,n.Uk)("Monitoring mode with or without considering right and left sides. Value can be found in the published state on the "),(0,n._)("code",null,"monitoring_mode"),(0,n.Uk)(" property. To read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") the value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"monitoring_mode": ""}'),(0,n.Uk)(". To write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") a value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"monitoring_mode": NEW_VALUE}'),(0,n.Uk)(". The possible values are: "),(0,n._)("code",null,"undirected"),(0,n.Uk)(", "),(0,n._)("code",null,"left_right"),(0,n.Uk)(".")],-1),N=(0,n._)("h3",{id:"approach-distance-enum",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#approach-distance-enum","aria-hidden":"true"},"#"),(0,n.Uk)(" Approach_distance (enum)")],-1),G=(0,n._)("p",null,[(0,n.Uk)("The distance at which the sensor detects approaching. Value can be found in the published state on the "),(0,n._)("code",null,"approach_distance"),(0,n.Uk)(" property. To read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") the value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"approach_distance": ""}'),(0,n.Uk)(". To write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") a value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"approach_distance": NEW_VALUE}'),(0,n.Uk)(". The possible values are: "),(0,n._)("code",null,"far"),(0,n.Uk)(", "),(0,n._)("code",null,"medium"),(0,n.Uk)(", "),(0,n._)("code",null,"near"),(0,n.Uk)(".")],-1),M=(0,n._)("h3",{id:"power-outage-count-numeric",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#power-outage-count-numeric","aria-hidden":"true"},"#"),(0,n.Uk)(" Power_outage_count (numeric)")],-1),L=(0,n._)("p",null,[(0,n.Uk)("Number of power outages (since last pairing). Value can be found in the published state on the "),(0,n._)("code",null,"power_outage_count"),(0,n.Uk)(" property. It's not possible to read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") or write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") this value.")],-1),T=(0,n._)("h3",{id:"linkquality-numeric",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#linkquality-numeric","aria-hidden":"true"},"#"),(0,n.Uk)(" Linkquality (numeric)")],-1),W=(0,n._)("p",null,[(0,n.Uk)("Link quality (signal strength). Value can be found in the published state on the "),(0,n._)("code",null,"linkquality"),(0,n.Uk)(" property. It's not possible to read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") or write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") this value. The minimal value is "),(0,n._)("code",null,"0"),(0,n.Uk)(" and the maximum value is "),(0,n._)("code",null,"255"),(0,n.Uk)(". The unit of this value is "),(0,n._)("code",null,"lqi"),(0,n.Uk)(".")],-1),q={},O=(0,t(83744).Z)(q,[["render",function(e,i){const t=(0,n.up)("OutboundLink"),l=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,r,o,u,d,(0,n._)("ul",null,[(0,n._)("li",null,[s,(0,n._)("a",c,[h,(0,n.Wm)(t)])]),(0,n._)("li",null,[A,(0,n._)("a",p,[I,(0,n.Wm)(t)])]),(0,n._)("li",null,[E,(0,n._)("a",g,[m,(0,n.Wm)(t)])])]),k,R,f,_,Q,(0,n._)("p",null,[b,(0,n.Wm)(l,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[U])),_:1}),v]),w,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(l,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[B])),_:1})])]),x,C,D,y,P,j,Y,H,N,G,M,L,T,W],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{for(const[t,n]of i)e[t]=n;return e}},19364:e=>{e.exports="data:image/jpeg;base64,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"}}]);
"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82774],{19349:(e,t,r)=>{r.r(t),r.d(t,{data:()=>n});const n={key:"v-5dcd8ff8",path:"/guide/installation/20_zigbee2mqtt-fails-to-start.html",title:"Zigbee2MQTT fails to start",lang:"en-US",frontmatter:{sidebarDepth:0,pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Error: SRSP - SYS - ping after 6000ms",slug:"error-srsp-sys-ping-after-6000ms",children:[]},{level:2,title:"Verify that you put the correct port in configuration.yaml",slug:"verify-that-you-put-the-correct-port-in-configuration-yaml",children:[{level:3,title:"Which port should I use for Texas Instruments LAUNCHXL-CC26X2R1/CC1352P-2, /dev/ttyACM0 or /dev/ttyACM1?",slug:"which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1",children:[]}]},{level:2,title:"Verify that the user you run Zigbee2MQTT as has write access to the port",slug:"verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port",children:[{level:3,title:"Method 1: Give your user permissions on every reboot.",slug:"method-1-give-your-user-permissions-on-every-reboot",children:[]},{level:3,title:"Method 2: Add your user to specific groups",slug:"method-2-add-your-user-to-specific-groups",children:[]}]},{level:2,title:"Error: Coordinator failed to start, probably the panID is already in use, try a different panID or channel",slug:"error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel",children:[]},{level:2,title:"Error: Resource temporarily unavailable Cannot lock port",slug:"error-resource-temporarily-unavailable-cannot-lock-port",children:[]},{level:2,title:"Raspberry Pi users: use a good power supply",slug:"raspberry-pi-users-use-a-good-power-supply",children:[]},{level:2,title:"Make sure the extension cable works",slug:"make-sure-the-extension-cable-works",children:[]},{level:2,title:"For Openhab users: disable zwave binding",slug:"for-openhab-users-disable-zwave-binding",children:[]},{level:2,title:"In case of a CC2530 or CC2531 adapter, verify that don't have a CC2540",slug:"in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540",children:[]},{level:2,title:"ModemManager is installed",slug:"modemmanager-is-installed",children:[]},{level:2,title:"hciuart is running",slug:"hciuart-is-running",children:[]},{level:2,title:"Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1 only: press the reset button on the device",slug:"texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device",children:[]},{level:2,title:"CC2531 coordinators only: press the reset button on the device",slug:"cc2531-coordinators-only-press-the-reset-button-on-the-device",children:[]},{level:2,title:"Texas Instruments LAUNCHXL-CC26X2R1 coordinator only: verify that you have the correct revision",slug:"texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision",children:[]}],filePathRelative:"guide/installation/20_zigbee2mqtt-fails-to-start.md",git:{updatedTime:164504413e4}}},43643:(e,t,r)=>{r.r(t),r.d(t,{default:()=>je});var n=r(66252),a=r(96512);const s=(0,n._)("h1",{id:"zigbee2mqtt-fails-to-start",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#zigbee2mqtt-fails-to-start","aria-hidden":"true"},"#"),(0,n.Uk)(" Zigbee2MQTT fails to start")],-1),o=(0,n._)("p",null,"Most of the time this is caused by Zigbee2MQTT not being able to communicate with your Zigbee adapter.",-1),i={class:"table-of-contents"},l=(0,n.Uk)("Error: SRSP - SYS - ping after 6000ms"),u=(0,n.Uk)("Verify that you put the correct port in configuration.yaml"),c=(0,n.Uk)("Which port should I use for Texas Instruments LAUNCHXL-CC26X2R1/CC1352P-2, /dev/ttyACM0 or /dev/ttyACM1?"),d=(0,n.Uk)("Verify that the user you run Zigbee2MQTT as has write access to the port"),h=(0,n.Uk)("Method 1: Give your user permissions on every reboot."),p=(0,n.Uk)("Method 2: Add your user to specific groups"),b=(0,n.Uk)("Error: Coordinator failed to start, probably the panID is already in use, try a different panID or channel"),_=(0,n.Uk)("Error: Resource temporarily unavailable Cannot lock port"),m=(0,n.Uk)("Raspberry Pi users: use a good power supply"),y=(0,n.Uk)("Make sure the extension cable works"),f=(0,n.Uk)("For Openhab users: disable zwave binding"),g=(0,n.Uk)("In case of a CC2530 or CC2531 adapter, verify that don't have a CC2540"),k=(0,n.Uk)("ModemManager is installed"),v=(0,n.Uk)("hciuart is running"),U=(0,n.Uk)("Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1 only: press the reset button on the device"),w=(0,n.Uk)("CC2531 coordinators only: press the reset button on the device"),C=(0,n.Uk)("Texas Instruments LAUNCHXL-CC26X2R1 coordinator only: verify that you have the correct revision"),x=(0,n._)("h2",{id:"error-srsp-sys-ping-after-6000ms",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#error-srsp-sys-ping-after-6000ms","aria-hidden":"true"},"#"),(0,n.Uk)(" Error: "),(0,n._)("code",null,"SRSP - SYS - ping after 6000ms")],-1),T=(0,n._)("p",null,"2 common reasons of this error:",-1),S=(0,n.Uk)("The port of your serial adapter changed. Check "),M=(0,n.Uk)("this"),I=(0,n.Uk)(" to find out the port of your adapter."),R=(0,n.Uk)("If you are using a CC2530 or CC2531; it is a common issue for this adapter to crash (due to its outdated hardware). Reflashing the firmware should fix the problem. If it happens often consider flashing the "),A={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing",target:"_blank",rel:"noopener noreferrer"},L=(0,n.Uk)("source routing firmware"),W=(0,n.Uk)(" or upgrade to a "),D=(0,n.Uk)("more powerful adapter"),P=(0,n.Uk)("."),E=(0,n._)("h2",{id:"verify-that-you-put-the-correct-port-in-configuration-yaml",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#verify-that-you-put-the-correct-port-in-configuration-yaml","aria-hidden":"true"},"#"),(0,n.Uk)(" Verify that you put the correct port in configuration.yaml")],-1),X=(0,n._)("p",null,"Execute the following command to find out the correct path:",-1),B=(0,n._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n._)("pre",{class:"language-bash"},[(0,n._)("code",null,[(0,n.Uk)("pi@raspberry:/ $ "),(0,n._)("span",{class:"token function"},"ls"),(0,n.Uk)(" -l /dev/serial/by-id\ntotal "),(0,n._)("span",{class:"token number"},"0"),(0,n.Uk)("\nlrwxrwxrwx. "),(0,n._)("span",{class:"token number"},"1"),(0,n.Uk)(" root root "),(0,n._)("span",{class:"token number"},"13"),(0,n.Uk)(" Oct "),(0,n._)("span",{class:"token number"},"19"),(0,n.Uk)(),(0,n._)("span",{class:"token number"},"19"),(0,n.Uk)(":26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -"),(0,n._)("span",{class:"token operator"},">"),(0,n.Uk)(),(0,n._)("span",{class:"token punctuation"},".."),(0,n.Uk)("/"),(0,n._)("span",{class:"token punctuation"},".."),(0,n.Uk)("/ttyACM0\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br")])],-1),z=(0,n._)("p",null,[(0,n.Uk)("In this example the correct "),(0,n._)("code",null,"port"),(0,n.Uk)(" would be "),(0,n._)("code",null,"/dev/ttyACM0"),(0,n.Uk)(".")],-1),N=(0,n._)("h3",{id:"which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1","aria-hidden":"true"},"#"),(0,n.Uk)(" Which port should I use for Texas Instruments LAUNCHXL-CC26X2R1/CC1352P-2, /dev/ttyACM0 or /dev/ttyACM1?")],-1),Z=(0,n._)("p",null,"The Texas Instruments launchpad has a build in debugger. This debugger also registers a port next to the device data port. Of course this is not necessarily number 0 and 1. But normally the lowest number is the device data port and the other the debugger.",-1),H=(0,n._)("p",null,"To find the correct port, execute:",-1),O=(0,n._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n._)("pre",{class:"language-bash"},[(0,n._)("code",null,[(0,n.Uk)("pi@raspberry:/ $ "),(0,n._)("span",{class:"token function"},"ls"),(0,n.Uk)(" -l /dev/serial/by-id\ntotal "),(0,n._)("span",{class:"token number"},"0"),(0,n.Uk)("\nlrwxrwxrwx "),(0,n._)("span",{class:"token number"},"1"),(0,n.Uk)(" root root "),(0,n._)("span",{class:"token number"},"13"),(0,n.Uk)(" Jan  "),(0,n._)("span",{class:"token number"},"6"),(0,n.Uk)(),(0,n._)("span",{class:"token number"},"19"),(0,n.Uk)(":07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if00 -"),(0,n._)("span",{class:"token operator"},">"),(0,n.Uk)(),(0,n._)("span",{class:"token punctuation"},".."),(0,n.Uk)("/"),(0,n._)("span",{class:"token punctuation"},".."),(0,n.Uk)("/ttyACM0\nlrwxrwxrwx "),(0,n._)("span",{class:"token number"},"1"),(0,n.Uk)(" root root "),(0,n._)("span",{class:"token number"},"13"),(0,n.Uk)(" Jan  "),(0,n._)("span",{class:"token number"},"6"),(0,n.Uk)(),(0,n._)("span",{class:"token number"},"19"),(0,n.Uk)(":07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if03 -"),(0,n._)("span",{class:"token operator"},">"),(0,n.Uk)(),(0,n._)("span",{class:"token punctuation"},".."),(0,n.Uk)("/"),(0,n._)("span",{class:"token punctuation"},".."),(0,n.Uk)("/ttyACM1\n")])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br")])],-1),q=(0,n._)("p",null,[(0,n.Uk)("The device with id ending with "),(0,n._)("em",null,"if00"),(0,n.Uk)(" is for device data. Use this port in your configuration.")],-1),Y=(0,n._)("h2",{id:"verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port","aria-hidden":"true"},"#"),(0,n.Uk)(" Verify that the user you run Zigbee2MQTT as has write access to the port")],-1),Q=(0,n._)("p",null,[(0,n.Uk)("This can be tested by executing: "),(0,n._)("code",null,"test -w [PORT] && echo success || echo failure"),(0,n.Uk)(" ( e.g. "),(0,n._)("code",null,"test -w /dev/ttyACM0 && echo success || echo failure"),(0,n.Uk)(").")],-1),V=(0,n._)("p",null,[(0,n.Uk)("If it outputs "),(0,n._)("code",null,"failure"),(0,n.Uk)(" it could mean your user does not have access to the port. To test assign write access by executing: "),(0,n._)("code",null,"sudo chown [USER] [PORT]"),(0,n.Uk)(" (e.g. "),(0,n._)("code",null,"sudo chown pi /dev/ttyACM0"),(0,n.Uk)(").")],-1),G=(0,n._)("p",null,[(0,n.Uk)("if it outputs "),(0,n._)("code",null,"failure"),(0,n.Uk)(", then you need to permanently give your user permission to the device.")],-1),F=(0,n._)("h3",{id:"method-1-give-your-user-permissions-on-every-reboot",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#method-1-give-your-user-permissions-on-every-reboot","aria-hidden":"true"},"#"),(0,n.Uk)(" Method 1: Give your user permissions on every reboot.")],-1),K=(0,n._)("p",null,"You can create a 'udev' rule to give your user permissions after every reboot:",-1),$=(0,n._)("ol",null,[(0,n._)("li",null,[(0,n._)("p",null,[(0,n._)("code",null,"udevadm info -a -n /dev/ttyACM0 | grep 'serial'"),(0,n.Uk)(" get the serial to your device "),(0,n._)("code",null,"YOURSERIAL")])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Uk)("Create the rule file with: "),(0,n._)("code",null,"sudo nano /etc/udev/rules.d/99-usb-serial.rules")])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Uk)("add this line: "),(0,n._)("code",null,'SUBSYSTEM=="tty", ATTRS{idVendor}=="0451", ATTRS{idProduct}=="16a8", ATTRS{serial}=="YOURSERIAL", SYMLINK="ttyUSB.CC2531-01", OWNER="pi"')])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Uk)("modify your Zigbee2MQTT config to adjust new SYMLINK name: "),(0,n._)("code",null,"nano /opt/zigbee2mqtt/data/configuration.yaml")])])],-1),J=(0,n._)("p",null,[(0,n._)("code",null,"… serial: port: /dev/ttyUSB.CC2531-01 …")],-1),j=(0,n._)("p",null,"After reboot your device will have the right permissions and always the same name.",-1),ee=(0,n._)("h3",{id:"method-2-add-your-user-to-specific-groups",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#method-2-add-your-user-to-specific-groups","aria-hidden":"true"},"#"),(0,n.Uk)(" Method 2: Add your user to specific groups")],-1),te=(0,n._)("p",null,"As mentioned on https://github.com/esp8266/source-code-examples/issues/26 , depending on your linux installation, various groups could have ownership of the device.",-1),re=(0,n._)("p",null,[(0,n.Uk)("Add your user to the "),(0,n._)("code",null,"uucp "),(0,n.Uk)(" , "),(0,n._)("code",null,"tty "),(0,n.Uk)(" , "),(0,n._)("code",null,"dialout "),(0,n.Uk)(" groups:")],-1),ne=(0,n._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,n._)("pre",{class:"language-text"},[(0,n._)("code",null,"sudo usermod -a -G uucp $USER\nsudo usermod -a -G tty $USER\nsudo usermod -a -G dialout $USER\n")]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br")])],-1),ae=(0,n._)("p",null,"Reboot your device and now your user should have access to the device.",-1),se=(0,n._)("h2",{id:"error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel","aria-hidden":"true"},"#"),(0,n.Uk)(" Error: "),(0,n._)("code",null,"Coordinator failed to start, probably the panID is already in use, try a different panID or channel")],-1),oe=(0,n._)("li",null,"If you still get this error after increasing the panID and you are using a Raspberry Pi with other USB devices attached (e.g. SSD) try connecting the SSD or adapter through a powered USB hub.",-1),ie=(0,n.Uk)("In case you are getting this after first starting successfully and pairing a device it might be that the firmware has been flashed incorrectly. Try flashing the stick on a different computer ("),le={href:"https://github.com/Koenkk/zigbee2mqtt/issues/6302",target:"_blank",rel:"noopener noreferrer"},ue=(0,n.Uk)("detailed info"),ce=(0,n.Uk)("). This issue mainly occurs in combination with a Slaesh's CC2652RB stick."),de=(0,n._)("h2",{id:"error-resource-temporarily-unavailable-cannot-lock-port",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#error-resource-temporarily-unavailable-cannot-lock-port","aria-hidden":"true"},"#"),(0,n.Uk)(" Error: "),(0,n._)("code",null,"Resource temporarily unavailable Cannot lock port")],-1),he=(0,n._)("p",null,[(0,n.Uk)("This error occurs when another program is already using (and thus locking) the adapter. You can find out which via the following command: "),(0,n._)("code",null,"ls -l /proc/[0-9]/fd/ |grep /dev/ttyACM0"),(0,n.Uk)(" (replace "),(0,n._)("code",null,"/dev/ttyACM0"),(0,n.Uk)(" with your adapter port).")],-1),pe=(0,n._)("h2",{id:"raspberry-pi-users-use-a-good-power-supply",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#raspberry-pi-users-use-a-good-power-supply","aria-hidden":"true"},"#"),(0,n.Uk)(" Raspberry Pi users: use a good power supply")],-1),be=(0,n._)("p",null,"A bad power supply can make your system and its USB devices unstable. Make sure to use a good power supply.",-1),_e=(0,n._)("p",null,[(0,n.Uk)("In case you see message like below when running "),(0,n._)("code",null,"dmesg -w"),(0,n.Uk)(" you are using a bad power supply.")],-1),me=(0,n._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,n._)("pre",{class:"language-text"},[(0,n._)("code",null,"[44870.355590] Under-voltage detected! (0x00050005)\n[44874.515618] Voltage normalised (0x00000000)\n[44880.755718] Under-voltage detected! (0x00050005)\n[44889.075627] Voltage normalised (0x00000000)\n")]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br")])],-1),ye=(0,n._)("p",null,"When you have a SSD connected to the Pi, try connecting the adapter via a powered USB hub.",-1),fe=(0,n._)("h2",{id:"make-sure-the-extension-cable-works",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#make-sure-the-extension-cable-works","aria-hidden":"true"},"#"),(0,n.Uk)(" Make sure the extension cable works")],-1),ge=(0,n._)("p",null,[(0,n.Uk)("A bad extension cable can lead to connection issues between the system and the adapter. Symptoms of this are disconnection messages in the "),(0,n._)("code",null,"dmesg -w"),(0,n.Uk)(" log like below.")],-1),ke=(0,n._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,n._)("pre",{class:"language-text"},[(0,n._)("code",null,"[44929.156957] usb 1-1.5: USB disconnect, device number 119\n[44929.455555] usb 1-1.5: new full-speed USB device number 120 using dwc_otg\n[44929.604582] usb 1-1.5: New USB device found, idVendor=0451, idProduct=16a8, bcdDevice= 0.09\n[44929.604596] usb 1-1.5: New USB device strings: Mfr=1, Product=2, SerialNumber=3\n[44929.604606] usb 1-1.5: Product: TI CC2531 USB CDC\n[44929.604615] usb 1-1.5: Manufacturer: Texas Instruments\n")]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"6"),(0,n._)("br")])],-1),ve=(0,n._)("h2",{id:"for-openhab-users-disable-zwave-binding",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#for-openhab-users-disable-zwave-binding","aria-hidden":"true"},"#"),(0,n.Uk)(" For Openhab users: disable zwave binding")],-1),Ue=(0,n.Uk)("The Openhab zwave binding interferes with Zigbee2MQTT, click "),we={href:"https://community.openhab.org/t/apparently-the-zwave-binding-blocks-the-dev-ttyusb0-port-in-combination-with-a-cc2652rb-zigbee2mqtt-dongle/103245",target:"_blank",rel:"noopener noreferrer"},Ce=(0,n.Uk)("here"),xe=(0,n.Uk)(" for more information."),Te=(0,n._)("h2",{id:"in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540","aria-hidden":"true"},"#"),(0,n.Uk)(" In case of a CC2530 or CC2531 adapter, verify that don't have a CC2540")],-1),Se=(0,n._)("p",null,"The CC2540 can be confused easily with the CC2531 as it looks (almost) exactly the same. However, this device does not support zigbee but bluetooth. This can be verified by looking at the chip.",-1),Me={id:"modemmanager-is-installed",tabindex:"-1"},Ie=(0,n._)("a",{class:"header-anchor",href:"#modemmanager-is-installed","aria-hidden":"true"},"#",-1),Re=(0,n.Uk)(),Ae={href:"https://www.freedesktop.org/wiki/Software/ModemManager/",target:"_blank",rel:"noopener noreferrer"},Le=(0,n.Uk)("ModemManager"),We=(0,n.Uk)(" is installed"),De=(0,n._)("p",null,[(0,n.Uk)("ModemManager, which is default installed on e.g. Ubuntu, is known to cause problems. It can easily be fixed by removing ModemManager through "),(0,n._)("code",null,"sudo apt-get purge modemmanager"),(0,n.Uk)(".")],-1),Pe=(0,n._)("h2",{id:"hciuart-is-running",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#hciuart-is-running","aria-hidden":"true"},"#"),(0,n.Uk)(" hciuart is running")],-1),Ee=(0,n._)("p",null,[(0,n.Uk)("hciuart can be disabled by executing: "),(0,n._)("code",null,"sudo systemctl disable hciuart"),(0,n.Uk)(".")],-1),Xe=(0,n._)("h2",{id:"texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device","aria-hidden":"true"},"#"),(0,n.Uk)(" Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1 only: press the reset button on the device")],-1),Be=(0,n.Uk)("If Zigbee2MQTT fails to start with a Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1 with "),ze=(0,n._)("code",null,"Error: SRSP - SYS - version after 6000ms",-1),Ne=(0,n.Uk)(", you most probably have connected your device to a system that requires pressing the reset button (the one next to the USB connector) momentarily/shortly after connecting the USB cable. This issue has primarily been observed on x86 architectures only ( e.g., Intel NUC, HPE Microserver, i7 laptop), see also "),Ze={href:"https://github.com/Koenkk/zigbee2mqtt/issues/2162",target:"_blank",rel:"noopener noreferrer"},He=(0,n.Uk)("#2162"),Oe=(0,n.Uk)(". The procedure has to be repeated every time the adapter is re-connected and it's not clear yet, whether this can be fixed at all. It does not seem to occur on ARM based boards (Raspberry Pi, ODROID XU4)."),qe=(0,n._)("p",null,"Something that can also solve the issue is to replug the USB cable.",-1),Ye=(0,n._)("h2",{id:"cc2531-coordinators-only-press-the-reset-button-on-the-device",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#cc2531-coordinators-only-press-the-reset-button-on-the-device","aria-hidden":"true"},"#"),(0,n.Uk)(" CC2531 coordinators only: press the reset button on the device")],-1),Qe=(0,n._)("p",null,"When you plug the CC2531 in your computer, the green LED should go on. By pressing the reset button on the CC2531 the green LED should go off. The CC2531 has 2 buttons on it, the reset button is the one which is closest to the USB port. Now try starting Zigbee2MQTT again.",-1),Ve=(0,n._)("h2",{id:"texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision","aria-hidden":"true"},"#"),(0,n.Uk)(" Texas Instruments LAUNCHXL-CC26X2R1 coordinator only: verify that you have the correct revision")],-1),Ge=(0,n._)("p",null,[(0,n.Uk)("The revision of your board can be seen in UniFlash by clicking "),(0,n._)("em",null,"more info"),(0,n.Uk)(" in the top, now press "),(0,n._)("em",null,"Read device info"),(0,n.Uk)(".")],-1),Fe=(0,n._)("p",null,[(0,n.Uk)("The correct revision is: "),(0,n._)("strong",null,"E"),(0,n.Uk)(" like shown below.")],-1),Ke=(0,n._)("p",null,[(0,n._)("img",{src:a,alt:"cc26xr1_revision"})],-1),$e=(0,n._)("p",null,"All earlier version are not supported (these are development boards). Return this board to the seller immediately.",-1),Je={},je=(0,r(83744).Z)(Je,[["render",function(e,t){const r=(0,n.up)("RouterLink"),a=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[s,o,(0,n._)("nav",i,[(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(r,{to:"#error-srsp-sys-ping-after-6000ms"},{default:(0,n.w5)((()=>[l])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#verify-that-you-put-the-correct-port-in-configuration-yaml"},{default:(0,n.w5)((()=>[u])),_:1}),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(r,{to:"#which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1"},{default:(0,n.w5)((()=>[c])),_:1})])])]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port"},{default:(0,n.w5)((()=>[d])),_:1}),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(r,{to:"#method-1-give-your-user-permissions-on-every-reboot"},{default:(0,n.w5)((()=>[h])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#method-2-add-your-user-to-specific-groups"},{default:(0,n.w5)((()=>[p])),_:1})])])]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel"},{default:(0,n.w5)((()=>[b])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#error-resource-temporarily-unavailable-cannot-lock-port"},{default:(0,n.w5)((()=>[_])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#raspberry-pi-users-use-a-good-power-supply"},{default:(0,n.w5)((()=>[m])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#make-sure-the-extension-cable-works"},{default:(0,n.w5)((()=>[y])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#for-openhab-users-disable-zwave-binding"},{default:(0,n.w5)((()=>[f])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540"},{default:(0,n.w5)((()=>[g])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#modemmanager-is-installed"},{default:(0,n.w5)((()=>[k])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#hciuart-is-running"},{default:(0,n.w5)((()=>[v])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device"},{default:(0,n.w5)((()=>[U])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#cc2531-coordinators-only-press-the-reset-button-on-the-device"},{default:(0,n.w5)((()=>[w])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(r,{to:"#texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision"},{default:(0,n.w5)((()=>[C])),_:1})])])]),x,T,(0,n._)("ol",null,[(0,n._)("li",null,[S,(0,n.Wm)(r,{to:"/guide/installation/01_linux.html#1-determine-location-of-the-adapter-and-checking-user-permissions"},{default:(0,n.w5)((()=>[M])),_:1}),I]),(0,n._)("li",null,[R,(0,n._)("a",A,[L,(0,n.Wm)(a)]),W,(0,n.Wm)(r,{to:"/guide/adapters/"},{default:(0,n.w5)((()=>[D])),_:1}),P])]),E,X,B,z,N,Z,H,O,q,Y,Q,V,G,F,K,$,J,j,ee,te,re,ne,ae,se,(0,n._)("ul",null,[oe,(0,n._)("li",null,[ie,(0,n._)("a",le,[ue,(0,n.Wm)(a)]),ce])]),de,he,pe,be,_e,me,ye,fe,ge,ke,ve,(0,n._)("p",null,[Ue,(0,n._)("a",we,[Ce,(0,n.Wm)(a)]),xe]),Te,Se,(0,n._)("h2",Me,[Ie,Re,(0,n._)("a",Ae,[Le,(0,n.Wm)(a)]),We]),De,Pe,Ee,Xe,(0,n._)("p",null,[Be,ze,Ne,(0,n._)("a",Ze,[He,(0,n.Wm)(a)]),Oe]),qe,Ye,Qe,Ve,Ge,Fe,Ke,$e],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[r,n]of t)e[r]=n;return e}},96512:(e,t,r)=>{e.exports=r.p+"assets/img/cc26xr1_revision.6de88388.png"}}]);